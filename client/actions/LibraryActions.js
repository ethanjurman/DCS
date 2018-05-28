const LibraryActions = {
  init: () => [],
  addCard: (cards, newCard) => cards.concat(newCard),
  moveCard: (cards, { zone }) => {
    zone.addCard(cards[0]);
    return cards.slice(1);
  }
}

export default LibraryActions;
