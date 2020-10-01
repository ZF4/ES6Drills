let favMovie =(movie = "The Room", name = "Tommy Wiseasu") => console.log(`My name is ${name} and my favorite movie is ${movie}`);
  favMovie("Cheech and Chong", "Zach");


const str = "Zach Farmer";
const words = str.split(" ");

let getFirstName = () => {
    console.log(words[0]);
}
let getFirstNameConcise = () => console.log(words[0])
getFirstName();
getFirstNameConcise();

function doMath(x,y){
    let resultExpon = x ^ y;
    let resultMulti = x * y;

    return {
        Exponent: resultExpon,
        Product: resultMulti,
    };
}
let stats = doMath(2,3)
console.log(stats);
let name = "Zachary"
let array = ["Zach", "Birmingham", "Burgers"];
function someFunc(name,location,favFood) { 
      console.log(...array)
 }
someFunc();

function someFunc2(whatever) {

  let chars = [...name]
//   console.log(chars)
  for (let i = 0; i < name.length; i++) {
     console.log(chars[i])
      
  }
  }
  someFunc2(name);











  