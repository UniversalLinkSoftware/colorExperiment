import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colorElements = [{type: 'red', name: 'testcolor', content: 'description'}];
  onRedColorAdded(rcolorData: {colorName: string, colorContent: string} ) {
    this.colorElements.push({
        type: 'red',
        name: rcolorData.colorName,
        content: rcolorData.colorContent
      });
  }

  onBlueColorAdded(bcolorData: {colorName: string, colorContent: string}) {
    this.colorElements.push({
      type: 'blue',
      name: bcolorData.colorName,
      content: bcolorData.colorContent
    });
  }
}
