import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ICellEditorParams } from 'ag-grid';
import { ICellEditorAngularComp } from 'ag-grid-angular';


@Component({
  selector: 'app-password-cell-editor',
  templateUrl: './password-cell-editor.component.html',
  styleUrls: ['./password-cell-editor.component.css']
})
export class PasswordCellEditorComponent implements ICellEditorAngularComp {

  inputValue = '';

  @ViewChild('passwordInput') passwordInput: ElementRef;

  constructor() { }

  agInit(params: ICellEditorParams): void { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.passwordInput.nativeElement.focus();
    });
  }

  getValue() {
    return this.inputValue;
  }

  onKeyDown(event: KeyboardEvent) {
    switch(event.key) {
      case 'ArrowLeft':
      case 'ArrowRight':
      case 'ArrowUp':
      case 'ArrowDown':
      case 'PageUp':
      case 'PageDown':
      case 'End':
      case 'Home':
        event.stopPropagation();
        break;
    }
  }
  
}
