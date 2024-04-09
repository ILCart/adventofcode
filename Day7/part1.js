const input =
`32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`;


let cards = "AKQT98765432J";

let handsBets = input.split("\n").map(x => x.split(" "));


function getRepeats(hand) {
    let repeats = new Map;
    for (let i = 0; i < hand.length; i++) {
        const card = hand[i];
        repeats.set(card, repeats.get(card) != null ? repeats.get(card) + 1 : 1);
    }

    return repeats
}



function classify(repeats){
    const reps = [...repeats.values()];
    if(reps.includes(5)) return 7
    if(reps.includes(4)) return 6
    if(reps.includes(3) && reps.includes(2)) return 5
    if(reps.includes(3) && reps.length == 3) return 4
    if(reps.includes(2) && reps.length == 3) return 3
    if(reps.includes(2) && reps.length == 4) return 2
    return 1
}
let ranked = {};
let hands = {};
for (let handIndex = 0; handIndex < handsBets.length; handIndex++) {
    const hand = handsBets[handIndex][0];
    const bet = handsBets[handIndex][1];
    hands[hand] = bet;
    const repeats = getRepeats(hand);
    ranked[hand] = classify(repeats);
}


function getStrength(a,b){
    for (let char = 0; char < 5; char++) {
        if(a[char] != b[char]){
            return cards.indexOf(a[char]) < cards.indexOf(b[char]);
        }
    }
}
console.log(ranked)
let sorted = [...Object.keys(ranked)].sort((a,b)=>{
    if(ranked[a] > ranked[b]){
        return -1
    }
    if(ranked[a] < ranked[b]){
        return 1
    }
    if(getStrength(a,b)){
        return -1
    }
    return 1
})
let total = 0;
sorted.reverse();
console.log(sorted)   
for (let i = 0; i < sorted.length; i++) {
    total+=hands[sorted[i]]*(i+1)
}
console.log(total)