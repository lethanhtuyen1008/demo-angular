import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { HomeAuthResolver } from './home-auth-resolver.service';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProgressBarModule } from 'primeng/progressbar';
@NgModule({
  imports: [SharedModule, HomeRoutingModule, ProgressBarModule],
  declarations: [HomeComponent],
  providers: [HomeAuthResolver],
})
export class HomeModule {}
