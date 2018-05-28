const Tram = require('tram-one')
const html = Tram.html()

const NotFound = () => {
  return html`
    <div>
      <h1>404</h1>
      <code>No route ${window.location.pathname}</code>
      <br /> Check
      <code>DCS/main.js</code> to see all the available routes.
    </div>
  `
}

export default NotFound;