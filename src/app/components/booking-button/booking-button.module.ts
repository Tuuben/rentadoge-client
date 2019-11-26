import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BookingService } from "src/app/core/booking.service";
import { BookingButtonComponent } from "./booking-button.component";

@NgModule({
  declarations: [BookingButtonComponent],
  imports: [CommonModule],
  providers: [BookingService],
  exports: [BookingButtonComponent]
})
export class BookingButtonModule {}
