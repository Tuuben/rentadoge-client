import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DomService } from "src/app/core/dom.service";
import { ImageModule } from "../image/image.module";
import { AboutProductsComponent } from "./about-products.component";

@NgModule({
  declarations: [AboutProductsComponent],
  providers: [DomService],
  imports: [CommonModule, ImageModule],
  exports: [AboutProductsComponent]
})
export class AboutProductsModule {}
