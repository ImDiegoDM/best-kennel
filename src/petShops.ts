import { Dictionary } from "./dictionary";
import { PetShop } from "./PetShop";

function getMeuCaninoFelixPetShop():PetShop{
  const smallDog = 20;
  const bigDog = 40;

  return {
    distance: 2,
    weekendsPrice:{
      smallDog:smallDog + (smallDog*.2),
      bigDog:bigDog + (bigDog*.2)
    },
    weekDayPrice:{
      smallDog,
      bigDog
    }
  }
}

function getVaiRexPetShop():PetShop{

  return {
    distance:1.7,
    weekendsPrice:{
      smallDog:20,
      bigDog:55
    },
    weekDayPrice:{
      smallDog:15,
      bigDog:50
    }
  }
}

function getChowChawgasPetShop():PetShop{

  return{
    distance:.8,
    weekendsPrice:{
      smallDog:30,
      bigDog:45
    },
    weekDayPrice:{
      smallDog:30,
      bigDog:45
    }
  }
}

export const petShops:Dictionary<PetShop> = {
  'Meu Canino Felix':getMeuCaninoFelixPetShop(),
  'Vai Rex':getVaiRexPetShop(),
  'ChowChawgas':getChowChawgasPetShop()
}