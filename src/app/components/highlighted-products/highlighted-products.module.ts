import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { DogService } from "src/app/core/dog.service";
import { DomService } from "src/app/core/dom.service";
import { ImageModule } from "../image/image.module";
import { HighlightedProductsComponent } from "./highlighted-products.component";

@NgModule({
  declarations: [HighlightedProductsComponent],
  providers: [DogService, DomService],
  imports: [CommonModule, ImageModule, RouterModule, MatIconModule],
  exports: [HighlightedProductsComponent]
})
export class HighlightedProductsModule {}
