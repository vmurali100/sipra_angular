import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { MuraliComponent } from './murali/murali.component';
import { TdfComponent } from './FormsFolder/tdf/tdf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdfComponent } from './FormsFolder/mdf/mdf.component';
import { HttpClientModule } from '@angular/common/http';
import { Sibling1Component } from './SiblingComponets/sibling1/sibling1.component';
import { Sibling2Component } from './SiblingComponets/sibling2/sibling2.component'
@NgModule({
  imports:[BrowserModule,HttpClientModule,FormsModule,ReactiveFormsModule], // We need to Add Required Depenencies From Angular Core
  declarations:[AppComponent, MuraliComponent, TdfComponent, MdfComponent, Sibling1Component, Sibling2Component], // We Need to Add the Components We Create
  bootstrap:[AppComponent] // Need to mention about a Component which bootstrap
})

export class AppModule{}