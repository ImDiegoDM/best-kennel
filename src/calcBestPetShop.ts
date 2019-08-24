import { validInput } from "./validInput";
import { petShops } from "./petShops";
import { calcPetShopTotalPrice } from "./calcPetShopPrice";

export function calcBestPetShop(args:any[]){
  const [err,[date,smallDogs,bigDogs]]  = validInput(args);

  if(err){
    console.log(err)
    return;
  }

  let calculedPrice = Number.POSITIVE_INFINITY;
  let selctedPetShopDistance;
  let selectedPetShopName;

  const isWeekend = date.day() === 0 || date.day() === 6;

  for (const key of Object.keys(petShops)) {
    const petShop = petShops[key];

    const totalValue = calcPetShopTotalPrice(isWeekend,petShop,smallDogs,bigDogs);
    if(totalValue<calculedPrice){
      calculedPrice = totalValue;
      selctedPetShopDistance = petShop.distance;
      selectedPetShopName = key;
    }else if(totalValue === calculedPrice && petShop.distance < selctedPetShopDistance){
      calculedPrice = totalValue;
      selctedPetShopDistance = petShop.distance;
      selectedPetShopName = key;
    }
  }
  console.log(`${selectedPetShopName} R$${calculedPrice}`)
}