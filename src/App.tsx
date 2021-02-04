import React from 'react';
import "reflect-metadata";
import {Provider} from "inversify-react";
import {container} from "./container";
import Router from './hoc/Router';

function App() {
  return (
    <Provider container={container} key={container.guid}>
      <div className="App">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
