interface Dog {
  id: string;
  name?: string;
  imgURL?: string;
  breedId?: string;
  breed?: Breed;
  rating?: number;
}

interface Breed {
  id: string;
  name?: string;
  description?: string;
  imgURL?: string;
}
