import { Component, OnInit, ViewChild, AfterViewChecked, AfterViewInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';
import { HotTableComponent, HotTableRegisterer } from '@handsontable/angular';

interface MergeCell {
  row: number;
  col: number;
  rowspan: number;
  colspan: number;
}

interface Cell {
  row: number;
  col: number;
  className: string;
}

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
})
export class ExcelComponent implements OnInit, AfterViewInit {

  hotId = 'excel';
  dataset: any[][];
  mergeCells: MergeCell[];
  cells: Cell[];
  maxCols = 0;
  sheet: XLSX.Sheet;
  hotInstance: Handsontable;

  @ViewChild(HotTableComponent)
  hotTable: HotTableComponent;

  constructor(private http: HttpClient, private hotRegisterer: HotTableRegisterer) { }

  ngOnInit() {
    this.http.get('assets/abc.xlsx', { responseType: 'arraybuffer'}).subscribe( res => {
      const wb: XLSX.WorkBook = XLSX.read(res, {type: 'array'});
      this.sheet = wb.Sheets[wb.SheetNames[0]];
      console.log(this.sheet);
      
      this.dataset = XLSX.utils.sheet_to_json(this.sheet, {header: 1});
      this.dataset.forEach( row => {
        this.maxCols = this.maxCols < row.length ? row.length : this.maxCols;
      });
      this.dataset[0].length = this.maxCols;

      const newMergeCells = [];
      const newCells = [];
      this.sheet["!merges"].forEach( mergeCell => {
        newMergeCells.push({
          row: mergeCell.s.r,
          col: mergeCell.s.c,
          rowspan: mergeCell.e.r - mergeCell.s.r + 1,
          colspan: mergeCell.e.c - mergeCell.s.c + 1
        });
        newCells.push({
          row: mergeCell.s.r,
          col: mergeCell.s.c,
          className: 'htCenter htMiddle'
        });
      });
      this.mergeCells = newMergeCells;
      this.cells = newCells;
    });
  }
  
  ngAfterViewInit(): void {
    this.hotInstance = this.hotRegisterer.getInstance(this.hotId);
  }

  onClickBtn() {
    const newSheet = XLSX.utils.aoa_to_sheet(this.dataset);
    newSheet["!merges"] = this.hotInstance.getPlugin('mergeCells').mergedCellsCollection.mergedCells.map((mergeCell): XLSX.Range => {
      return {
        s: {
          c: mergeCell.col,
          r: mergeCell.row
        },
        e: {
          c: mergeCell.getLastColumn(),
          r: mergeCell.getLastRow()
        }
      }
    });
    console.log(newSheet);

    this.uploadExcel(newSheet);
  }

  uploadExcel(sheet: XLSX.WorkSheet) {
    const newWb = XLSX.utils.book_new(); 
    XLSX.utils.book_append_sheet(newWb, sheet);
    
    const wbout = XLSX.write(newWb, { bookType:'xlsx', bookSST:false, type:'array' });
    const file = new File([wbout], 'newExcel.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const formData = new FormData();
    formData.append('excelFile', file); 
    formData.append('path', 'test_excel');

    this.http.post('/import', formData, {responseType: 'text'}).subscribe(
      res => {
        console.log(res);
      }
    );
  }

}
