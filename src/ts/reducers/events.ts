// Reducerは、Stateの状態をデザインして、アクションをハンドリングします。
// また、Reducerは、前の状態とアクションを取り、次の状態を返す純粋な関数です。

import { Reducer } from 'redux'
import * as object_assign from 'object-assign'
import * as _ from 'lodash'

import { Events } from '../StoreTypes'
import {
ExampleAppAction,
READ_EVENTS,
DELETE_EVENT
} from '../actions/index'

export function EventsReducer(events: Events, action: ExampleAppAction): Events
{
	if (typeof events == 'undefined')
	{
		return null;
	}

	switch (action.type)
	{
		case READ_EVENTS:
		    return _.mapKeys(action.response.data, 'id')
		case DELETE_EVENT:
		    delete events[action.id]
		    return { ...events }
		default:
		    return events
	}

	return events
};

export default EventsReducer;
