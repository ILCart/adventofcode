//pain
const input =
    `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;
//4361 sum of numbers adjacent to symbols excluding periods
//ten a row
//could lay out as line and check using math
// if index 13 | above = 3 (-10 = -row), below = 23 (+10 = row), diagupleft = 2 (-11 = -row#-1), diagupright = 4 (-9 = -row#+1), etc...
// make flexible real data is 140 chars a row
// make a list of all possible part numbers positions and compare with directions
// optimization is to stop when a number is found to prevent dupes. shrug?

const directions = [
    [1, 0], //right
    [-1, 0],//left
    [1, 1], //right up
    [0, 1],
    [0, -1],
    [1, 0]
];
let rows = input.split("\n");
let matrix = rows.map((row) => {
    return row.split("")
})


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
