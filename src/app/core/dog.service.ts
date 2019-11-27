import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Injectable()
export class DogService {
  constructor(private apollo: Apollo) {}

  getHighlightedDogs() {
    return this.apollo.watchQuery<{ dogs: Dog[] }>({
      query: gql`
        query DogsQuery {
          dogs: topRatedDogs {
            id
            name
            imgURL
            description
            rating
          }
        }
      `,
      fetchPolicy: "cache-and-network"
    });
  }

  getBreeds() {
    return this.apollo.watchQuery<{ breeds: Breed[] }>({
      query: gql`
        query BreedsQuery {
          breeds {
            id
            name
            description
            imgURL
          }
        }
      `,
      fetchPolicy: "cache-and-network"
    });
  }

  getBreed(breedId: string) {
    return this.apollo.watchQuery<{ breed: Breed }>({
      query: gql`
        query BreedQuery($breedId: String!) {
          breed(breedId: $breedId) {
            id
            name
            description
            imgURL
          }
        }
      `,
      fetchPolicy: "cache-and-network",
      variables: { breedId }
    });
  }

  searchDogs(query: string, breedId?: string) {
    return [];
  }

  getDogs(max: number) {
    return this.apollo.watchQuery<{ dogs: Dog[] }>({
      query: gql`
        query DogsQuery {
          dogs {
            id
            name
            imgURL
            description
          }
        }
      `,
      fetchPolicy: "cache-and-network"
    });
  }

  getDog(dogId: string) {
    return this.apollo.watchQuery<{ dog: Dog }>({
      query: gql`
        query DogQuery($dogId: String!) {
          dog(dogId: $dogId) {
            id
            name
            imgURL
            description
            rating
            bookingStatus
          }
        }
      `,
      variables: { dogId },
      fetchPolicy: "network-only"
    });
  }

  getUsersDog() {
    return this.apollo.watchQuery<{ dog: Dog }>({
      query: gql`
        query UsersBookedDogQuery {
          dog: usersBookedDog {
            id
            name
            imgURL
            bookingStatus
          }
        }
      `,
      fetchPolicy: "cache-and-network"
    });
  }

  incremenetRating(dogId: string, rating?: number) {
    return this.apollo
      .mutate<{ dog: Dog }>({
        mutation: gql`
          mutation IncrementRatingMutation($dogId: String!) {
            incrementRating(dogId: $dogId) {
              id
              rating
            }
          }
        `,
        optimisticResponse: {
          __typename: "Mutation",
          incrementRating: {
            __typename: "Dog",
            id: dogId,
            rating: rating + 1
          }
        },
        variables: { dogId }
      })
      .toPromise();
  }
}
