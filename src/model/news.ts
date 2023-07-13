import { User } from './user';

export interface News {
    readonly id: number;
    icon: string;
    title: string;
    message?: string;
    timestamp: string;
    author: User
}
