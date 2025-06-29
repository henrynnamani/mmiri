import { Role } from '@modules/common/enums';
export declare class RegisterDto {
    email: string;
    password: string;
    chatId: number;
    businessName: string;
    bankCode: string;
    accountNumber: string;
    role: Role;
    phoneNumber: string;
}
export declare class LoginDto {
    email: string;
    password: string;
    role: Role;
}
