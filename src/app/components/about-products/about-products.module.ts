import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutProductsComponent } from './about-products.component';



@NgModule({
  declarations: [AboutProductsComponent],
  imports: [
    CommonModule
  ],
  exports: [AboutProductsComponent]
})
export class AboutProductsModule { }
