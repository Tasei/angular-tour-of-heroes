import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';

@NgModule({
  
  imports: [
    BrowserModule,
    FormsModule
  ],

  declarations: [
    AppComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
