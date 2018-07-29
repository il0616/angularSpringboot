import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ICellEditorAngularComp } from 'ag-grid-angular';
import { ICellEditorParams, IAfterGuiAttachedParams } from 'ag-grid';
import { MatFormField, MatSelect } from '@angular/material';

interface ISelectCellEditorParams extends ICellEditorParams {
  values: string[];
}

@Component({
  selector: 'app-select-cell-editor',
  templateUrl: './select-cell-editor.component.html',
  styleUrls: ['./select-cell-editor.component.css']
})
export class SelectCellEditorComponent implements ICellEditorAngularComp {

  options: string[];
  selectedValue: string;

  matFormFieldWidth: string;
  matFormFieldHeight: string;

  constructor() { }

  agInit(params: ISelectCellEditorParams): void {
    this.matFormFieldWidth = (params.column.getActualWidth() - 20) + 'px';
    this.matFormFieldHeight = params.node.rowHeight + 'px';
    this.selectedValue = params.value;
    this.options = params.values;
  }

  getValue() {
    return this.selectedValue;
  }

  isPopup?(): boolean {
    return true;
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
