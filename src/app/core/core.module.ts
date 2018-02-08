import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


import { HeaderComponent } from './layouts/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent, 
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class CoreModule { }
