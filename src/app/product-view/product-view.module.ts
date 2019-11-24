import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductViewRoutingModule } from './product-view-routing.module';
import { ProductViewComponent } from './product-view.component';


@NgModule({
  declarations: [ProductViewComponent],
  imports: [
    CommonModule,
    ProductViewRoutingModule
  ]
})
export class ProductViewModule { }
