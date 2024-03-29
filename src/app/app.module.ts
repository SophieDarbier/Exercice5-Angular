import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarTableComponent } from './Car/car-table-component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, CarTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
