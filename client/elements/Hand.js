import Tram from 'tram-one';

const html = Tram.html();

const Hand = (attrs, children) => {
  return html`
    <div className="hand">
      ${children}
    </div>
  `
}

export default Hand;