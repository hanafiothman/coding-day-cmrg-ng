import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent {}

@NgModule({
	declarations: [ButtonComponent],
	imports: [
		CommonModule,
		MatButtonModule
	],
	exports: [ButtonComponent]
})
export class ButtonModule {}
