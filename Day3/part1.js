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



let parts = []
let sum = 0;
const rowLen = input.split("\n",1)[0].length
let directions = [
    rowLen,
    -rowLen,
    1,
    -1,
    rowLen+1,
    rowLen-1,
    -rowLen-1,
    -rowLen+1,
]
console.log(directions)
let string = input.replace(/\n/g,"");
let POI = string.matchAll(/[^\s\d.]/g) 
for (let indicator of POI) {
    console.log(indicator)
    for (let direction of directions) {
        let index = indicator.index + direction;
        if(index > string.length-1 || index < 0) continue;

        let probed = string[index];
        console.log(probed,index)
        if (!probed.match(/\d/g)) continue;
        let numbers = input.matchAll(/\d+/g);
        for (let number of numbers) {
            if (index >= number.index && index <= number.index + number[0].length && !parts.includes(number.index)) {
                parts.push(number.index); 
                sum += parseInt(number[0]);
            }
        }
    }
}
console.log(sum,parts)
