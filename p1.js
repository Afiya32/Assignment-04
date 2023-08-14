function cubeNumber(number) 
{
  if (typeof number!=="number") {
    return "Please sent me a number"
    
  } else {
    let cube = number * number * number;
    return cube;
  }
}
console.log(cubeNumber(3))