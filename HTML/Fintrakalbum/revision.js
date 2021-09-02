// function arrayChecker(input){
//   const isArray = Array.isArray(input);
//   return isArray;
// }

// let a = [4,6];

// if(arrayChecker(a)){
//   console.log("a is an array");
// }else{
//   console.log("a is not an array");
// }
// let b = {name: "tosin"};
// if(arrayChecker(b)){
//   console.log("b is an array");
// }else{
//   console.log("b is not an array");
// }

// function arrayExtractor(input,n = null){
//   let result = null;
//   if(n){
//       result = [];
//       for(let i = 0; i<n; i++){
//         result.push(input[i]);
//       }

//   } else{
//     result = input[0];

//   }
//   return result;

// }

// let data = [4,8,9,10,5];

// console.log(arrayExtractor(data));
// // 4
// // data[0];

// console.log(arrayExtractor(data,3));
// // [4,8]

// let alphabetArray = ['a','b','c','d','e','f','g','h'];
// // abcdefgh

// function arrayJoiner(input){
//   let result = "";
//     for(let i=0; i< input.length; i++){
//       result = result + input[i];
//     }
//   return result;

// }

// console.log(arrayJoiner(alphabetArray));

let intArrays = [3, 6, 8, 9, 2, 4, 5];

// 1 * 3 * 6 * 8 * 9 * 2 * 4 * 5

// function calculator(input, operation){
//     let result = 1;
//     if(operation == 'sum'){
//       result = 0;
//     }
//     for(let i=0; i < input.length; i++){
//       if(operation === 'sum'){
//         result = result + input[i];
//       }
//       if(operation === 'multiply'){
//         result = result *  input[i];
//       }
//     }
//     return result;
// }

// console.log(calculator(intArrays, 'sum'));

// console.log(calculator(intArrays, 'multiply'));
// let data = ["Tosin","Bayo","Michael","Jide"];

// function existenceCheckerA(input, searchParam){
//   let result = false;

//   for(let i = 0; i < input.length; i++ ){
//     if(input[i] === searchParam){
//       result = true;
//     }
//   }
//   return result;
// }

// function existenceCheckerB(input, searchParam){
//   let position = input.indexOf(searchParam);
//   if(position === -1){
//     return false;
//   }
//   return true;
// }

let num = 5;
// 5 * 4 * 3 * 2 * 1

// function factorial(input){
//   let result = 1;
//   for(let i = input; i > 0; i-- ){
//     result = result * i;
//   }
//   return result;
// }

// factorial(5);

// function factorial(input){
//   let result = 1;
//   for(let i = i; i <= input; i++ ){
//     result = result * i;
//   }
//   return result;
//   // 1 * 2 * 3 * 4 * 5
// }

// console.log(factorial(10));

let scores = [4500, 6900, 8000, 34100, 5470, 5670];


for ( let i = 0; i < scores.length; i++);{
    scores[i] = scores[i] + 5000;
    console.log(scores)
};

