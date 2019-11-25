interface Dog {
  id: string;
  name?: string;
  description?: string;
  imgURL?: string;
  breedId?: string;
  breed?: Breed;
  rating?: number;
  location?: Location;
  priceId?: string;
  price: Price;
}

interface Breed {
  id: string;
  name?: string;
  description?: string;
  imgURL?: string;
}

interface User {
  id: string;
  name?: string;
  location?: Location;
}

interface Ratings {
  id: string;
  creatorId?: string;
  ratedId?: string;
  rating: number;
}

interface Location {
  streetAdress?: string;
  city?: string;
  country?: string;
  postCode?: string;
}

interface Price {
  id: string;
  currency: "EUR";
  amount: 24.55;
}
