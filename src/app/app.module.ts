import { TokenService } from './core/services/token.service';
import { AlbumsModule } from './modules/albums/albums.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlbumsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
