import moment from 'moment'

export function validInput(array:any[]): [string | null,[moment.Moment,number,number]]{
  const date = moment(array[0],"DD/MM/YYYY",true);

  let err = null;

  if(!date.isValid()){
    err = 'Data inserida não é uma data valida por favor digite uma data valida no formato dia/mês/ano'
  }

  if(typeof array[1] !== 'number'){
    err = 'Segundo argumento deve ser um numero'
  }

  if(typeof array[2] !== 'number'){
    err = 'Terceiro argumento deve ser um numero'
  }

  return [err,[date,array[1],array[2]]];
}