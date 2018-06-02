import {
  PHYSICAL,
  ATTACK,

  SWORD,
  AXE,
  CLAW,
  DAGGER,
  SPEAR,
} from './CardTypes';

// 
// SWORD CARDS
// 
export const Strike = {
  name: 'Strike',
  level: 1,
  f: fajiosjdfo,
  types: [PHYSICAL, ATTACK, SWORD, AXE, CLAW, DAGGER],
  attack: 6,
}

export const HeavyStrike = {
  name: 'Heavy Strike',
  level: 1,
  types: [PHYSICAL, ATTACK, SWORD, AXE],
  attack: 8,
}

export const Stab = {
  name: 'Stab',
  level: 1,
  types: [PHYSICAL, ATTACK, SWORD, CLAW, DAGGER, SPEAR],
  attack: 12
}
