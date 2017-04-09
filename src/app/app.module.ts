import { 
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppComponent } from './app.component';
import { UnicornComponent } from './unicorn/unicorn.component';

@NgModule({
  declarations: [
    AppComponent,
    UnicornComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
