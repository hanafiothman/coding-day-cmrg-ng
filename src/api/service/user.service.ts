import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { User } from 'src/model/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    usersCache$!: Observable<User[]>;
    activeUsersCache$!: Observable<User[]>;

    constructor(private http: HttpClient) {

    }

    fetchUsers(page: number, limit: number) {
        if(!this.usersCache$) {
            this.usersCache$ = this.http.get<User[]>(`@api/users?_page=${page}&_limit=${limit}`).pipe(
                shareReplay(1)
            );
        }
        return this.usersCache$;
    }

    fetchActiveUsers(page: number, limit: number) {
        if(!this.activeUsersCache$) {
            this.activeUsersCache$ = this.http.get<User[]>(`@api/users?isActive=true&_page=${page}&_limit=${limit}`).pipe(
                shareReplay(1)
            );
        }
        return this.activeUsersCache$;
    }

    fetchUser(userId: string) {
        return this.http.get<User>(`@api/users/${userId}`);
    }
}