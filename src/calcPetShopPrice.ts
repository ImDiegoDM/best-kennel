import { PetShop } from "./PetShop";

export function calcPetShopTotalPrice(isWeekend:boolean,petShop:PetShop,smallDogs:number,bigDogs:number){
  if(isWeekend){
    return (smallDogs*petShop.weekendsPrice.smallDog) + (bigDogs*petShop.weekendsPrice.bigDog)
  }

  return (smallDogs*petShop.weekDayPrice.smallDog) + (bigDogs*petShop.weekDayPrice.bigDog)
}