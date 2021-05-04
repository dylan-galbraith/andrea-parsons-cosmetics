import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

import Home from './pages/Home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Signup from './pages/Signup/Signup';
import Book from './pages/Book/Book';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider >
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/signup' component={Signup} />
            <PrivateRoute path='/book' component={Book} />
          </Switch>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
