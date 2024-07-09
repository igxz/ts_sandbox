import { Color, KingdomLevel } from './enums';
import { Deck, Card, Joker, NormalCard } from './types';

const MAX_MARK = 13;
const JOKER_JUNIOR: Joker = { type: KingdomLevel.Junior };
const JOKER_SENIOR: Joker = { type: KingdomLevel.Senior };

export function createDeck(): Deck {
  let cards: Card[] = [];
  const normalCards: NormalCard[] = [];
  const jokers: Joker[] = [];

  for (let i = 1; i <= MAX_MARK; i++) {
    for (const color in Color) {
        normalCards.push({ color: Color[color], mark: i });
    }
  }

  jokers.push(JOKER_JUNIOR);
  jokers.push(JOKER_SENIOR);

  cards = [...normalCards, ...jokers];

  return cards;
}

export function printDeck(deck: Deck): void {
    // Separate the normal cards and jokers
    const normalCards: NormalCard[] = deck.filter(card => 'mark' in card) as NormalCard[];
    const jokers: Joker[] = deck.filter(card => !('mark' in card)) as Joker[];
  
    // Sort only normal cards
    normalCards.sort((a, b) => {
      if (a.color === b.color) {
        return a.mark - b.mark;
      }
      return (
        Object.values(Color).indexOf(a.color) -
        Object.values(Color).indexOf(b.color)
      );
    });
  
    // Reassemble the deck with jokers in their original position
    const sortedDeck: Card[] = [...normalCards, ...jokers];
  
    const markMap: { [key: number]: string } = { 11: 'J', 12: 'Q', 13: 'K' };
    let result = '\n';
    
    sortedDeck.forEach((c, index) => {
      if ('color' in c && 'mark' in c) {
        const mark = markMap[(c as NormalCard).mark] || c.mark;
        result += `${c.color}${mark}\t`;
      } else {
        result += `${(c as Joker).type}\t`;
      }
      if ((index + 1) % 10 === 0) {
        result += '\n';
      }
    });
  
    console.log(result);
  }
  
