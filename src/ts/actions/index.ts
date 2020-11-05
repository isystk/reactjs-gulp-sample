import {Action} from 'redux'
import axios from 'axios'

//  アクションは『何か』が起こった時、Storeに『どんなデータ』を利用するかということを定義します。
//  ActionCreatorであるstore.dispatch()を使ってStoreに送信しますが、storeについてはこの記事の最後にまとめています。(※ こちら)
//  ただし、アプリケーションの状態がどのように変化するかはここでは指定しません。(→Reducerがやること)
//  あくまでどんな挙動があるかだけを定義します。
export interface ExampleAppAction extends Action
{
    response?: any;
    id: number;
}

export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENT'
export const GET_EVENT = 'GET_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'
export const PUT_EVENT = 'PUT_EVENT'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    dispatch({type : READ_EVENTS, response })
}

export const postEvent = values => async dispatch => {
    const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
    dispatch({type : CREATE_EVENT, response })
}

export const getEvent = values => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`, values)
    dispatch({type : GET_EVENT, response })
}

export const deleteEvent = id => async dispatch => {
    await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
    dispatch({type : DELETE_EVENT, id })
}

export const putEvent = (id, values) => async dispatch => {
    await axios.put(`${ROOT_URL}/events.${id}${QUERYSTRING}`, values)
    dispatch({type : PUT_EVENT, id })
}

