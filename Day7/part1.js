const input =
`32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`;


let cards = "AKQJT98765432";

let handsBets = input.split("\n").map(x => x.split(" "));


function getRepeats(hand){
    let repeats = new Map;
    for (let i = 0; i < hand.length; i++) {
        const card = hand[i];
        repeats.set(card,repeats.get(card) != null ? repeats.get(card) +1 : 1);
    }
  
    return repeats
}

function onepair(repeats){
    for (const card of repeats) {
        console.log(card[1]);
    }
}

for (let handIndex = 0; handIndex < handsBets.length; handIndex++) {

    const hand = handsBets[handIndex][0];
    const repeats = getRepeats(hand);
    onepair(repeats)
    // for (const item of repeats) {
    //     console.log(item[1]);
    // }
}  