import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/api/service/user.service';
import { User } from 'src/model/user';

@Component({
	selector: 'app-users-container',
	templateUrl: './users-container.component.html',
	styleUrls: ['./users-container.component.scss']
})
export class UsersContainerComponent implements OnInit {
  	users: User[] = [];

	private page: number = 0;
	private limit: number = 5;

	constructor(private userService: UserService) {}

	ngOnInit(): void {
		this.fetchUsers(this.page, this.limit);
	}

	private fetchUsers(page: number, limit: number): void {
		this.userService.fetchActiveUsers(page, limit).subscribe((users) => { 
			this.users = users;	
		});
	}
}
