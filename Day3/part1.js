//pain


// .....24.*23.
// ..10........
// ..397*.610..
// .......50...
// 1*2..4......
//idk

// 12.......*..
// +.........34
// .......-12..
// ..78........
// ..*....60...
// 78.........9
// .5.....23..$
// 8...90*12...
// ............
// 2.2......12.
// .*.........*
// 1.1..503+.56
//Part 1: 925
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
//Solution 1
//4361 sum of numbers adjacent to symbols excluding periods
//ten a row
//could lay out as line and check using math
// if index 13 | above = 3 (-10 = -row), below = 23 (+10 = row), diagupleft = 2 (-11 = -row#-1), diagupright = 4 (-9 = -row#+1), etc...
// make flexible real data is 140 chars a row
// make a list of all possible part numbers positions and compare with directions
// optimization is to stop when a number is found to prevent dupes. shrug?
//Solution 2
//split into rows from each /n
//split each string from the rows into seperate chars in the array
//nested array (2dmatrix?)
// [[1, 2, ., ., .*], [1, 2, ., ., .*],[1, 2, ., ., .*]]
// actually what if i just ["1...2-1.","123.+2"]
let directions = [
    [0, 1],  //right
    [0, -1], //left
    [1, 0],  //up
    [-1, 0], //down
    [1, 1],  //up right 
    [-1, 1], //down right
    [1, -1], //up left
    [-1, -1] // down left
]

const rows = input.split("\n");
// let partialPartNumberIndex = [];
let sum = 0;
let previousIndexed = [];
let partNums = [];
for (let i = 0; i < rows.length; i++) {
    let symbols = rows[i].matchAll(/[^\s\d.]/g);
    for (let symbol of symbols) {
        for (let direction of directions) {
            if (!rows[i + direction[1]] || !rows[i + direction[1]][symbol.index + direction[0]]) continue;
            // let match = rows[i + direction[1]][symbol.index + direction[0]];
            // if (isNaN(parseInt(match))) continue;
            let index = [rows[i + direction[1]], symbol.index + direction[0]];

            let digits = index[0].matchAll(/\d+/g);
            let partialPart = index[1]
            for (let digit of digits) {
                if (partialPart >= digit.index && partialPart < (digit.index + digit[0].length) && !previousIndexed.includes(digit.index+digit[0]+(i + direction[1]))) {
                    previousIndexed.push(digit.index+digit[0]+(i + direction[1]));
                    sum += parseInt(digit[0]);
                    partNums.push(digit[0]);
                    console.log(index[0].substring(digit.index,digit.index+digit[0].length));
                    console.log(`Part Number found "${digit[0]}" @ ${digit.index} - ${digit.index + digit[0].length}, matched digit: ${partialPart}. row: ${i + direction[1]}`);
                }
            }
            // let originalIndex = (i + direction[1]) * (rows[0].length + 1) + (symbol.index + direction[0]);
            // partialPartNumberIndex.push(originalIndex);
            // let check = rows[i + direction[1]][symbol.index + direction[0]];
            // console.log(input[originalIndex], originalIndex);
            // console.log(symbol[0], check, [i + direction[1], symbol.index + direction[0]]);
        }
    }
}
console.log(sum,partNums.length);

// let digits = input.matchAll(/\d+/g);
// let previousIndexed = [];
// let sum = 0;
// for (let digit of digits) {
//     for (let partialPart of partialPartNumberIndex) {
//         if (partialPart >= digit.index && partialPart < digit.index + digit[0].length && !previousIndexed.includes(digit.index)) {
//             previousIndexed.push(digit.index);
//             sum += parseInt(digit[0]);
//             console.log(`Part Number found "${digit[0]}" @ ${digit.index} - ${digit.index + digit[0].length}`,partialPart);
//         }
//     }
// }
// console.log(sum);



