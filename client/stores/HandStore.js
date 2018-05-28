const store = {
  handSize: 4
};

class HandStore {
  constructor() {
    this.store = store;
  }
  get handSize() {
    return this.store.handSize;
  }
  set handSize(newHandSize) {
    this.store.handSize = newHandSize;
  }
  connect(component) {
    return component(this);
  }
}

export default HandStore;
