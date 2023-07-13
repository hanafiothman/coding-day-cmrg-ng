import { CommonModule, formatDate } from '@angular/common';
import { Component, Input, NgModule, OnChanges, SimpleChanges } from '@angular/core';
import { AvatarModule } from 'src/app/shared/avatar/avatar.component';
import { CardModule } from 'src/app/shared/card/card.component';
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
    newsAuthor!: User

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
		CardModule,
		AvatarModule
	],
	exports: [NewsCardComponent]
  })
  export class NewsCardModule { }
