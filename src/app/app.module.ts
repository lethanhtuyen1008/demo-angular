import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastModule } from 'primeng/toast';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { FooterComponent, HeaderComponent, SharedModule } from './shared';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { CustomToastComponent } from './shared/custom-toast/custom-toast.component';
import { CustomBlockUIComponent } from './shared/custom-blockUI/custom-blockUI.component';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CustomToastComponent,
    CustomBlockUIComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AuthModule,
    AppRoutingModule,
    ToastModule,
    BrowserAnimationsModule,
    BlockUIModule,
    ProgressSpinnerModule,
    ScrollPanelModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
