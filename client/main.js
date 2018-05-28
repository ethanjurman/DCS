import Tram from 'tram-one';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const app = new Tram()
app.addRoute('/', Home)
app.addRoute('/404', NotFound)
app.start('.main')
