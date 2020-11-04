import * as React from 'react';
import * as ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import reducers from './reducers'
import EventsIndex from './components/events_index'
import EventsNew from './components/events_new'
import { NotFound } from './components/NotFound'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDom.render(
	<Provider store={store} >
		<Router>
			<Switch>
				<Route exact path="/" component={EventsIndex} />
				<Route exact path="/events/new" component={EventsNew} />
				<Route component={NotFound}/>
			</Switch>
		</Router>
	</Provider>,
	document.getElementById("appContainer")
);
