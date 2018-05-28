import Tram from 'tram-one';
import AppHeader from '../elements/AppHeader';
import Hand from '../elements/Hand';
import Card from '../elements/Card';

const html = Tram.html({
  AppHeader, Hand, Card
})

const buildHand = (hand) => {
  return hand.map((card, index) => html`
    <Card card={card} handPos=${index} numOfCards=${hand.length} />
  `);
}

const Home = ({ hand, lib }, { addCard, removeCard }) => {
  console.log(hand, lib);

  return html`
    <div>
      <AppHeader />
      <button onclick=${addCard}> increase hand size </button>
      <Hand>
        ${buildHand(hand)}
      </Hand>
    </div>
  `
}

export default Home;