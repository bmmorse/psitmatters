import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PS from '../components/PS';

/**
 * @props {object} config | the config object from <App />
 */
export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/'>
          <PS />
        </Route>
      </Switch>
    );
  }
}
