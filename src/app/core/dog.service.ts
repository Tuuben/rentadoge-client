import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

const dogList = [
  {
    id: "123",
    name: "Good boy",
    imgURL:
      "https://www.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
    rating: 4,
    breed: {
      id: "golden-retreiver",
      name: "Golden retreiver",
      description: "this is a nice dogo"
    }
  },
  {
    id: "123",
    name: "Rupert",
    imgURL:
      "https://www.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
    rating: 5,
    breed: {
      id: "golden-retreiver",
      name: "Golden retreiver",
      description: "this is a nice dogo"
    }
  },
  {
    id: "123",
    name: "Rasputin",
    imgURL:
      "https://www.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
    rating: 8,
    breed: {
      id: "golden-retreiver",
      name: "Golden retreiver",
      description: "this is a nice dogo"
    }
  }
] as Dog[];

const breedList = [
  {
    id: "golden-retreiver",
    name: "Golden retreiver",
    description: "Golden retreivers are super kind lol.",
    imgURL:
      "https://www.prestigeanimalhospital.com/sites/default/files/styles/large/adaptive-image/public/golden-retriever-dog-breed-info.jpg?itok=scGfz-nI"
  },
  {
    id: "pitbull",
    name: "Pitbull",
    description: "Super ckool pitbull.",
    imgURL:
      "https://www.allthingsdogs.com/wp-content/uploads/2018/10/American-Pitbull-Terrier-Sleeping.jpg"
  },
  {
    id: "rotweiler",
    name: "Rotweiler",
    description: "Rotweiler is a cool dogu also.",
    imgURL:
      "https://www.pets4homes.co.uk/images/articles/1695/large/the-pros-and-cons-of-keeping-a-rottweiler-as-a-pet-5389cba92bfaf.jpg"
  }
] as Breed[];

@Injectable()
export class DogService {
  constructor(private apollo: Apollo) {}

  getHighlightedDogs() {
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

  getBreeds() {
    return this.apollo.watchQuery<{ breeds: Breed[] }>({
      query: gql`
        query BreedQuery {
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

  searchDogs(query: string, breedId?: string) {
    return dogList;
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
            bookingStatus
          }
        }
      `,
      variables: { dogId },
      fetchPolicy: "cache-and-network"
    });
  }
}
