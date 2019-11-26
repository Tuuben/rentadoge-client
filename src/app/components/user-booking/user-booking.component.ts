import { Component, OnInit } from "@angular/core";
import { ApolloQueryResult } from "apollo-client";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { DogService } from "../../core/dog.service";

@Component({
  selector: "app-user-booking",
  templateUrl: "./user-booking.component.html",
  styleUrls: ["./user-booking.component.scss"]
})
export class UserBookingComponent implements OnInit {
  usersDogRes: Observable<ApolloQueryResult<{ dog: Dog }>>;

  hidden: boolean;

  constructor(private dogService: DogService) {}

  ngOnInit() {
    this.usersDogRes = this.dogService
      .getUsersDog()
      .valueChanges.pipe(tap(console.log));
  }

  hide() {
    this.hidden = true;
  }
}
