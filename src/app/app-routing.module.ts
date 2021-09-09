import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'article',
    loadChildren: () => import('./article/article.module').then((m) => m.ArticleModule),
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // preload all modules; optionally we could
      // implement a custom preloading strategy for just some
      // of the modules (PRs welcome 😉)
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
