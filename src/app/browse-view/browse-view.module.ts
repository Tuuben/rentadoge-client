import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseViewRoutingModule } from './browse-view-routing.module';
import { BrowseViewComponent } from './browse-view.component';


@NgModule({
  declarations: [BrowseViewComponent],
  imports: [
    CommonModule,
    BrowseViewRoutingModule
  ]
})
export class BrowseViewModule { }
