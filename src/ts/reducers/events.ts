// Reducerは、Stateの状態をデザインして、アクションをハンドリングします。
// また、Reducerは、前の状態とアクションを取り、次の状態を返す純粋な関数です。

import { Reducer } from 'redux'
import * as object_assign from 'object-assign'

import { AppStoreState } from '../StoreTypes'
import { ExampleAppAction, READ_EVENTS } from '../actions/index'

export function EventsReducer(state: AppStoreState, action: ExampleAppAction): AppStoreState
{
	if (typeof state == 'undefined')
	{
		return {};
	}

	switch (action.type)
	{
		case READ_EVENTS:
			return state;
		default:
		    return state;
	}

	return state;
};

export default EventsReducer;
