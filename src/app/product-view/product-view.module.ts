import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DogService } from "../core/dog.service";
import { ProductViewRoutingModule } from "./product-view-routing.module";
import { ProductViewComponent } from "./product-view.component";

@NgModule({
  declarations: [ProductViewComponent],
  providers: [DogService],
  imports: [CommonModule, ProductViewRoutingModule, RouterModule]
})
export class ProductViewModule {}
