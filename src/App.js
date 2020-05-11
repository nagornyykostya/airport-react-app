import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FlightsSearch from './FlightsSearch/components/FlightsSearch.jsx';
import store from './store.js';
import Header from './Header/Header.jsx';
import News from './News/News.jsx';
import Contacts from './Contacts/Contacts.jsx';
import Footer from './Footer/Footer.jsx';

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
