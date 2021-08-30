import { NgModule } from '@angular/core';
import { CustomButtonModule } from '../shared/custom-button/custom-button.module';
import { HomeAuthResolver } from './home-auth-resolver.service';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [HomeRoutingModule, CustomButtonModule, CommonModule],
  declarations: [HomeComponent],
  providers: [HomeAuthResolver],
})
export class HomeModule {}
