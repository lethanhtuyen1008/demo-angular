import { NgModule } from '@angular/core';
import { CustomButtonComponent } from './custom-button.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [ButtonModule],
  declarations: [CustomButtonComponent],
  providers: [],
  exports: [CustomButtonComponent],
})
export class CustomButtonModule {}
