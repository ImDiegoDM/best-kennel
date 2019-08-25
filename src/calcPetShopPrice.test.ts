import { calcPetShopTotalPrice } from "./calcPetShopPrice";
import { PetShop } from "./PetShop";

describe('calcPetShopPrice test',()=>{
  const petShop:PetShop={
    distance:2,
    weekDayPrice:{
      smallDog:10,
      bigDog:10,
    },
    weekendsPrice:{
      smallDog:20,
      bigDog:20
    }
  }

  it('should calculate the correct price on weekends',()=>{

    const price = calcPetShopTotalPrice(true,petShop,1,1);

    expect(price).toBe(40)
  })

  it('should calculate the correct price on weekdays',()=>{

    const price = calcPetShopTotalPrice(false,petShop,1,1);

    expect(price).toBe(20)
  })
})