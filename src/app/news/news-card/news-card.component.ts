import { CommonModule, formatDate } from '@angular/common';
import { Component, Input, NgModule, OnChanges, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { User } from 'src/model/user';

@Component({
	selector: 'app-news-card',
	templateUrl: './news-card.component.html',
	styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnChanges {
	@Input()
	newsIcon!: string;
	@Input()
    newsTitle!: string;
	@Input()
    newsMessage?: string;
	@Input()
    newsTimestamp!: string;
	@Input()
    newsAuthor!: User;
	@Input()
	clickable!: boolean;

	ngOnChanges(changes: SimpleChanges): void {
        if ('newsTimestamp' in changes && changes['newsTimestamp'].currentValue) {
			this.newsTimestamp = formatDate(changes['newsTimestamp'].currentValue, 'MMM d, yyyy, h:mm:ss a', 'en-US');
        }
    }
}

@NgModule({
	declarations: [NewsCardComponent],
	imports: [
		CommonModule,
		MatCardModule
	],
	exports: [NewsCardComponent]
})
export class NewsCardModule { }
