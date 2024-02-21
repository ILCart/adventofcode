const input = 
`32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`


let cards = "AKQJT98765432";

let e = input.split("\n").map(x=>x.split(" "));

let hands = {}
for(const cardset of e){
    let hand = cardset[0];
    let repeats = {};
    for (let i = 0, len = hand.length; i < len; i++) {
        repeats[hand[i]] = repeats[hand[i]] == null ? 1 : repeats[hand[i]]+=1
    }
    let cardCount = Object.keys(repeats).length;
    for(const [key, value] of Object.entries(repeats)){
        switch (value) {
            case 5:
                hands[hand] = 7
                console.log("5 o kind")
                break;
            case 4:
                hands[hand] = 6
                console.log("4 o kind")
                break;
            case 3:
                if(cardCount === 3){
                    hands[hand] = 4
                }else if(cardCount === 2){
                    hands[hand] = 5
                }
                console.log("3 card")
                break;
            case 2:
                if(cardCount === 4){
                    hands[hand] = 1
                }else if(cardCount === 3){
                    hands[hand] = 2
                }              
                break;
            default:
                break;
        }
    }
    //console.log();

}
console.log(hands);
