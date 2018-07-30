import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainComponent } from './main.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { MainRoutingModule } from './main-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileListComponent } from './profile/profile-list/profile-list.component';
import { ProfileCsvComponent } from './profile/profile-csv/profile-csv.component';
import { ProfileHeaderComponent } from './profile/profile-header/profile-header.component';
import { UserComponent } from './user/user.component';
import { VersionComponent } from './version/version.component';
import { AgGridModule } from 'ag-grid-angular';
import { SelectCellEditorComponent } from './select-cell-editor/select-cell-editor.component';
import { PasswordCellEditorComponent } from './password-cell-editor/password-cell-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExcelComponent } from './excel/excel.component';
import { HotTableModule, HotTableRegisterer } from '@handsontable/angular';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedMaterialModule,
    FormsModule,
    AgGridModule.withComponents([SelectCellEditorComponent, PasswordCellEditorComponent]),
    HotTableModule,
    ReactiveFormsModule
  ],
  declarations: [
    MainComponent,
    NavBarComponent,
    ProfileComponent,
    ProfileListComponent,
    ProfileCsvComponent,
    ProfileHeaderComponent,
    UserComponent,
    VersionComponent,
    SelectCellEditorComponent,
    PasswordCellEditorComponent,
    ExcelComponent
  ],
  providers: [ HotTableRegisterer ]
})
export class MainModule { }
