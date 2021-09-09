import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { ArticleResolver } from './article-resolver.service';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { MarkdownPipe } from './markdown.pipe';

@NgModule({
  imports: [SharedModule, ArticleRoutingModule],
  declarations: [ArticleComponent, MarkdownPipe],

  providers: [ArticleResolver],
})
export class ArticleModule {}
