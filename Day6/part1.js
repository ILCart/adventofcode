const input =
`Time:        51     69     98     78
Distance:   377   1171   1224   1505`

let e = input.split("\n").map(x => x.replace(/\s+/g, " ").split(" "));
let wins = [];
for (let i = 1, len = e[0].length; i < len; i++) {
    let raceLength = e[0][i], raceRecord = e[1][i];
    let won = 0;
    for (let time = 0; time < raceLength; time++) {
        
        let distance = time * (raceLength - time);
        console.log(time+","+distance)
        if (distance > raceRecord) won++
    }
    if (won > 0) wins.push(won);
}

console.log(wins.reduce((p, c) => p * c));