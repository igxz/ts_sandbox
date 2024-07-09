import { Color, KingdomLevel } from './enums';

export interface Card {
  getName?(): string;
}

export interface NormalCard extends Card {
  color: Color;
  mark: number;
}

export interface Joker extends Card {
  type: KingdomLevel;
}

export type Deck = Card[];
