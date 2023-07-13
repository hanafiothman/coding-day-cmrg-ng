import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from 'src/model/news';

@Injectable({
    providedIn: 'root'
})
export class NewsService {
    constructor(private http: HttpClient) {

    }

    fetchNews() {
        return this.http.get<News[]>('@api/news');
    }

    createNews() {

    }
}