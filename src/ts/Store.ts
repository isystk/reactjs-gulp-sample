import { combineReducers, createStore, ReducersMapObject } from 'redux'

import { AppReducer, initialState } from './reducers/appReducer';

var reducers: ReducersMapObject = {
	AppReducer
}

declare var window: any;

export default createStore(AppReducer, initialState, window.devToolsExtension ? window.devToolsExtension() : undefined);