//Celsius to Farenheit
function toFarenheit (celsius){
    let farenheit;
    farenheit=(celsius*(9/5))+32;
    return farenheit;
}
console.log(toFarenheit(1));

//Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
   }
   
console.log(reverseString("hello"));

//Factorialize
function factorialize(num) {
    if(num==0){
      return 1;
    }
    return num*factorialize(num-1);
  }
  
 console.log(factorialize(5));

 //Find the Longest Word into a string
 function findLongestWordLength(str) {
    let long=str.split(" ");
    let palabra=[];
    long.forEach(element =>palabra.push(element.length));
    let max = Math.max(...palabra);
    return max;
  }
 
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

  //Largest number of each subarray into an array
  function largestOfFour(arr) {
    let array=[];
    let maxSubArray;
    arr.forEach(element => array.push(Math.max(...element)));
    return array;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

  //Confirm endig of a string using endsWith
  function confirmEnding(str, target) {
    let end = str.endsWith(target);
    return end;
  }
  console.log(confirmEnding("Bastian", "n"));

  //Confirm endif of a string without endsWith Method
  function confirmEnding(str, target) {
    let exist=str.lastIndexOf(target);
    if (exist!=-1){
        let slice = str.slice(exist);
        console.log(slice);
        if(slice==target){
            return true;
        }
        else{
            return false;
        }
    }
    else {
        return false;
    }
  }
  console.log(confirmEnding("Congratulation", "on"));

  //Repeat a Stirng
  function repeatStringNumTimes(str, num) {
      let string =""
      if(num>0){
        for (let i = 0; i<num; i++){
            string+=str;
        }
        return string;
      }
      else {
          return "";
      }
  }
  
  console.log(repeatStringNumTimes("abc", 3));
  
  //Truncate a String
  function truncateString(str, num) {
    let split = str.split("");
    let newArray = [];
    for (let i = 0; i<num;i++){
        newArray.push(split[i]);
    }
    let newString = newArray.join("");
    console.log("length de str: "+num+" length de newstring: "+newString.length);
    if(newString.length==str.legth){
        return newString;
    }
    else {
        return newString+"...";
    }
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
  
  //Finders Keepers => return the first element that passes a condition into a function
  function findElement(arr, func) {
    let array = [];
    let index;
    arr.forEach(element => array.push(func(element)));
    for (let i=0; i<array.length;i++){
        if(array[i]===true){
            index = i;
            break;
        }
    }
    return arr[index];
  }
  
  console.log(findElement([1, 5, 3, 8], num => num % 2 === 0));
  
  //Boo Who -> Check if a value is classified as boolean primitive
  function booWho(bool) {
    let type = typeof bool
    console.log(type);
    if(type=="boolean"){
        return true;
    }
    else{
        return false;
    }
  }
  
  console.log(booWho(null));
 
  //Title Case a Sentence - Return the provided string with the first letter of each word capitalized
  function titleCase(str) {
    let toLower = str.toLowerCase();
    let split = toLower.split(" ");
    let array = [];
    console.log(split);
    console.log(split[0].slice(1))
    split.forEach(element => array.push(element[0].toUpperCase()+element.slice(1)));
    console.log(array.join(" "));
}
 
  
  titleCase("I'm a little tea pot");

  //Slice and Splice
  function frankenSplice(arr1, arr2, n) {
    let arraySlice = [];
    let arraySplice = [];
    let array2 = [];
    arr2.forEach(element=>array2.push(element));
    arraySlice = array2.slice(0,n);
    arr1.forEach(element=>arraySlice.push(element));
    arraySplice = array2.splice(n,array2.length);
    console.log(arraySplice);
    console.log(arraySlice);
    arraySplice.forEach(element => arraySlice.push(element));
    return arraySlice;
 
  }
  
  console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));

  //Falsy Bouncer - remove false values from an array
  function bouncer(arr) {
    var filter = arr.filter(word => word);
    return filter;
  }
  
 console.log(bouncer([false, null, 0, NaN, undefined, ""]));

  //get index
  function getIndexToIns(arr, num) {
    let index;
    arr.sort(function(a, b) {
    return a - b;
    });
    console.log(arr);
    if(num<arr[0]||arr[0]==null){
        index=0;
        console.log(index);
    }
    if(num>arr[arr.length-1]){
        index=arr.length-1;
        console.log(arr.length-1);
    }
    for(let i = 0; i<arr.length;i++){
    if(arr[i]==num){
        index=i;
        console.log(index);
    }
    if(num>arr[i] && num<arr[i+1]){
        index=i+1;
        console.log(index);
    }
  }
}
  
getIndexToIns([2, 5, 10], 15)
 
//Mutations
function mutation(arr) {
    let word = arr.splice(1,1);
    console.log(word);
    console.log(arr);
    let str_l = word.join("").toLowerCase();
    console.log(str_l);
    let array_l= str_l.split("");
    console.log(array_l);
    let str_w= arr.join().toLowerCase();
    for(let i=0; i<array_l.length;i++){
            let aux = str_w.indexOf(array_l[i]);
            if (aux==-1){
                console.log(array_l[i])
                console.log(str_w.indexOf(array_l[i]));
                return false;
            }
        }
    return true;
    }
    
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));

//Chunk Monkey
function chunkArrayInGroups(arr, size) {
  var array = [];
  var index = 0;
  while (index < arr.length){
    array.push(arr.slice(index,index+size));
    index += size;
  }
  return array;
}
  
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));