import { Component, Input, OnInit } from "@angular/core";
import { BookingService } from "src/app/core/booking.service";

@Component({
  selector: "app-booking-button",
  templateUrl: "./booking-button.component.html",
  styleUrls: ["./booking-button.component.scss"]
})
export class BookingButtonComponent implements OnInit {
  @Input() dog: Dog;

  buttonStatus: BookingStatus;
  loading: boolean;

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.buttonStatus = (this.dog && this.dog.bookingStatus) || "open";
  }

  returnDog() {
    const { id } = this.dog;
    this.loading = true;
    this.bookingService.endBooking(id).then(res => {
      if (res) {
        this.buttonStatus = "open";
      }
      this.loading = false;
    });
  }

  bookDog() {
    const { id } = this.dog;
    this.loading = true;
    this.bookingService.bookDog(id).then(res => {
      if (res && res.data && !!res.data.booking) {
        this.buttonStatus = "user-booked";
      }

      this.loading = false;
    });
  }
}
