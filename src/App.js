import React from 'react';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Index from './component/index'
import Error from './error'
import "./assets/css/common.scss"
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' component={Index}/>
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
