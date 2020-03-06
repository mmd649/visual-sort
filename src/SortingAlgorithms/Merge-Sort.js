export function getMergeSortAnimation(array){

    let animations = [];

    MergeSort(array, 0, array.length - 1, animations);

    return animations;
}

const merge = (array, startIndex, midIndex, endIndex, animations) => {

    let leftArrayLength = midIndex - startIndex + 1;
    let rightArrayLength = endIndex - midIndex;
    
    const leftArray = [], rightArray = [];

    //Create a temporary array for the left partition
    for(let x = 0; x < leftArrayLength; x++) {leftArray[x] = array[startIndex + x]};
    //Create a temporary array for the right partition
    for(let x = 0; x < rightArrayLength; x++) {rightArray[x] = array[midIndex + 1 + x]};

    let i = 0, j = 0, k = startIndex;

    //Loop through left and right arrays and compare the values in each array 
    while (i < leftArrayLength && j < rightArrayLength) {

        animations.push(['initialComparison', k, (midIndex + 1 + j)]);
        animations.push(['secondaryComparison', k, (midIndex + 1 + j)]);

        if (leftArray[i] <= rightArray[j]){
            animations.push(['swap', k, leftArray[i]]); 
            array[k++] = leftArray[i++];
        } else {
            animations.push(['swap', k, rightArray[j]]);
            array[k++] = rightArray[j++];
        } 
    } 

    //Copy the remaining elements in the array
    while (i < leftArrayLength) { 
        animations.push(['swap', k, leftArray[i]]);
        array[k++] = leftArray[i++];
    } 
    
    //Copy the remaining elements in the array
    while (j < rightArrayLength) {
        animations.push(['swap', k, rightArray[j]]); 
        array[k++] = rightArray[j++];
    } 

}

//
const MergeSort = (array, startIndex, endIndex, animations) => {

    if(startIndex === endIndex) return;

    const midIndex = Math.floor((startIndex + endIndex) / 2);

    //Start a recursion call for the left partition of the original array
    MergeSort(array, startIndex, midIndex, animations);

    //Start a recursion call for the right partition of the original array
    MergeSort(array, midIndex + 1, endIndex, animations);

    //Merge the arrays to form a single sorted array
    merge(array, startIndex, midIndex, endIndex, animations);
    
}