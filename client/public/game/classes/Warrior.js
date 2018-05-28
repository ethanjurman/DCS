import WarriorCards from '../cards/WarriorCards';

const buildCardArray = (card, num) => {
  Array.apply(null, Array(num)).map(() => card);
}

const buildStartingDeck = (cardPool, cardsObject) => {
  return Object
    .keys(cardsObject)
    .reduce((deck, cardKey) => {
      const card = cardPool[cardKey];
      const numberOfCards = cardsObject[cardKey];
      return deck.concat(
        buildCardArray(card, numberOfCards)
      )
    }, [])
}

export const Warrior = {
  cardPool: WarriorCards,
  startingDeck: buildStartingDeck(
    WarriorCards,
    {
      Strike: 10,
      Block: 10,
      Parry: 2,
      HeavyStrike: 4,
    }
  ),
};
