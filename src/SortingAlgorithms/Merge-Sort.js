export const mergeSort = array => {
  //check if the array 0 or 1 element.
  if (array.length <= 1) return array;

  const middleIndex = Math.floor(array.length / 2);
  let leftArray = array.slice(0, middleIndex);
  let rightArray = array.slice(middleIndex);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

function merge(leftArray, rightArray){
    let sortedArray = [];
    let animation = [];

    while(leftArray.length && rightArray.length){
        animation.push();
        if(leftArray[0] < rightArray[0]){
            sortedArray.push(leftArray.shift());
        } else {
            sortedArray.push(rightArray.shift());
        }
    }
    return sortedArray.concat(leftArray, rightArray);
}
