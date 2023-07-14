import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
	selector: 'app-user-card',
	templateUrl: './user-card.component.html',
	styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
	@Input()
	userAvatar!: string;
	@Input()
	userName!: string;
	@Input()
	userTitle: string = '';
}

@NgModule({
	declarations: [UserCardComponent],
	imports: [
		CommonModule,
		MatCardModule
	],
	exports: [UserCardComponent]
})
export class UserCardModule { }