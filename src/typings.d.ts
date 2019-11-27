type BookingState =
  | "available"
  | "unavailable"
  | "pending"
  | "return"
  | "sign-in"
  | "other-booking";

interface Dog {
  id: string;
  name?: string;
  description?: string;
  imgURL?: string;
  breedId?: string;
  breed?: Breed;
  rating?: number;
  priceId?: string;
  bookingState?: BookingState;
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

interface AppUser {
  id: string;
  name?: string;
  streetAdress?: string;
  city?: string;
  postCode?: string;
  country?: string;
  bookedDog?: Dog;
}

interface Ratings {
  id: string;
  creatorId?: string;
  ratedId?: string;
  rating: number;
}

interface Booking {
  id: string;
  userId: string;
  dogId: string;
  createdAt?: Date;
  updatedAt?: Date;
  expiresAt?: Date;
  pendingReturn?: boolean;
  returnedAt?: Date;
  active?: boolean;
}
