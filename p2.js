function matchFinder(string1, string2) 
{
    if (typeof string1!=="string" ||typeof string2 !=="string") {
        return "please sent me string";   
    } else {
       if (string1.indexOf(string2)) {
        return true;
       } else {
        return false;
       } 
    }
}
let a ="Afiyagjgtvj";
let b ="jdflsfhnk.djlafiya"
console.log(matchFinder(a,b));






// function isJavaScriptFile(filename){
//     if(typeof filename !== "string"){
//         return "please provide me a valid file name (string)."
//     }else{
//         // if(filename.toLowerCase().endsWith(".js") === true){
//         //     return true
//         // }else{
//         //     return false
//         // }

//         return filename.toLowerCase().endsWith(".js"); //   true || false

//     }