import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AgGridNg2 } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import { GridOptions, ColDef, RowNode } from 'ag-grid';
import { RowSpanParams, NewValueParams } from 'ag-grid/dist/lib/entities/colDef';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;
  
  userRoles: string[];
  columnDefs: ColDef[] = [
    {
      headerName: 'User ID',
      field: 'userId',
      checkboxSelection: true
    }, {
      headerName: 'Password',
      valueGetter: () => '**********',
      valueSetter: params => params.newValue.search(/^\*+/) === -1,
      editable: true,
      suppressFilter: true,
      suppressSorting: true,
      onCellValueChanged: (params: NewValueParams) => {
        params.api.flashCells({
          rowNodes: [params.node],
          columns: [params.column]
        });
      }
    }, {
      headerName: 'User Role',
      field: 'userRole.userRoleName',
      editable: params => {
        return params.data.userRole.userRoleName !== 'Root';
      },
      cellEditorSelector: params => {
        return {
          component: 'agSelectCellEditor',
          params: { values: this.userRoles }
        };
      },
      onCellValueChanged: (params: NewValueParams) => {
        console.log(params);
      }
    }, {
      headerName: 'Remark',
      field: 'remark',
      editable: true,
      onCellValueChanged: (params: NewValueParams) => {
        console.log(params);
      }
    }
  ];

  gridOptions: GridOptions;


  constructor(private http: HttpClient) {
    this.gridOptions = {
      context: {
        componentParent: this
      },
      columnDefs: this.columnDefs,
      rowSelection: "multiple",
      enableColResize: true,
      enableFilter: true,
      enableSorting: true,
      stopEditingWhenGridLosesFocus: true,
      onGridReady: this.onGridReady,
      enableCellChangeFlash: true,
      enterMovesDownAfterEdit: true
    }

    
  }

  ngOnInit() {
  }
  
  onGridReady = () => {
    this.http.get<any>("/users?projection=with-userrole")
    .subscribe( res => {
      this.gridOptions.api.setRowData( res._embedded.users );
    });

    this.http.get<any>("/userRoles")
      .subscribe( res =>{
        this.userRoles = res._embedded.userRoles.map( userRole => userRole.userRoleName )
          .filter( userRoleName => {
            return userRoleName !== 'Root';
          });
      })
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    console.log(selectedNodes);
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

}
