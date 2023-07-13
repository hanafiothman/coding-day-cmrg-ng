import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/model/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) {

    }

    fetchUsers() {
        return this.http.get<User[]>('@api/users');
    }

    fetchUser(userId: string) {
        return this.http.get<User>(`@api/users/${userId}`);
    }
}