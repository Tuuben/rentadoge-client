import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundViewRoutingModule } from './not-found-view-routing.module';
import { NotFoundViewComponent } from './not-found-view.component';


@NgModule({
  declarations: [NotFoundViewComponent],
  imports: [
    CommonModule,
    NotFoundViewRoutingModule
  ]
})
export class NotFoundViewModule { }
