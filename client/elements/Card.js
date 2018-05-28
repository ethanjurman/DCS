import Tram from 'tram-one';
const html = Tram.html();

const cardStyle = (handPos, numOfCards) => {
  let NOC = numOfCards;
  if (numOfCards % 2 !== 0) {
    NOC = numOfCards - 1;
  }
  const rotation = ((handPos / NOC) - 0.5) * 30;
  const position = ((handPos / NOC) - 0.5) * 800;
  return `
    transform: translateZ(0px) translateX(${position + 500}px) rotate(${rotation}deg) ;
    transform-origin: bottom;
  `
};

const Card = ({ handPos, numOfCards }) => {
  return html`
    <div className="cardWrapper" style=${cardStyle(handPos, 6)}>
      <div className="card">
        CARD
      </div>
    </div>
  `
};

export default Card;