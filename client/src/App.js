import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
