//pain
const input =
`12.......*..
+.........34
.......-12..
..78........
..*....60...
78.........9
15.....23..$
8...90*12...
............
2.2......12.
.*.........*
1.1..503+.56`;

//4361 sum of numbers adjacent to symbols excluding periods
//ten a row
//could lay out as line and check using math
// if index 13 | above = 3 (-10 = -row), below = 23 (+10 = row), diagupleft = 2 (-11 = -row#-1), diagupright = 4 (-9 = -row#+1), etc...
// make flexible real data is 140 chars a row
// make a list of all possible part numbers positions and compare with directions
// optimization is to stop when a number is found to prevent dupes. shrug?

const directions = [
    [0, 1], //right
    [0, -1],//left
    [1, 0], //up
    [-1, 0], // below
    [-1, 1], //right up
    [-1, -1],  //left up
    [1, 1], //right below
    [1, -1]  //left below
];
let rows = input.split("\n");
let matrix = rows.map((row) => {
    return row.split("")
})
console.log(JSON.stringify(matrix))
let digits = {}
function checkDirections(x, y) {
    let indexed = [];
    for (let direction of directions) {
        let probed = matrix[x + direction[0]][y + direction[1]];
        // console.log(matrix[x][y],x + direction[0],y + direction[1],probed)

        if (probed.match(/\d/g)) {
            let numbers = matrix[x + direction[0]].reduce((previous, current) => previous + current).matchAll(/\d+/g);
            for (let number of numbers) {
                digits[number.index+x*matrix[0].length] = number[0];
                if (number.index <= y + direction[1] && number.index + number[0].length >= y + direction[1]) {
                    indexed.push(number.index+x*matrix[0].length);
                }
            }
        }
    }
    return indexed
}
let partNumbers = [];
for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    let row = matrix[rowIndex];
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
        let indexed = matrix[rowIndex][columnIndex];
        if (indexed.match(/[^\d.\s]/g)) {
            partNumbers = partNumbers.concat(checkDirections(rowIndex, columnIndex))
        }
    }
}
let sum = 0;
[...new Set(partNumbers)].forEach((part)=>{
    // console.log(part)
    sum += parseInt(digits[part]);
})
console.log(sum);
// let parts = []
// let sum = 0;
// for (let indicator of POI) {
//     for (let direction of directions) {
//         let index = indicator.index + direction;
//         let probed = string[index];
//         if (!probed.match(/\d/g)) continue;
//         let numbers = string.matchAll(/\d+/g);
//         for (let number of numbers) {
//             if (index >= number.index && index <= number.index + number[0].length && !parts.includes(number.index)) {
//                 parts.push(number.index);
//                 sum += parseInt(number[0])
//             }
//         }
//     }
// }
// console.log(sum,parts)
