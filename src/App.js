import React from 'react';
import {HashRouter as Router , Route , Switch} from 'react-router-dom';
import Index from './view/index'
import Error from './error'
import Back from './component/back'
import "./assets/css/common.scss"
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' component={Index}/>
          <Route component={Error} />
        </Switch>
        <Back></Back>
      </div>
    </Router>
  );
}

export default App;
