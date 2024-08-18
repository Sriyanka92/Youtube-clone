 export const API_KEY = 'AIzaSyAHrL1XzYt0A2OYYiIM_E2kpVobiyShdcU'

  export const value_converter = (value) =>{
  if(value>=100000)
  {
    return Math.floor(value/100000)+"M";
  }
  else if(value>=1000)
  {
    return Math.floor(value/1000)+"K";
  }
  else
  {
     return value;
  }

 }