const HandActions = {
  init: () => [],
  addCard: (cards, newCard) => cards.concat(newCard),
  moveCard: (cards, { zone, card }) => {
    zone.addCard(card);
    return cards.filter((card) => {
      return card !== removedCard;
    });
  }
}

export default HandActions;
