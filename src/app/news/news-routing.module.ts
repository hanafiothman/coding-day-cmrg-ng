import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsContainerComponent } from './news-container/news-container.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';

const routes: Routes = [
    {
        path: '',
        component: NewsContainerComponent
    },
    {
        path: 'create',
        component: CreateNewsComponent
    },
    {
        path: ':newsId',
        component: NewsDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NewsRoutingModule {}
