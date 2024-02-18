const InsertionSorting = (arr) => {
    let mini = 0
    for(let i = 1; i < arr.length; i++){
        for(let j = i - 1; j < arr.length; i++){
            if(arr[j] > arr[i]){
                // console.log('Hello')
                // [arr[j] , arr[i]] = [arr[i] , arr[j]]
            }
        }
    }
    // console.log(arr)
    return arr
}

InsertionSorting([3,2,5,1,6,4])