import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { News } from 'src/model/news';

@Injectable({
    providedIn: 'root'
})
export class NewsService {
    newsCache$!: Observable<News[]>;

    constructor(private http: HttpClient) {

    }

    fetchNews() {
        if(!this.newsCache$) {
            this.newsCache$ = this.http.get<News[]>('@api/news').pipe(
                map((value: any) => {
                    return value.sort((d1: News, d2: News) => {                    
                        return new Date(d2.timestamp).valueOf() - new Date(d1.timestamp).valueOf();
                    });
                }),
                shareReplay(1)
            );
        }
        return this.newsCache$;
    }

    fetchNewsDetails(newsId: string) {
        return this.http.get<News>(`@api/news/${newsId}`);
    }

    createNews() {

    }
}