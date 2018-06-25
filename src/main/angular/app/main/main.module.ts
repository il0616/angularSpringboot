import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainComponent } from './main.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedMaterialModule
  ],
  declarations: [
    MainComponent,
    NavBarComponent
  ]
})
export class MainModule { }
