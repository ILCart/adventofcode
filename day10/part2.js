let input = `
7-F7-
.FJ|7
SJLL7
|F--J
LJ.LJ
`;
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



let visited = new Set;
let grid = new Map;
let prev = new Set;
let mapped = [];
for (let x = 0; x < lines.length; x++) {
    let line = lines[x];
    mapped[x] = line.split("");
    for (let y = 0; y < line.length; y++) {
        let char = line[y];
        let transversable = new Set;
        if (("-J7S").includes(char)) transversable.add(`${x} ${y - 1}`);
        if (("-FLS").includes(char)) transversable.add(`${x} ${y + 1}`);
        if (("|F7S").includes(char)) transversable.add(`${x + 1} ${y}`);
        if (("|LJS").includes(char)) transversable.add(`${x - 1} ${y}`);
        grid.set(`${x} ${y}`, transversable);
        if (char == "S") {
            visited.add(`${x} ${y}`);
            prev.add(`${x} ${y}`);
        }

    }

}

while (true) {
    var current = new Set;
    for (let cord of prev.values()) {
        for (let cord2 of grid.get(cord).values()) {
            if (visited.has(cord2) !== true && grid.has(cord2) && grid.get(cord2).intersection(prev)) {
                current.add(cord2);
                visited.add(cord2);
            }
        }
    }
    if (current.size <= 0) break;
    prev = current;
}
let polygon = new Set;
let not_visited = new Set;
for (const [key, value] of grid.entries()) {
    if (value.size <= 0) not_visited.add(key);
    if (value.size > 0) polygon.add(key);
}


let vertex_poly = [...polygon].map(x => x.split(" ").map(n => +n))
let array_2d_poly = [];
for (const point of vertex_poly) {
    let new_line = array_2d_poly[point[0]];
    if (new_line) {
        new_line.push(point[1]);
    } else {
        array_2d_poly[point[0]] = [point[1]]
    }
}
// console.log(array_2d_poly)

// Time to ball
// Using point in polygon computational geometry
let line_min_max = line => [Math.min(...line), Math.max(...line)];

function ray_y_intersections(point, poly) {
    let [x, y] = point;
    let line = poly[x];
    if (!line) return [];
    let [min_y, max_y] = line_min_max(line);
    // console.log(`${min_y} ${max_y} | ${x} ${y} | ${line.length} ${line}`)

    if (y > max_y || y < min_y) return [];
    let intersections = [];
    for (let i = y; i > 0; i--) {
        if (line.includes(i) && `${x} ${i}` !== `${x} ${y}`) {
            // console.log(`${x} ${y} | ${x} ${i} | ${line.length} ${line}`)
            intersections.push([x, i]);
        }
    }


    return intersections;
}

// Area - b/2 + 1

let odd = x => x % 2 == 1;
let outside = new Set;

for (let row = 0; row < mapped.length; row++) {

    let inside = false;
    let up = "";
    for (let i = 0; i < mapped[row].length; i++) {
        const ch = mapped[row][i];
        switch (ch) {
            case "|":
                if (up == "") inside = !inside;
                break;
            case "-":
                if (up !== "") { }
                break;
            case "L":
                if (up == "") up = ch == "L";
                break;
            case "F":
                if (up == "") up = ch == "L";
                break;
            case "7":
                if (up !== "") up = ch == "L";
                if (ch != (up ? "J" : "7")) {
                    inside = !inside;
                }
                up = "";
                break;
            case "J":
                if (up !== "") up = ch == "L";
                if (ch != (up ? "J" : "7")) {
                    inside = !inside;
                }
                up = "";
                break;
            case ".":
                break
            default:
                console.error("dude what",ch)
                break;
        }
        if(!inside) outside.add([row,i]);


    }

}
// let inside = 0;
// not_visited.forEach(x=>{
//     let sect = ray_y_intersections(x.split(" "),array_2d_poly);
//     // console.log(sect,x)

// })
// console.log(inside);
// polygon.forEach(x=>{
//     let [a,b] = x.split(" ");
//     console.log(`(${b}, -${a})`);
// })