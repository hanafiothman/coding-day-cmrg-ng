import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsContainerComponent } from './news-container/news-container.component';

const routes: Routes = [
    {
        path: '',
        component: NewsContainerComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NewsRoutingModule {}
