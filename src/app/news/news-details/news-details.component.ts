import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/api/service/news.service';
import { UserService } from 'src/api/service/user.service';
import { News } from 'src/model/news';
import { User } from 'src/model/user';

@Component({
	selector: 'app-news-details',
	templateUrl: './news-details.component.html',
	styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
	@Input()
	newsDetails!: News;

	private _authorId!: string;

	get authorId(): string {
		return this._authorId;
	}

	set authorId(value: string) {
		this._authorId = value;
		this.fetchAuthorData(value);
	}

	constructor(private route: ActivatedRoute, private newsService: NewsService, private userService: UserService) {}

	ngOnInit(): void {
		const newsId = this.route.snapshot.paramMap.get('newsId');
		if(newsId) this.fetchNewsDetails(newsId);
	}

	private fetchNewsDetails(newsId: string): void {
		this.newsService.fetchNewsDetails(newsId).subscribe((newsDetails) => { 
			this.newsDetails = newsDetails;
			this.authorId = newsDetails.author.id.toString();
		});
	}

	private fetchAuthorData(authorId: string): void {
		this.userService.fetchUser(authorId).subscribe((user) => { 
			this.newsDetails.author = user;
		});
	}
}
