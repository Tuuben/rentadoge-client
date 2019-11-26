import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BookingButtonModule } from "../components/booking-button/booking-button.module";
import { LayoutModule } from "../components/layout/layout.module";
import { DogService } from "../core/dog.service";
import { ProductViewRoutingModule } from "./product-view-routing.module";
import { ProductViewComponent } from "./product-view.component";

@NgModule({
  declarations: [ProductViewComponent],
  providers: [DogService],
  imports: [
    CommonModule,
    BookingButtonModule,
    ProductViewRoutingModule,
    BookingButtonModule,
    LayoutModule,
    RouterModule
  ]
})
export class ProductViewModule {}
