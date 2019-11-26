import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BookingButtonModule } from "../booking-button/booking-button.module";
import { UserBookingComponent } from "./user-booking.component";

@NgModule({
  declarations: [UserBookingComponent],
  imports: [CommonModule, BookingButtonModule],
  exports: [UserBookingComponent]
})
export class UserBookingModule {}
