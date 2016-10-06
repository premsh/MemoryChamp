import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrainFart }   from './app.component';
import { Cards } from './cards.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ BrainFart, Cards ],
  bootstrap:    [ BrainFart ]
})
export class AppModule { }
