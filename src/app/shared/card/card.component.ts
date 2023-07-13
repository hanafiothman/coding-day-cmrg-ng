import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent {}

@NgModule({
	declarations: [CardComponent],
	imports: [
		CommonModule,
		MatCardModule
	],
	exports: [CardComponent]
})
export class CardModule {}
