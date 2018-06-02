export const buildCardArray = (card, num) => {
  Array.apply(null, Array(num)).map(() => card);
};

const addCardToDeck = ({ cardPools, cardsObject }, deck, cardKey) => {
  const card = cardPools.find(cardPool => cardPool.includes(cardKey))[cardKey];
  const numberOfCards = cardsObject[cardKey];
  return deck.concat(buildCardArray(card, numberOfCards));
};

export const buildStartingDeck = (cardPools, cardsObject) => {
  return Object.keys(cardsObject).reduce(
    addCardToDeck.bind(null, { cardPools, cardsObject }),
    []
  );
};
