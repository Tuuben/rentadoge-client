import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DogService } from "src/app/core/dog.service";
import { ImageModule } from "../image/image.module";
import { HighlightedProductsComponent } from "./highlighted-products.component";

@NgModule({
  declarations: [HighlightedProductsComponent],
  providers: [DogService],
  imports: [CommonModule, ImageModule, RouterModule],
  exports: [HighlightedProductsComponent]
})
export class HighlightedProductsModule {}
