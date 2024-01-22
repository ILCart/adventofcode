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
    [0,1],
    [0,-1],
    [1,0],
    [0,1],
    [1,1],
    [-1,1],
    [1,-1],
    [-1,-1]
]

let rows = input.split("\n")

for(let i=0;i<rows.length;i++){
    let symbols = rows[i].matchAll(/[^\s\d.]/g)
    let digits = rows[i].matchAll(/\d/g)
    for(let symbol of symbols){
        for(let direction of directions){
            if (!rows[i+direction[1]]) continue
            if (!rows[i+direction[1]][symbol.index+direction[0]]) continue
            let check = rows[i+direction[1]][symbol.index+direction[0]]
            console.log(symbol[0],check)
        }
    }
}