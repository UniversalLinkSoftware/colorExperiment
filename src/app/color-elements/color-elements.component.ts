import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color-elements',
  templateUrl: './color-elements.component.html',
  styleUrls: ['./color-elements.component.css']
})
export class ColorElementsComponent implements OnInit {
// tslint:disable-next-line:no-input-rename
@Input('clrElement') element: {type: string, name: string, content: string};
  constructor() { }

  ngOnInit() {
  }

}
