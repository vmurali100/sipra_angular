import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { MuraliComponent } from './murali/murali.component';
import { TdfComponent } from './FormsFolder/tdf/tdf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdfComponent } from './FormsFolder/mdf/mdf.component';

@NgModule({
  imports:[BrowserModule,FormsModule,ReactiveFormsModule], // We need to Add Required Depenencies From Angular Core
  declarations:[AppComponent, MuraliComponent, TdfComponent, MdfComponent], // We Need to Add the Components We Create
  bootstrap:[AppComponent] // Need to mention about a Component which bootstrap
})

export class AppModule{}