import React from 'react';
import GlobalStyle from './globalStyles';
import { Navbar, Footer } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Product';
import Signup from './pages/SignUp/Signup';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/signup" component={Signup} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
