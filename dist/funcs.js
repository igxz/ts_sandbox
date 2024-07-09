"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printDeck = exports.createDeck = void 0;
const enums_1 = require("./enums");
const MAX_MARK = 13;
const JOKER_JUNIOR = { type: enums_1.KingdomLevel.Junior };
const JOKER_SENIOR = { type: enums_1.KingdomLevel.Senior };
function createDeck() {
    let cards = [];
    const normalCards = [];
    const jokers = [];
    for (let i = 1; i <= MAX_MARK; i++) {
        for (const color in enums_1.Color) {
            normalCards.push({ color: enums_1.Color[color], mark: i });
        }
    }
    jokers.push(JOKER_JUNIOR);
    jokers.push(JOKER_SENIOR);
    cards = [...normalCards, ...jokers];
    return cards;
}
exports.createDeck = createDeck;
function printDeck(deck) {
    // Separate the normal cards and jokers
    const normalCards = deck.filter(card => 'mark' in card);
    const jokers = deck.filter(card => !('mark' in card));
    // Sort only normal cards
    normalCards.sort((a, b) => {
        if (a.color === b.color) {
            return a.mark - b.mark;
        }
        return (Object.values(enums_1.Color).indexOf(a.color) -
            Object.values(enums_1.Color).indexOf(b.color));
    });
    // Reassemble the deck with jokers in their original position
    const sortedDeck = [...normalCards, ...jokers];
    const markMap = { 11: 'J', 12: 'Q', 13: 'K' };
    let result = '\n';
    sortedDeck.forEach((c, index) => {
        if ('color' in c && 'mark' in c) {
            const mark = markMap[c.mark] || c.mark;
            result += `${c.color}${mark}\t`;
        }
        else {
            result += `${c.type}\t`;
        }
        if ((index + 1) % 10 === 0) {
            result += '\n';
        }
    });
    console.log(result);
}
exports.printDeck = printDeck;
