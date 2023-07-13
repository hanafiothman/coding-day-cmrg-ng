import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

@Component({
	selector: 'app-avatar',
	templateUrl: './avatar.component.html',
	styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
	@Input()
	source!: string;
}

@NgModule({
	declarations: [AvatarComponent],
	imports: [
		CommonModule
	],
	exports: [AvatarComponent]
})
export class AvatarModule {}

