import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersContainerComponent } from './users-container/users-container.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserCardModule } from './user-card/user-card.component';

@NgModule({
	declarations: [
		UsersContainerComponent
	],
  	imports: [
		CommonModule,
		UsersRoutingModule,
		UserCardModule
	]
})
export class UsersModule { }
