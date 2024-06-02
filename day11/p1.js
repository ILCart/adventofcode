let input = `
...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....
`;
input = input.trim();

let grid = [];

let lines = input.split("\n");
// for(const x in lines){
//     for(const y in lines[x]){
//         grid[x] = []
//         grid[x][y] = lines[x][y]
//         grid.set([+x,+y],lines[x][y]);
//     }
// }

let empty = []
for(const [index,val] of lines){
    if(empty[index] == "#") continue;
    empty[index] = val
}
for (const index in empty) {
    if(empty[index] == "."){
        console.log()
    }
}
// for(const [index,line] of lines.entries()){
//     if(line.includes("#") == false) {
//         lines[index] += `\n${line}`;
//     }
// }
// for(const [index,line] of lines.entries()){
//     if(line.includes("\n") == true) {
//         lines.splice(index,1,...line.split("\n"))
//     }
// }
// console.log(lines);