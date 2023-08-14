function findAddress(obj)
{
  if (typeof obj !=="object") {
    return "Please sent me an object"
    
  } else {
    let roadNumber =obj.street || "__";
    let houseNumber = obj.house || "__";
    let societyName = obj.society || "__";
    return roadNumber+"," + houseNumber+"," + societyName;
  }
}
const obj = {
  street:324,
  // house:234,
  society:"fjkahkk"
}
console.log(findAddress(obj));








// function printDetails(person){
//   if(typeof person !== "object"){
//       return "please provide me a valid object"
//   }else{
//       const name = person.name || "nai";
//       const age = person.age || "nai";
//       const email = person.email || "nai";
//       const bou = person.bou || "nai";
//       return "amar nam "+name+". amar boyos "+age+". amar email "+email+". amr bou "+bou;
//   }

// }

// const obj = {
//   name: "mehedy",
//   age:26,
//   email:"abc@gmail.com"
// }

// console.log(printDetails(obj))