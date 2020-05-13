import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FlightsSearch from './flightsSearch/components/FlightsSearch.jsx';
import store from './store.js';
import Header from './header/Header.jsx';
import News from './news/News.jsx';
import Contacts from './contacts/Contacts.jsx';
import Footer from './footer/Footer.jsx';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="airport">
        <Header />
        <Switch>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/">
            <FlightsSearch />
          </Route>
        </Switch>
        <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
