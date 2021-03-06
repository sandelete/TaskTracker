import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';  
import * as serviceWorker from './tools/serviceWorker';
import TaskTracker from './taskTrackerApp/taskTracker'
import Auth from './auth/auth'

import bindMethods from './tools/bindMethods'

class App extends Component {
  constructor(){
    super();
    this.authorized = true;
    this.taskTarckerApp = new TaskTracker('/app');
    this.auth = new Auth('/auth', undefined);

    bindMethods(this);
  }

  checkAuthorization(func){
    if (this.authorized) {
      return func;
    } else {
      return (..._) => (<Redirect to='/login' />);
    }
  }

  taskTrackerComponent(){
    return this.checkAuthorization(this.taskTarckerApp.ui.render)()
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path={this.taskTarckerApp.path} component={this.taskTrackerComponent} />
          <Route exact path={this.auth.path} component={this.auth.ui.render} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

serviceWorker.unregister()
