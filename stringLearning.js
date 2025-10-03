//length question
let sentence = "javascript";
console.log(sentence.length);

function stringValidator(str) {
  //  if (str.length>10){
  //     console.log("this String is greter than 10");

  //  }else{
  //     console.log("this String is less than 10");

  //  }
  return str.length > 10
    ? "greter than 10"
    : "less than 10"
}
console.log(stringValidator("vivekananda Dash"));
console.log(stringValidator("vivek"));

// function largestString(arr){
//  let longestStr = arr[0]
//  arr.forEach(str=>{
//     if(str.length > longestStr.length){
//         longestStr = str
//     }
//  })
//  return longestStr
// }
// let StrArr = ["banana","pomegranate","ok","Alubaiganatiana"]
// console.log(largestString(StrArr));

function LargestStr(arr) {
  let largestString = arr[0]
  arr.forEach(strng => {
    if (strng.length > largestString.length) {
      largestString = strng
    }
  })
  return largestString
}
const word = ["Apple", "Banana", "Avacado"];
console.log(LargestStr(word));

//2.toUpperCase() / toLowerCase()
const converStr = "hello";
console.log(converStr.toUpperCase());

function stringValidatorFun(strOne, strTwo) { //1. from this question i revise that string are immutable we cant change the original one and method return a new string
  // but we can share it somewhere and 
  return strOne.toUpperCase() === strTwo.toUpperCase()//2.to return two value we can use use array and object and use a template litterals to combined the string
}

let p = stringValidatorFun("hello", "HELLOk");
console.log(p);


// function capitalize(sentence){
//  return   sentence.split(" ")
//  .map(word =>
//     word.charAt(0).toUpperCase() + word.slice(1)).join(" ")

// }
// let sent = "we are in the jungle"
// console.log(capitalize(sent));







function capitalizeSentence(str) { return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") }
console.log(capitalizeSentence("We are in the jungle"));

//  slice(start, end)

const dig = "javascript"
console.log(dig.slice(0, 4));


function lastFourDig(str) {
  if (str.length > 4) {
    return str.slice(-4)
  } else {
    (str.length <= 4)
    return `The Word "${str}" is not more than 4 letter`

  }
}
const num = "vivek";
console.log(lastFourDig(num));

// function findNameFromEmail(str){
//  return  str.split("@")[0]

// }
// let emailName = "viveka@123.gmail.com"
// console.log(findNameFromEmail(emailName));


function findNameFromEmail1(str) {
  let indx = str.indexOf("@")
  return str.slice(0, indx)

}
let emailName1 = "vivekananda@123.gmail.com"
console.log(findNameFromEmail1(emailName1));

function extractString(str) {
  ltrConverter = str.toLowerCase()
  find = ltrConverter.indexOf("s")
  return str.substring(find)
}
const wrd = 'javsaScript'
console.log(extractString(wrd));


function extractbtn(str) {
  return str.substring(2, 6)
}
let words = "vivekananda"
console.log(extractbtn(words));

function removalLastWord(str) {
  let lastWord = str.substring(str.lastIndexOf(" ") + 1)
  return lastWord
}
console.log(removalLastWord("I Love javascript and Java"));



//  first letter capital
function makeFirstletterCapital(str) {
  return str.split(" ").map(word => { return word.charAt(0).toUpperCase() + word.slice(1) }).join(" ")
}
let mySen = "My name is vivekananda Dash"
console.log(makeFirstletterCapital(mySen));

// first and last letter capital 
function makeFirstandlastletterCapital(str) {
  return str.split(" ")
    .map(word => {
      if (word.length === 1) {
        word.toUpperCase()
      }
      let firstWord = word.charAt(0).toUpperCase()
      let middleWord = word.slice(1, -1)
      let lastWord = word.charAt(word.length - 1).toUpperCase()
      return firstWord + middleWord + lastWord
    }).join(" ")
}
let mySent = "My name is vivekananda Dash"
console.log(makeFirstandlastletterCapital(mySent));


function firstLastLetIsCap(str) {
  return str.split(" ")
    .map(word => {
      if (word.length === 1) {
        return word.toUpperCase()
      }
      let firstword = word.charAt(0).toUpperCase()
      let middleWord = word.slice(1, -1)
      let lastword = word.charAt(word.length - 1).toUpperCase()
      return firstword + middleWord + lastword
    }).join(" ")

}
let strSent = "i am a boy my name is vivekananda Dash"
console.log(firstLastLetIsCap(strSent));


// array related question
// push
let fruits = ["mango", "apple"]
fruits.push("Banana")
console.log(fruits);

let numarr = [1, 2, 3]
for (let i = numarr.length + 1; i <= 6; i++) {
  numarr.push(i)
}
console.log(numarr);

let fruit = []
const newFruit = ["Apple", "banana", "mango", "guava"]
for (let i = 0; i < newFruit.length; i++) {
  fruit.push(newFruit[i])
}
console.log(fruit);



function wordLongerThanFour(arr) {
  let wordLongerThanFours = []
  arr.forEach(word => {
    if (word.length >= 4) {
      wordLongerThanFours.push(word)
    }
  })
  return wordLongerThanFours
}
let arrOfWord = ['tiger', 'banana', 'man', 'women', 'boy', 'daughter', 'elephant']
console.log(wordLongerThanFour(arrOfWord));

// pop
let removeLastElement = [10, 20, 30]
removeLastElement.pop()
console.log(removeLastElement);


function popingElemetsUntillLengthWOuldbeTwo(arr) {
  for (; arr.length > 2;) {
    arr.pop()
  }
  return arr
}
let multipleElements = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(popingElemetsUntillLengthWOuldbeTwo(multipleElements));


// let multipleElements = [1,2,3,4,5,6,7,8,9]
// console.log(multipleElements);

let fruitss = ["apple", "banana", "mango", "guava"]
// for(let i = 0; i< fruitss.length ; i++){
// console.log(fruitss[i]);
// }
let fruitttt = []
for (let i = 0; i < fruitss.length; i++) {
  fruitttt.push(fruitss[i])
}
console.log(typeof fruitss);


function findEvenNumber(num) {
  let evenNum = []
  // if (num % 2 === 0) {
  //   evenNum.push(num)
  // }
  // return evenNum
  num.forEach(number => {
    if (number % 2 === 0) {
      evenNum.push(number)
    }
  })
  // return  `${evenNum} and the number of even number is ${evenNum.length}` 
  return {
    EvenNumber: evenNum,
    countOFEvenNumber: evenNum.length
  }
}
let digit = [1, 2, 45, 86, 89, 57, 96, 29, 47, 58, 69, 36, 84, 21]
console.log(findEvenNumber(digit));

let nums = [3, 7, 11, 15, 20];
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

let digitt = [1, 2, 45, 86, 89, 57, 96, 29, 47, 58, 69, 36, 84, 21]
while (digitt.length > 2) {
  digitt.pop()
}
console.log(digitt);


function sumOfFiftyNumber() {
  let number = []
  let sum = 0
  for (let i = 0; i <= 50; i++) {
    number.push(i)
    sum += i
  }
  //  console.log("array of number :" , number);
  //  console.log(`sum of array is ${sum}`);
  return {
    number,
    sum
  }
}
let result = sumOfFiftyNumber()
console.log(result.number);
console.log(result.sum);


function reverseAnArray(arr) {
  let reverse = []
  for (let i = colors.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  return reverse
}
let colors = ["red", "green", "blue", "yellow"];
// console.log(colors.reverse());
console.log(reverseAnArray(colors));



function findHowManyGreterThanTen(dig) {
  let filterTable = []
  dig.forEach(number => {
    if (number > 10) {
      filterTable.push(number)
    }
  })
  return {
    filterArray: filterTable,
    filterArrayTotalNumber: filterTable.length
  }
}
let arr = [5, 12, 8, 20, 3, 15, 10, 11];
console.log(findHowManyGreterThanTen(arr));


function doubledTheNumbers(num) {
  let dig = num.map(number => number * 2)
  return dig
}
let numbers = [1, 2, 3, 4];
console.log(doubledTheNumbers(numbers));

let items = ["a", "b", "c", "d", "e", "f"];
for (; items.length > 3;) {
  items.pop()
}
console.log(items);

function arrayMoreThanFourLetter() {
  let morethanFour = []
  wordss.forEach(word => {
    if (word.length > 4) {
      morethanFour.push(word)
    }
  })
  return {
    arrayMoreThanFour: morethanFour,
    lengthOfMoreThanFour: morethanFour.length
  }
}
let wordss = ["cat", "elephant", "dog", "lion", "tiger"];
console.log(arrayMoreThanFourLetter(wordss));


let fruitsss = ["apple", "banana", "mango", "guava"]
for (let i = 0; i < fruitsss.length; i++) {
  console.log(fruitsss[i]);
}

let arraays = [10, 20, 30, 40, 50];
for (let i = 0; i < arraays.length; i++) {
  if (i === arraays.length - 1) {
    console.log(arraays[i]);
  }
}
function sumOfNum(arr) {
  let sum = 0
  // arr.forEach(num=>{
  //   sum+=num
  // })
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum

}
let numss = [10, 20, 30, 40, 50];
console.log(sumOfNum(numss));


function arrayWithEvenNum(arr) {
  let newArray = []
  arr.map(number => {
    if (number % 2 === 0) {
      newArray.push(number)
    }
  })
  return newArray
}
let numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayWithEvenNum(numberss));


let numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let reverseNUmb = []
for (let i = numb.length - 1; i > 0; i--) {
  reverseNUmb.push(i)
}
console.log(reverseNUmb);

function moreThanThreeLetter(arr) {
  const filterArr =  arr.filter(str => str.length > 3)
  return {
    arrayMorethanThreeLetter: filterArr,
    totalNumber: filterArr.length

  }
}
let wordsss = ["hi", "hello", "yes", "ok", "great"];
console.log(moreThanThreeLetter(wordsss));


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let joined = []
for(let i =0 ;i<arr1.length;i++){
  joined.push(arr1[i])
}
for(let i =0 ;i<arr2.length;i++){
  joined.push(arr2[i])
}
console.log(joined);


function findTheLargestNum(arr){
  let largestNUm = arr[0]
  // arr.filter(num=>{
  //   if(num>largestNUm)
  //     largestNUm = num
  // })
  // return largestNUm

  for (let i =0 ;i<arr.length; i++){
    if(arr[i]>largestNUm){
      largestNUm=arr[i]
    }
  }
  return largestNUm
}
let numsss = [45, 12, 78, 34, 89, 23];
console.log(findTheLargestNum(numsss));

let numssss = [45, 12, 78, 34, 89, 23];
for(;numssss.length>0;){
numssss.pop()
}
console.log(numssss);

function sumTwoArrayIndex(arr1,arr2){
let result = arr1.map((num,i)=>num+arr2[i])
return result
}
let a = [1,2,3]; 
let b = [4,5,6]; 
console.log(sumTwoArrayIndex(a,b));

// Expected: [5,7,9]
// let resultt = a.map((num,i)=>num+b[i])
// console.log(resultt);


function sumTwoArrayIndex(arr1,arr2){
let sum = arr1.map((num,i)=>{
 return num+arr2[i]
})
return sum
}
let c = [1,2,3]; 
let d = [5,6,7]; 
console.log(sumTwoArrayIndex(c,d));



// map filter and reduce question
function squaredEachNum(arr){
return arr.map(num=>num*num)
}
let squared = [2,4,6]
console.log(squaredEachNum(squared));

function convertToUpperCase(arr){
return arr.map(letter=>letter.toUpperCase())
}
let convert = ["a", "b", "c"]
console.log(convertToUpperCase(convert));

function countLength(arr){
 return arr.map(word=>`${word}: ${word.length}`)
}
let lengthh = ["apple", "banana", "cherry"]
console.log(countLength(lengthh));

function multiplyByIndex(arr){
return arr.map((num,i)=>num*i)
}
let ind = [5, 10, 15]
console.log(multiplyByIndex(ind));

function findValuesOFobj(obj){
return  obj.map(val=>{
 let key =  Object.keys(val)[0]
 let value = val[key]
//  let value = Object.values(val)[0]
 return `${key}:${value}`
})
}
let obj = [{name1:"A"}, {name2:"B"}]
console.log(findValuesOFobj(obj));

function extractKeyValue(val){
return val.map(data=>{
  let key = Object.keys(data)[0]
  let value = data[key]
  return `${key}:${value}`
})
}
let obj1 = [{name1:"A"}, {name2:"B"}]
console.log(extractKeyValue(obj1));

function replaceWithEvenOrOdd(arr){
  return arr.map(num=>{
    if(num%2===0){
      return "even"
    }else{
      return "odd"
    }
  })
}
let numberList = [1,2,3,4,8,12,13,19,21,43,79,21]
console.log(replaceWithEvenOrOdd(numberList));
