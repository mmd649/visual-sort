export function getInsertionSortAnimation(array){
    
    return insertionSort(array);
}

function insertionSort(array){

    let animations = []

    for(let x = 1; x < array.length; x++){

        let y = x - 1;
        let temp = array[x];

        while(y >= 0 && array[y] > temp){
            animations.push([array.indexOf(array[y+1]), array.indexOf(array[y])]);
            array[y + 1] = array[y]
            y--;
        }
        array[y+1] = temp;
    }
    return animations;
}