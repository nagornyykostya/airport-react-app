import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import FlightsSearch from './FlightsSearch/components/FlightsSearch.jsx';
import store from './store.js';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <FlightsSearch />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
