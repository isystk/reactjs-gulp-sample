import { Reducer } from 'redux'
import * as object_assign from 'object-assign'

import { AppStoreState } from '../StoreTypes'
import { ExampleAppAction, INCREMENT, DECREMENT } from '../actions/AppStoreActions'

export const initialState: AppStoreState = {
	value: 0
}

export function AppReducer(state: AppStoreState, action: ExampleAppAction): AppStoreState
{
	if (typeof state == 'undefined')
	{
		return initialState;
	}

	switch (action.type)
	{
		case INCREMENT:
			return {value: state.value + 1};
		case DECREMENT:
			return {value: state.value - 1};
		default:
		    return state;
	}

	return state;
};