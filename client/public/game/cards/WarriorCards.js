import {
  PHYSICAL,
  DEFEND,
} from './CardTypes';

export const Parry = {
  name: 'Parry',
  level: 1,
  types: [PHYSICAL, DEFEND],
  defend: 4,
  attack: ({ player }) => player.pickCard(),
}

export const Berserker = {
  name: 'Berserker',
  level: 1,
  types: [PHYSICAL, MISC],
  attack: ({ player }) => player.addMod(
    ({ attack }) => {
      return { attack: attack + 5 }
    }
  ),
}