import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { first, map } from "rxjs/operators";

@Injectable()
export class BookingService {
  constructor(private apollo: Apollo) {}

  bookDog(dogId: string) {
    return this.apollo
      .mutate({
        mutation: gql`
          mutation CreateNewBooking($dogId: String!) {
            dog: createBooking(dogId: $dogId) {
              id
              bookingState
            }
          }
        `,
        optimisticResponse: {
          __typename: "Mutation",
          dog: {
            __typename: "Dog",
            id: dogId,
            bookingState: "return"
          }
        },
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
            endBooking(dogId: $dogId) {
              id
              bookingState
            }
          }
        `,
        optimisticResponse: {
          __typename: "Mutation",
          endBooking: {
            __typename: "Dog",
            id: dogId,
            bookingState: "available"
          }
        },
        variables: { dogId }
      })
      .pipe(
        first(),
        map((res: any) => res && res.data && res.data.endBooking)
      )
      .toPromise();
  }
}
