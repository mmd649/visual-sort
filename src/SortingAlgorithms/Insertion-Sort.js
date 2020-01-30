export function insertionSort(array){

    let animations = [];

    for(let x = 1; x < array.length; x++){

        let y = x - 1;
        let temp = array[x];

        while(y >= 0 && array[y] > temp){
            animations.push([array.indexOf(array[y+1]), array.indexOf(array[y])]);
            array[y + 1] = array[y]
            y--;
            animations.push([array.indexOf(array[y+1]), array.indexOf(array[y])]);
            animations.push([array[y], array[y+1]]);
        }
        array[y+1] = temp;
        animations.push([array[y], array[y+1]]);
    }
    return animations;
}