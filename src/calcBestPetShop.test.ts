import { calcBestPetShop } from "./calcBestPetShop";

describe('calcBestPetShop unit test',()=>{
  it('Should calculate the best petshop correctly',()=>{
    const response = calcBestPetShop(['10/08/2019',1,1]);

    expect(response).toBe('Meu Canino Feliz R$72');
  });

  it('should return an error when input wrong format of date',()=>{
    const response = calcBestPetShop(['10',1,1]);

    expect(response).toBe('Data inserida não é uma data valida por favor digite uma data valida no formato dia/mês/ano')
  });
})