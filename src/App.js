import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import Scene from './components/Scene';
import Nav from './components/Nav';
import scenes from './utils/load-scenes';
import './styles/App.css';

function App() {
  console.log(scenes);
  return (
    <Router>
      <Nav scenes={scenes} />
      <Switch>
        <Scene exact path="/" component={scenes.default} />
        {scenes.map(s =>
          <Scene key={s.title} path={s.slug} component={s.component} />
        )}
      </Switch>
    </Router>
  );
}

export default App;
