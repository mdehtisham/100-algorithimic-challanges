function arrayPreviousLess(arr){
    let result = [-1]
    for(let i=1;i<arr.length;i++){
        result[i]= arr[i]>arr[i-1] ? arr[i-1] : -1
    }
    return result
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5])) // [-1, 3, -1, 2, 4]

