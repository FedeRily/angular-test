import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReusableTableComponent } from './reusable/table/reusable-table.component';
import { ReusableToolbarComponent } from './reusable/toolbar/reusable-toolbar.component';
import { Error404Component } from './error404/error404.component';
import { FilterStatePipe } from '../pipes/filter-state.pipe';

@NgModule({
  declarations: [
    ReusableTableComponent,
    ReusableToolbarComponent,
    Error404Component,
    FilterStatePipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ReusableTableComponent,
    ReusableToolbarComponent,
    Error404Component
  ]
})
export class SharedModule { }
