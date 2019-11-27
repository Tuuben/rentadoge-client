import { Component, Input, OnInit } from "@angular/core";
import { BookingService } from "src/app/core/booking.service";

@Component({
  selector: "app-booking-button",
  templateUrl: "./booking-button.component.html",
  styleUrls: ["./booking-button.component.scss"]
})
export class BookingButtonComponent implements OnInit {
  @Input() dog: Dog;

  // bookingState: BookingState;
  loading: boolean;
  bookingState: string;

  constructor(private bookingService: BookingService) {}

  ngOnInit() {}

  returnDog() {
    const { id: dogId } = this.dog;
    this.loading = true;
    this.bookingService.endBooking(dogId).then(_ => {
      this.loading = false;
    });
  }

  bookDog() {
    const { id: dogId } = this.dog;
    this.loading = true;
    this.bookingService.bookDog(dogId).then(_ => {
      this.loading = false;
    });
  }
}
