import {Action} from 'redux'

export interface ExampleAppAction extends Action
{
    value?: number;
}

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})