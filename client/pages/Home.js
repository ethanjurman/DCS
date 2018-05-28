import Tram from 'tram-one';
import AppHeader from '../elements/AppHeader';
import Hand from '../elements/Hand';
import Card from '../elements/Card';

const html = Tram.html({
  AppHeader, Hand, Card
})

const Home = () => {
  return html`
    <div>
      <AppHeader />
      <Hand>
        <Card handPos=0 />
        <Card handPos=1 />
        <Card handPos=2 />
        <Card handPos=3 />
        <Card handPos=4 />
        <Card handPos=5 />
        <Card handPos=6 />
      </Hand>
    </div>
  `
}

export default Home;