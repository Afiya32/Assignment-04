// problem-01

function cubeNumber(number) 
{
  if (typeof number!=="number") 
  { return "Please sent me a number";  }
else 
   { let cube = number * number * number;
    return cube; }
}
// problem-02
function matchFinder(string1, string2) 
{
 if (typeof string1!=="string" ||typeof string2 !=="string")
{ return "please sent me string";}
 else { if (string1.indexOf(string2))
            { return true;} 
        else { return false;} }
}
// problem-03
function sortMaker(arr)
{
  if(!Array.isArray(arr))
  { return "please provide me an array of number"}
else{
  for (const element of arr)
   { if (typeof arr[element] !== "number" || arr.length>2)
        { return "please sent a array with two number.your data isnot matching as we required" }
    else{
           if(arr[0]<0||arr[1]<0)
               { return "invaild input"}
           else{
                 if(arr[0]===arr[1])
                    { return "equal";}
                 else{
                      if(arr[0]>arr[1])
                         {const newArr=[arr[0],arr[1]];
                             return newArr;}
                       else{ newArr=[arr[1],arr[0]];
                              return newArr;}
                      }
                 }

         } 
    }
 }
}
// problem-04
function findAddress(obj)
{
  if (typeof obj !=="object") 
    { return "Please sent me an object" }
 else {
    let roadNumber =obj.street || "__";
    let houseNumber = obj.house || "__";
    let societyName = obj.society || "__";
    return roadNumber+"," + houseNumber+"," + societyName;
  }
}
// problem-05
function canPay(changeArray, totalDue)
{
  if(!Array.isArray(changeArray) || typeof totalDue!=="number")
     { return "please enter array and number";}
  else  {
          for (let i = 0; i < changeArray.length; i++)
          {  if (typeof changeArray[i] !== 'number' || changeArray.length===0)
                { return "please give me array of number"; }
           else{  let sum = 0;
    for (let j = 0; j < changeArray.length; j++)
     { sum += changeArray[j]; }
    if(sum >= totalDue)
    { return true }
    else{ return false;}
   }

  }

}
}