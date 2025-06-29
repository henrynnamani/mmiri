export declare const UserOrdersDoc: () => <TFunction extends Function, Y>(target: TFunction | object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
export declare class UserOrderSuccessDto {
    data: object;
    message: string;
    success: boolean;
}
export declare class UserBadRequestDto {
    message: string;
    success: boolean;
}
