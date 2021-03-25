// First solution, takes O(n^2) time.
// function avoidObstacles(obstaclesArr){
//     obstaclesArr.sort((a,b)=> a-b)
//     let largestElem = obstaclesArr[obstaclesArr.length-1]
//     for(let i=1; i<largestElem+1; i++){
//         if(obstaclesArr.every(elem=> elem%i !== 0)){
//             return i
//         }
//     }
// }

// console.log(avoidObstacles([5, 3, 6, 7, 9] )) // 4


// console.log(avoidObstacles([ ] )) // 4


// working on this solution
// function availablePositions(arr){
//     let result = []
//     for(let i=1; i< Math.max(...arr); i++){
//         if(!arr.includes(i)) result.push(i)
//     }
//     return result
// }

// function avoidObstacles(arr){
//     let maxObstVal = Math.max(...arr)
//     let availablePositionsArr = availablePositions(arr)
//     availablePositionsArr.forEach(v => {
//      while(v < maxObstVal){
//          if(v !== 0) continue
//      }
//     }
//     )

//     console.log(availablePositionsArr)
// }



// console.log(availablePositions([5, 3, 6, 7, 9]))

// simplifying the first solution

function avoidObstacles(obstaclesArr){
    let maxObstVal = Math.max(...obstaclesArr)
    for(let i=2; i<= maxObstVal; i++){
        for(let val of obstaclesArr){
            if(val%i !== 0) continue
            else return false
        }
        return i
    }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]))