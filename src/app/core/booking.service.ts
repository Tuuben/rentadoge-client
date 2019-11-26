import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { first, map } from "rxjs/operators";

@Injectable()
export class BookingService {
  constructor(private apollo: Apollo) {}

  bookDog(dogId: string) {
    return this.apollo
      .mutate<{ booking: Booking }>({
        mutation: gql`
          mutation CreateNewBooking($dogId: String!) {
            booking: createBooking(dogId: $dogId) {
              id
            }
          }
        `,
        variables: { dogId }
      })
      .pipe(first())
      .toPromise();
  }

  endBooking(dogId: string) {
    return this.apollo
      .mutate({
        mutation: gql`
          mutation EndCurrentBooking($dogId: String!) {
            endBooking(dogId: $dogId)
          }
        `,
        variables: { dogId }
      })
      .pipe(
        first(),
        map((res: any) => res && res.data && res.data.endBooking)
      )
      .toPromise();
  }
}
