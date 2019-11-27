import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BookingButtonModule } from "../components/booking-button/booking-button.module";
import { LayoutModule } from "../components/layout/layout.module";
import { RateButtonModule } from "../components/rate-button/rate-button.module";
import { SingleViewNavModule } from "../components/single-view-nav/single-view-nav.module";
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
    RateButtonModule,
    LayoutModule,
    SingleViewNavModule
  ]
})
export class ProductViewModule {}
