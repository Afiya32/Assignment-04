
  function canPay(changeArray, totalDue)
  {
    if(!Array.isArray(changeArray) || typeof totalDue!=="number")
    { return "please enter array and number";}
    else
    {
      for (let i = 0; i < changeArray.length; i++) {
        if (typeof changeArray[i] !== 'number' || changeArray.length===0)
         { return "please give me array of number"; }
     else{
      let sum = 0;
      for (let j = 0; j < changeArray.length; j++)
       { sum += changeArray[j]; }
      if(sum >= totalDue)
      { return true }
      else{ return false;}
     }

    }

  }
}
  let arr=[10,3,10];
  let num = 23;
  console.log(canPay(arr,num));






