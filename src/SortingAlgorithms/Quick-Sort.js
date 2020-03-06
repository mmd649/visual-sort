export function getQuickSortAnimation(array){

    let animations = [];

    sort(array, 0, array.length - 1, animations);

    return animations;
}

const arrayPartition = (arr, low, high, animations) => {

    let pivot = arr[high];
    let i = low - 1;

    for(let j = low; j < high; j++){

        animations.push(['initialComparison', j, high]);
        animations.push(['secondaryComparison', j, high]);

        // If arr[j] is less than or equal to the value of pivot, increase the value of i by 1 
        // and swap the values of arr[i] and arr[j] around.
        if(arr[j] <= pivot){
            i++;
            const temp = arr[i];
            arr[i] = arr[j];
            animations.push(['swap', i, arr[j], j, temp]);
            arr[j] = temp;
        }
    }
    
    //Once the position of the pivot has been found, swap the value of pivot to the value of arr[i + 1]
    const temp = arr[i+1];
    arr[i+1] = arr[high];
    animations.push(['swap', i + 1, arr[high], high, temp]);
    arr[high] = temp;

    //return the correct index of the pivot.
    return (i + 1); 
}

const sort = (arr, low, high, animations) => {

    if(low < high){
        
        //Get the index of the pivot after being sorted
        const pivotIndex = arrayPartition(arr, low, high, animations);

        //Since the array has been sorted with the left partition being value lower or equal than the pivot value
        //while the right side are values greater than the pivot

        //Recursively call sort for the left side of the partition
        sort(arr, low, pivotIndex - 1, animations);

        //Recursively call sort for the right side of the partition
        sort(arr, pivotIndex + 1, high, animations);
    }

}