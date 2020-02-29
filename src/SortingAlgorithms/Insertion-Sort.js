export function getInsertionSortAnimation(array){
    
    let animations = []

    for(let x = 1; x < array.length; x++){

        let y = x - 1;
        let temp = array[x];

        //Initial comparison animation
        animations.push(['initialComparison', y, x]);
        animations.push(['secondaryComparison', y, x]);

        while(y >= 0 && array[y] > temp){

            //If the current second pointer (array[y] in this case) is greater than primary pointer (array[x])
            //Push a swap animation
            animations.push(['swap', y + 1, array[y]]);

            array[y + 1] = array[y]
            y--;

            //If the current second pointer is greater than first pointer, add comparison animations.
            if(array[y] > temp){
                animations.push(['initialComparison', y, x]);
                animations.push(['secondaryComparison', y, x]);
            }

        }
        array[y+1] = temp;
        animations.push(['swap', y + 1, temp]);
    }
    return animations;
}
