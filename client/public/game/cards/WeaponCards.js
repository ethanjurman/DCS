import {
  PHYSICAL,
  ATTACK,
  SWORD,
} from './CardTypes';

// 
// SWORD CARDS
// 
export const Strike = {
  name: 'Strike',
  level: 1,
  types: [PHYSICAL, ATTACK, SWORD],
  attack: 6,
}

export const HeavyStrike = {
  name: 'Heavy Strike',
  level: 1,
  types: [PHYSICAL, ATTACK, SWORD],
  attack: 8,
}

// 
// CLAW CARDS
// 
export const ClawSlash = {
  name: 'Claw Slash',
  level: 1,
  types: [PHYSICAL, ATTACK, CLAW],
  attack: 6
}

export const ClawStab = {
  name: 'Claw Stab',
  level: 1,
  types: [PHYSICAL, ATTACK, CLAW],
  attack: 12
}
