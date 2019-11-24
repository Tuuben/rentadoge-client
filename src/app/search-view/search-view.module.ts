import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchViewRoutingModule } from './search-view-routing.module';
import { SearchViewComponent } from './search-view.component';


@NgModule({
  declarations: [SearchViewComponent],
  imports: [
    CommonModule,
    SearchViewRoutingModule
  ]
})
export class SearchViewModule { }
