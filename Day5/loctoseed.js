const input =
`seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`
let test = 82;
let string = input.split(/\n\n/g);
let seeds = string[0].match(/\d+/g);
string.shift();
let nums = [];
seeds.forEach(seed => {
    seed = parseInt(seed);
    console.log(seed);
    string.forEach(segment => {
        for (const i of segment.matchAll(/\d+ \d+ \d+/g)) {
            let [dest, source, sourcelen] = i[0].split(" ").map(x => { return parseInt(x) });
            if (seed >= source && seed <= source + sourcelen) {
                seed += dest - source
                break
            }
        }
    })
    console.log(seed,"e");
    nums.push(seed);
})
console.log(Math.min(...nums));