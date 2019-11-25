interface Dog {
  id: string;
  name?: string;
  description?: string;
  imgURL?: string;
  breedId?: string;
  breed?: Breed;
  rating?: number;
  priceId?: string;
  price: Price;
  streetAdress?: string;
  city?: string;
  postCode?: string;
  country?: string;
  isBooked?: boolean;
  isBookedByUser?: boolean;
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
  streetAdress?: string;
  city?: string;
  postCode?: string;
  country?: string;
}

interface Ratings {
  id: string;
  creatorId?: string;
  ratedId?: string;
  rating: number;
}

interface Price {
  id: string;
  currency: "EUR";
  amount: 24.55;
}
