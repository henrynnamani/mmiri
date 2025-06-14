import { LodgePriceModelAction } from '@modules/lodge_price/model/lodge_price.model-action';
import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Job } from 'bullmq';
import { OrderService } from './order.service';
import * as SYS_MSG from '@modules/common/system-message';
import { TelegramService } from '@modules/telegram/telegram.service';
import { Vendor } from '@modules/vendors/model/vendors.model';

@Processor('assign-vendor')
@Injectable()
export class OrderProcessor extends WorkerHost {
  constructor(
    private readonly lodgePriceModelAction: LodgePriceModelAction,
    private readonly orderService: OrderService,
    private readonly telegramService: TelegramService,
  ) {
    super();
  }

  private readonly logger = new Logger(OrderProcessor.name);
  async process(job: Job<any, any, string>): Promise<any> {
    this.logger.log(`Processing job: ${JSON.stringify(job.data)}`);
    const { lodgeId, orderId } = job.data;

    const vendors: Vendor[] =
      await this.lodgePriceModelAction.findAvailableVendorsByLodge(lodgeId);

    if (!vendors) {
      this.logger.warn(
        `No vendors available for lodge ${lodgeId}, retrying...`,
      );
      throw new NotFoundException(SYS_MSG.VENDOR_NOT_FOUND);
    }

    const selectedVendor = vendors[0];

    await this.orderService.assignVendorToOrder(orderId, selectedVendor?.id);

    const order = await this.orderService.getOrderById(orderId);

    if (!order) {
      throw new NotFoundException(SYS_MSG.ORDER_NOT_FOUND);
    }

    await this.telegramService.notifyVendorOfOrder(
      selectedVendor?.chatId,
      order,
    );
  }
}
