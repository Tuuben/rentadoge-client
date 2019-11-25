import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DomService } from "src/app/core/dom.service";
import { CommonPipesModule } from "src/app/core/pipes/common-pipes.module";
import { ImageModule } from "../image/image.module";
import { AboutProductsComponent } from "./about-products.component";

@NgModule({
  declarations: [AboutProductsComponent],
  providers: [DomService],
  imports: [CommonModule, ImageModule, CommonPipesModule],
  exports: [AboutProductsComponent]
})
export class AboutProductsModule {}
