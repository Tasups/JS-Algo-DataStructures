// Exercise One with only one pointer

// function countUniqueValues(arr) {
//     let result = {}
//     for(let i = 0; i < arr.length; i++){
//         result[arr[i]] ? null : result[arr[i]] = 1
//     }
//     console.log(Object.keys(result).length)
//     return Object.keys(result).length;
// }

// Exercise One with two pointers

function countUniqueValues(arr) {
    // this zero statement doesn't seem to be returning!!
    if(arr.length == 0) return 0;
    let i = 0
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
        
    }
    const result = i + 1
    console.log(result)
    return result
}

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
