const input =
`Time:      7  15   30
Distance:  9  40  200`

let e = input.split("\n").map(x => x.replace(/\s+/g, "").split(":")).map(x=>x.pop());
console.log(e)
let won = 0;
let raceLength = e[0], raceRecord = e[1];
for (let time = 0; time < raceLength; time++) {
    let distance = time * (raceLength - time);
    if (distance > raceRecord) won++
}
console.log(won);