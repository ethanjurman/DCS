import WarriorCards from "../cards/WarriorCards";
import { buildStartingDeck } from "../utils/classUtils";

export const Warrior = {
  cardPool: WarriorCards,
  startingDeck: buildStartingDeck([], {
    Strike: 10,
    Block: 10,
    Parry: 2,
    HeavyStrike: 4
  })
};
