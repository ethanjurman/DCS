const HandActions = {
  init: () => [],
  addCard: (cards, newCard) => cards.concat(newCard),
  removeCard: (cards, removedCard) => cards.filter((card) => {
    return card !== removedCard;
  })
}

export default HandActions;
