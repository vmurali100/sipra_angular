import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { MuraliComponent } from './murali/murali.component';

@NgModule({
  imports:[BrowserModule], // We need to Add Required Depenencies From Angular Core
  declarations:[AppComponent, MuraliComponent], // We Need to Add the Components We Create
  bootstrap:[AppComponent] // Need to mention about a Component which bootstrap
})

export class AppModule{}