const HandActions = {
  init: () => [],
  addCard: (cards, newCard) => cards.concat(newCard),
  moveCard: (cards, { zone, card }) => {
    zone.addCard(card);
    return cards.filter(cardFromHand => {
      return card !== cardFromHand;
    });
  }
};

export default HandActions;
