
// p find the difference of the biggest and smallest number in each row and add each rows difference together  
// e 
// let data = [
//     [3, 2, 8], 6
//     [0, 1, 10],10  ==> 24
//     [12, 4, 7] 8 
// ]
// d Use loop and variables to keep track of the differences of the different rows of the matrix
// a 
/*
 0. variable to store total difference
 1. iterate through each row
 2. find max and min find the difference of these two variables
 2.5 Add the rows difference to the total difference
 3. iterate to the next row if there is a next row
 4. add up the differences of each row
*/
// c

function findCheckSum(matrix){
    let total = 0;
    
    for(let row of matrix){
        let max = Math.max(...row);
        let min = Math.min(...row);
        console.log(max, min, total)
        total += max - min;
    }
    return total;
}

let data = [
    [3, 2, 8], 
    [0, 1, 10],
    [12, 4, 7] 
]

console.log(findCheckSum(data));