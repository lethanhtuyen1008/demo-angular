import { NgModule } from '@angular/core';
// import { AuthGuard } from '../core';
import { SharedModule } from '../shared';
import { EditableArticleResolver } from './editable-article-resolver.service';
import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor.component';

@NgModule({
  imports: [SharedModule, EditorRoutingModule],
  declarations: [EditorComponent],
  providers: [EditableArticleResolver],
})
export class EditorModule {}
