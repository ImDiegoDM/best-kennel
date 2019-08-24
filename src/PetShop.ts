export interface PetShop {
  distance: number;
  weekendsPrice: DogShowerPrice;
  weekDayPrice: DogShowerPrice;
}
export interface DogShowerPrice {
  smallDog: number;
  bigDog: number;
}
