import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/model/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) {

    }

    fetchUsers(page: number, limit: number) {
        return this.http.get<User[]>(`@api/users?_page=${page}&_limit=${limit}`);
    }

    fetchActiveUsers(page: number, limit: number) {
        return this.http.get<User[]>(`@api/users?isActive=true&_page=${page}&_limit=${limit}`);
    }

    fetchUser(userId: string) {
        return this.http.get<User>(`@api/users/${userId}`);
    }
}