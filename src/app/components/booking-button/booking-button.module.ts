import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BookingService } from "src/app/core/booking.service";
import { UserService } from "./../../core/user.service";
import { BookingButtonComponent } from "./booking-button.component";

@NgModule({
  declarations: [BookingButtonComponent],
  imports: [CommonModule, RouterModule],
  providers: [BookingService, UserService],
  exports: [BookingButtonComponent]
})
export class BookingButtonModule {}
