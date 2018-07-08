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

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedMaterialModule
  ],
  declarations: [
    MainComponent,
    NavBarComponent,
    ProfileComponent,
    ProfileListComponent,
    ProfileCsvComponent,
    ProfileHeaderComponent
  ]
})
export class MainModule { }
