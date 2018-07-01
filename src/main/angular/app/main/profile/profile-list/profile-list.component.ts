import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ProfileListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedExpandedColumns: string[] = ['csvName', 'down'];
  dataSource = [
    {position: 1, name: 'Hydrogen123456789123456789123456789123456789', weight: 1.0079, symbol: 'H', csv: [
      { csvName: 'aaa' },
      { csvName: 'bbb' },
      { csvName: 'ccc' }
    ]},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', csv: [
      { csvName: 'aaa' },
      { csvName: 'bbb' },
      { csvName: 'ccc' }
    ]},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', csv: [
      { csvName: 'aaa' },
      { csvName: 'bbb' },
      { csvName: 'ccc' }
    ]},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', csv: [
      { csvName: 'aaa' },
      { csvName: 'bbb' },
      { csvName: 'ccc' }
    ]},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', csv: [
      { csvName: 'aaa' },
      { csvName: 'bbb' },
      { csvName: 'ccc' }
    ]}
  ];
  expandedElement = null;
  aa = new MatTableDataSource();

  constructor() { }

  ngOnInit() {
  }

  profileElementClick(row) {
    this.expandedElement = this.expandedElement === row ? null : row;
  }
}
