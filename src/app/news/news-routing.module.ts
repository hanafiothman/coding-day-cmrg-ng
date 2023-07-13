import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsContainerComponent } from './news-container/news-container.component';
import { CreateNewsComponent } from './create-news/create-news.component';

const routes: Routes = [
    {
        path: '',
        component: NewsContainerComponent
    },
    {
        path: 'create',
        component: CreateNewsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NewsRoutingModule {}
