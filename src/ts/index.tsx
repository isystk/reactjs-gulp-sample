import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import EventsIndex from './components/events_index'
import { NotFound } from './components/NotFound'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDom.render(
	<Provider store={store} >
		<Router>
			<Switch>
				<Route exact path="/" component={EventsIndex} />
				<Route component={NotFound}/>
			</Switch>
		</Router>
	</Provider>,
	document.getElementById("appContainer")
);
