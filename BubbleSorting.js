function BubbleSorting (arr) {
    const NewArr = []
    console.log("-----------Bubble Sorting Algo-------------")
    for(let i=arr.length; i>0; i--) {
        for(j=0; j<=i-1; j++){
            if(arr[j] >= arr[j+1]){
                 [arr[j+1] , arr[j]] =[arr[j] , arr[j+1]]
            }
        }
     }
    console.log(arr)
}

BubbleSorting([2,7,52,3,66,5,8])
// [2,7,3,52,66,5,8] 0
// [2,3,7,5,52,66,8] 1
// [2,3,5,7,52,8,66] 2
// [2,3,5,7,8,52,66] 3