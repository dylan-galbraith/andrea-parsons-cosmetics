import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

import Home from './pages/Home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Book from './pages/Book/Book';
import Account from './pages/Account/Account';
import Signup from './pages/Account/Signup';
import Login from './pages/Account/Login';

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
            <PrivateRoute path='/account' component={Account} />
            <PrivateRoute path='/book' component={Book} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
          </Switch>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
