import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/news',
    pathMatch: 'full'
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then((m) => m.NewsModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then((m) => m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
