function sortMaker(arr)
{
  if(!Array.isArray(arr))
  {
    return "please provide me an array of number"
}
else{
  for (const element of arr) {
    if (typeof arr[element] !== "number" || arr.length>2){
      return "please sent a array with two number.your data isnot matching as we required"
    }else{
      if(arr[0]<0||arr[1]<0)
      {
        return "invaild input"
      }
      else{
        if(arr[0]===arr[1])
        { return "equal";}
      else{
        if(arr[0]>arr[1]){const newArr=[arr[0],arr[1]];
          return newArr;
        }
        else{
          newArr=[arr[1],arr[0]];
          return newArr;
        }
      }
      }

    } 
}
}
}
const arr =[3,"hjh"];
console.log(sortMaker(arr));