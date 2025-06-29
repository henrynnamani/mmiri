import { OrderService } from './order.service';
import { OrderDto } from './dto/order.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    placeOrder(order: OrderDto, request: any): Promise<{
        data: any;
        message: string;
    }>;
}
