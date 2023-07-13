import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsContainerComponent } from './news-container/news-container.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsCardModule } from './news-card/news-card.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [
		NewsContainerComponent
	],
	imports: [
		CommonModule,
		NewsRoutingModule,
		NewsCardModule,
		MatButtonModule
	]
})
export class NewsModule { }
