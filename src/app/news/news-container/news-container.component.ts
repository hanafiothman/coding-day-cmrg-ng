import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/api/service/news.service';
import { News } from 'src/model/news';

@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.scss']
})
export class NewsContainerComponent implements OnInit {
  news: News[] = [];

  constructor(private newsService: NewsService, private router: Router) {

  }

  ngOnInit(): void {
    this.fetchNews();
  }

  private fetchNews(): void {
    this.newsService.fetchNews().subscribe((news) => { 
      this.news = news.sort((n1, n2) => {
        return new Date(n2.timestamp).valueOf() - new Date(n1.timestamp).valueOf();
      });
    });
  }

  navigateCreateNews(): void {    
    this.router.navigate(['/news/create']);
  }
}
