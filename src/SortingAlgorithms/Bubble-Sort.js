export function bubbleSort (array){

    let animations = [];

    for(let x = 0; x < array.length; x++){
        
        for(let y = 0; y < array.length - (x + 1); y++){
            
            //Change colour (Comparison)
            animations.push([array.indexOf(array[y]), array.indexOf(array[y+1])]);

            //Change back to default colour
            animations.push([array.indexOf(array[y]), array.indexOf(array[y+1])]);

            if(array[y] > array[y+1]){
                
                animations.push([array[y+1], array[y]]);

                const temp = array[y+1];
                array[y+1] = array[y];
                array[y] = temp;

                //Swap animation
                
            } else {
                animations.push([array[y], array[y + 1]]);
            }

        }
    }

    return animations;
}

