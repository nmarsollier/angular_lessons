import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HolaMundoComponent } from './holaMundo.component';

@NgModule({
  declarations: [
    HolaMundoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [HolaMundoComponent]
})
export class HolaMundoModule { }
