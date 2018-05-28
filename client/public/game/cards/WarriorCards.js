import {
  PHYSICAL,
  ATTACK,
  DEFEND,
} from './CardTypes';

export const Strike = {
  name: 'Strike',
  level: 1,
  types: [PHYSICAL, ATTACK],
  attack: 2,
}

export const HeavyStrike = {
  name: 'Heavy Strike',
  level: 1,
  types: [PHYSICAL, ATTACK],
  attack: 4,
}

export const Block = {
  name: 'Block',
  level: 1,
  types: [PHYSICAL, DEFEND],
  defend: 3,
}

export const Parry = {
  name: 'Parry',
  level: 1,
  types: [PHYSICAL, DEFEND],
  defend: 4,
  attack: ({ player }) => player.pickCard(),
}
