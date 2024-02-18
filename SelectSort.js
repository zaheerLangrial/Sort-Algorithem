const SelectSort = (arr) => {
    let mini = 0
    for(let i = 0; i < arr.length; i++){
        mini = i
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[mini]){
                mini = j 
            }
        }
        if(i!==mini){
            [arr[i] , arr[mini]] = [arr[mini] , arr[i]]
        }
    }
    return arr
}

console.log(SelectSort([5,2,1,7,6,4]))