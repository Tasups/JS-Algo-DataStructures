// // // // const foo = {
// // // //     one: 'ONE',
// // // //     two: 'TWO',
// // // //     three: 'THRE',
// // // //     four: 'FOUR',
// // // // }

// // // // const sliced = Object.fromEntries(
// // // //     Object.entries(foo).slice(1)
// // // // )
// // // // console.log(sliced)

// // // // console.log(Object.values(foo)[0])

// // // // let total = 0
// // // // // check to see if value at the first instance is even and if so add it
// // // // if(Object.values(obj1)[0] % 2 === 0){
// // // //   total += Object.values(obj1)[0]
// // // // }
// // // // // peel off the outer layer of the object and continue
// // // // let obj2 = Object.fromEntries(Object.entries(obj1).slice(1))
// // // // console.log(obj2)
// // // // let obj3 = Object.fromEntries(Object.entries(obj2).slice(1))
// // // // console.log(obj3)
// // // // let obj4 = Object.fromEntries(Object.entries(obj3).slice(1))
// // // // console.log(obj4)
// // // // //recursive call

// // // var obj1 = {
// // //   outer: 2,
// // //   obj: {
// // //     inner: 2,
// // //     otherObj: {
// // //       superInner: 2,
// // //       notANumber: true,
// // //       alsoNotANumber: "yup",
// // //       oneMoreObj: {
// // //         number: 4
// // //       }
// // //     }
// // //   }
// // // }

// // // function nestedEvenSum (obj, sum=0) {
// // //     for (var key in obj) {
// // //         if (typeof obj[key] === 'object'){
// // //             console.log(obj[key])
// // //             sum += nestedEvenSum(obj[key]);
// // //             console.log(sum)
// // //         } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
// // //             sum += obj[key];
// // //         }
// // //     }
// // //     return sum;
// // // }

// // // console.log(nestedEvenSum(obj1))

// // // CAPITALIZE FIRST LETTER

// // // let array1 = ['car', 'taco', 'banana']

// // // let slicedArray1 = array1.slice(0,1)
// // // let slicedArray2 = slicedArray1.slice(0,-1) 
// // // console.log(slicedArray1)
// // // console.log(slicedArray2)

// // function capitalizeFirst (array) {
// //   if (array.length === 1) {
// //     return [array[0][0].toUpperCase() + array[0].substr(1)];
// //   }
// //   const res = capitalizeFirst(array.slice(0, -1));
// //   // array.slice(array.length - 1)[0][0] is the first letter of the last word in the array
// //   // which is then made uppercase
// //   // array.slice(array.length - 1) takes the last word in the array and puts it in an array itself
// //   // array.slice(array.length - 1)[0] takes that last word and makes it stand alone as a string
// //   // array.slice(array.length - 1)[0].substr(1) then takes the first letter off, which has been
// //   // capitalized and separates it so that it can be added to the previous method function, thus
// //   // giving us our answer at that point
// //   const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
// //   res.push(string);
// //   return res;
// // }

// // // console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']

// // let array = ['car', 'taco', 'banana']

// // const firstSliceOfArray = array.slice(0, -1)
// // console.log(firstSliceOfArray)
// // const secondSliceOfArray = firstSliceOfArray.slice(0,-1)
// // console.log(secondSliceOfArray)
// // console.log(array.slice(array.length - 1)[0][0])
// // console.log(array[array.length - 1])
// // console.log(array.slice(array.length-1)[0].substr(1))
// // console.log(array.slice(array.length-1))
// // console.log(array.slice(array.length-1)[0])

// function countFamilyLogins(logins) {
//     let count = 0
//     // check to see if one of the logins is one character, either right or left due to origination point, matches another and if so, up count
//     for(let i = 0; i < logins.length; i++){
//         let l = 0
//         for(let j = 0; j < logins[j].length; j++) {
//             console.log(logins[j].charCodeAt(l))
//             let codeJ = logins[j].charCodeAt(l)
//             let codeK = logins[j + 1].charCodeAt(l) 
//             if(codeJ !== (codeK - 1) || codeJ !== (codeK - 1)){
//                 break;
//             } 
//             if(l === logins[j].length){
//               count++
//             }
//             else {
//                 l++
//             }
//         }
//     }
//     return count
// }

// const logins = ["corn", "horn", "dpso", "eqtp", "corn"] 

// console.log(countFamilyLogins(logins))

// function getMaxFreqDeviation(s) {
//     let lookup = {}
//     for(let i = 0; i < s.length; i++) {
//         let char = s[i]
//         lookup[char] ? lookup[char] += 1 : lookup[char] = 1
//     }

//     let arr = Object.values(lookup);
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);
//     let result = max - min
//     return result
// }

// let string = "bbacccabab"

// console.log(getMaxFreqDeviation(string))

// function highestTwo(arr){
//     let firstHighest = 0
//     let secondHighest = 0
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > firstHighest){
//             firstHighest = arr[i]
//             //console.log(highest)
//         }
//     }
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < firstHighest && arr[i] > secondHighest){
//             secondHighest = arr[i]
//         }
//     }
//     let result = firstHighest + secondHighest
//     return result
// }

// console.log(highestTwo([11, 7, 5, 9]))

let advBulletStack = 500
let totalSlots = 75

let total = advBulletStack * totalSlots

console.log(total)