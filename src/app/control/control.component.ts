import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
 @Output() rcolorCreated = new EventEmitter<{colorName: string, colorContent: string}>() ;
 @Output() bcolorCreated = new EventEmitter<{colorName: string, colorContent: string}>() ;
 @ViewChild('colorContentInput') colorContentInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  onAddRedColor(nameInput: HTMLInputElement) {
   // this.colorContentInput.nativeElement.value = 'testname';
    this.rcolorCreated.emit({colorName: nameInput.value,
      colorContent: this.colorContentInput.nativeElement.value});
  }

  onAddBlueColor(nameInput: HTMLInputElement) {
    this.bcolorCreated.emit({colorName: nameInput.value,
      colorContent: this.colorContentInput.nativeElement.value});
  }
}
