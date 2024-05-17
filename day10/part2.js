let input = `.F----7F7F7F7F-7....
.|F--7||||||||FJ....
.||.FJ||||||||L7....
FJL7L7LJLJ||LJ.L-7..
L--J.L7...LJS7F-7L7.
....F-J..F7FJ|L7L7L7
....L7.F7||L7|.L7L7|
.....|FJLJ|FJ|F7|.LJ
....FJL-7.||.||||...
....L---J.LJ.LJLJ...`;
input = input.trim();

let lines = input.split("\n");


// | is a vertical pipe connecting north and south.
// - is a horizontal pipe connecting east and west.
// L is a 90-degree bend connecting north and east.
// J is a 90-degree bend connecting north and west.
// 7 is a 90-degree bend connecting south and west.
// F is a 90-degree bend connecting south and east.
// . is ground; there is no pipe in this tile.
// S is the starting position of the animal; there is a pipe on this tile, but your sketch doesn't show what shape the pipe has.

const intersection = (a,b)=>new Set([...a].filter(i => b.has(i)));
const diff = (A,B) => new Set([...A].filter(x => ![...B].includes(x)));


let visited = new Set;
let grid = new Map;
let prev = new Set;
let graph = new Set;
for (let x = 0; x < lines.length; x++) {
    let line = lines[x];
    for (let y = 0; y < line.length; y++) {
        graph.add(`${x} ${y}`);
        let char = line[y];
        let transversable = new Set;
        if (("-J7S").includes(char)) transversable.add(`${x} ${y-1}`);
        if (("-FLS").includes(char)) transversable.add(`${x} ${y+1}`);
        if (("|F7S").includes(char)) transversable.add(`${x+1} ${y}`);
        if (("|LJS").includes(char)) transversable.add(`${x-1} ${y}`);
        if (char == "S") {
            visited.add(`${x} ${y}`);
            prev.add(`${x} ${y}`);
        }
        grid.set(`${x} ${y}`, transversable);

    }

}


let distance = -1;
while (prev.size != 0){
    var current = new Set;
    for(let cord of prev.values()){
        for(let cord2 of grid.get(cord).values()){
            if(!visited.has(cord2) && grid.get(cord2) && intersection(grid.get(cord2),prev).size > 0){
                // console.log("instersection",cord,cord2)
                current.add(cord2);
                visited.add(cord2);
            }
        }
    }
    prev = current;
    distance += 1;
}
// visited = new Set(["1 6","3 1","7 2","4 4","8 5"])
// let area = 0;
// for (let i = 0; i < visited.size; i++) {
//     let values = [...visited.values()]
//     let p1 = values[i], p2 = values[i+1]
//     if(!p2) p2 = values[0];
//     p1 = p1.split(" ").map(x=>+x);
//     p2 = p2.split(" ").map(x=>+x);
//     console.log(p1,p2,(p1[0] * p2[1]),(p2[0] * p1[1]))
//     area += (p1[0] * p2[1]) - (p2[0] * p1[1]);
// }
// console.log(area/2 - visited.size/2 +1)

let line_min_max = line => [Math.min(...line),Math.max(...line)];

function ray_y_intersections(point,poly){
    let [x,y] = point;
    console.log(`(${x} ,${y})`);
    let line = [...poly].map(a=>a.split(" ").map(x=>+x)).filter(a=>a[0]==x);
    if(!line) return 2;
    let [min_y,max_y] = line_min_max(line.map(x=>x[1]));
    // console.log(`${min_y} ${max_y} | ${x} ${y} | ${line.length} ${line}`)
    // console.log(line,min_y,max_y,line.length)

    if(y>max_y || y<min_y) return 2;
    let intersections = 0;
    for (let i = y; i > 0; i--) {
        // console.log(`(${x} ,${y})`,line);
        if(line.includes(i) == true && `${x} ${i}` !== `${x} ${y}`){
            intersections++;

        }
    }
    
    return intersections;
}

let poly = [];
visited.forEach(cord=>{
    let [x,y] = cord.split(" ").map(x=>+x);
    // console.log(`(${x} ,${y})`);

})
let tot = 0;
diff(graph,visited).forEach(a=>{
    let [x,y] = a.split(" ");
    let sect = ray_y_intersections([x,y],diff(graph,visited));
    // if(sect%2==1) tot++;
})
console.log(tot)
// for (let x = 0; x < poly.length; x++) {
//     const row = poly[x];
//     if(!row) continue;
//     for (let y = 0; y < row.length; y++) {
//         const pos = row[y];
//         if(pos == undefined) continue;
//         console.log("(",x,",",y,")",pos)
//     }
    
// }
