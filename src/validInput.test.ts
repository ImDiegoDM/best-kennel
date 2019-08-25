import { validInput } from "./validInput";

describe('validInput unit test',()=>{
  it('shoudl return error nul when input is correct',()=>{
    const [err] = validInput(['10/08/2019',1,1]);

    expect(err).toBe(null);
  });

  it('should return a error when the input date is incorrect',()=>{
    const [err] = validInput(['10/2019',1,1]);

    expect(err).toBe('Data inserida não é uma data valida por favor digite uma data valida no formato dia/mês/ano');
  });

  it('should return a error when the second input is not a number',()=>{
    const [err] = validInput(['10/08/2019','a',1]);

    expect(err).toBe('Segundo argumento deve ser um numero');
  });

  it('should return a error when the third input is not a number',()=>{
    const [err] = validInput(['10/08/2019',1,'a']);

    expect(err).toBe('Terceiro argumento deve ser um numero');
  });
})