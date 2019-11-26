import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { first, map } from "rxjs/operators";
import { BookingService } from "src/app/core/booking.service";
import { UserService } from "./../../core/user.service";

type ButtonStatus = BookingStatus | "user-already-booked";

@Component({
  selector: "app-booking-button",
  templateUrl: "./booking-button.component.html",
  styleUrls: ["./booking-button.component.scss"]
})
export class BookingButtonComponent implements OnInit {
  @Input() dog: Dog;
  @Output() unbooked = new EventEmitter();

  buttonStatus: ButtonStatus;
  loading: boolean;

  constructor(
    private bookingService: BookingService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.userService
      .getUser()
      .pipe(
        first(),
        map(res => {
          this.loading = false;
          if (this.hasBookedAnotherDog(res)) {
            this.buttonStatus = "user-already-booked";
          } else {
            this.buttonStatus = (this.dog && this.dog.bookingStatus) || "open";
          }
        })
      )
      .toPromise();
  }

  returnDog() {
    const { id } = this.dog;
    this.loading = true;
    this.bookingService.endBooking(id).then(res => {
      if (res) {
        this.buttonStatus = "open";
        this.unbooked.emit();
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

  hasBookedAnotherDog(res) {
    if (!res && !res.data) {
      return false;
    }

    const { user } = res.data;

    return user.bookedDog && user.bookedDog.id !== this.dog.id;
  }
}
