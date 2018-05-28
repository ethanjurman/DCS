import Tram from 'tram-one';

const html = Tram.html();

const cardStyle = (handPos, numOfCards) => {
  let NOC = numOfCards - 1;
  const cardPos = (handPos / NOC) - 0.5;
  const rotation = cardPos * 30;
  const position = cardPos * 800;
  return `
    transform: translateZ(0px) translateX(${position + 500}px) rotate(${rotation}deg) ;
    transform-origin: bottom;
  `
};

const Card = ({ handPos, numOfCards }) => {
  return html`
    <div className="cardWrapper" style=${cardStyle(handPos, numOfCards)}>
      <div className="card">
        CARD
      </div>
    </div>
  `
};

export default Card;