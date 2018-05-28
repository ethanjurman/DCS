import Tram from 'tram-one';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import HandActions from './actions/HandActions';
import LibraryActions from './actions/LibraryActions';

const app = new Tram()
app.addRoute('/', Home)
app.addRoute('/404', NotFound)
app.addActions({ hand: HandActions, lib: LibraryActions })
app.start('.main')
