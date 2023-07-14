import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsContainerComponent } from './news-container/news-container.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsCardModule } from './news-card/news-card.component';
import { MatButtonModule } from '@angular/material/button';
import { NewsDetailsComponent } from './news-details/news-details.component';

@NgModule({
	declarations: [
		NewsContainerComponent,
  		NewsDetailsComponent
	],
	imports: [
		CommonModule,
		NewsRoutingModule,
		NewsCardModule,
		MatButtonModule
	]
})
export class NewsModule { }
