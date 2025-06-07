import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Injectable, Logger } from '@nestjs/common';
import { Job } from 'bullmq';

@Processor('assign-vendor')
@Injectable()
export class OrderProcessor extends WorkerHost {
  private readonly logger = new Logger(OrderProcessor.name);
  async process(job: Job<any, any, string>): Promise<any> {
    console.log('I am working!!!');
    this.logger.log(`Processing job: ${JSON.stringify(job.data)}`);
  }
}
