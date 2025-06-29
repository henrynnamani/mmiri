import { Role } from '@modules/common/enums';
export declare const RegisterDoc: () => <TFunction extends Function, Y>(target: TFunction | object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
export declare const LoginDoc: () => <TFunction extends Function, Y>(target: TFunction | object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
export declare class Register {
    email: string;
    password: string;
    businessName: string;
    bankCode: string;
    accountNumber: string;
    role: Role;
    phoneNumber: string;
}
