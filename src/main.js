import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import Dashboard from './containers/Dashboard';
import NoteEdit from './containers/NoteEdit';
import Note from './containers/Note';
import Starred from './containers/Starred';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={Dashboard}>
          <Route path="notes/:id/edit" component={NoteEdit} />
        </Route>
        <Route path="notes/:id" component={Note} />
        <Route path="starred" component={Starred} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
