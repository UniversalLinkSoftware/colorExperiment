import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ControlComponent } from './control/control.component';
import { ColorElementsComponent } from './color-elements/color-elements.component';


@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    ColorElementsComponent
     ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
