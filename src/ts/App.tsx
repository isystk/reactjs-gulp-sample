import * as React from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'

import AppStore from './Store'
import { increment, decrement } from './actions/AppStoreActions'
import { AppStoreState } from './StoreTypes'

interface AppStateProperties
{
	value: number;
}

interface AppDispatchProperties
{
	increment;
	decrement;
}

export class App extends React.Component<AppStateProperties & AppDispatchProperties, any>
{
    render() {
        const props = this.props;
        return (
            <React.Fragment>
                <div>value: {props.value}</div>
                <button onClick={props.increment}>+1</button>
                <button onClick={props.decrement}>-1</button>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state: AppStoreState, ownProp?: any): AppStateProperties  => ({
    value: state.value
});

const mapDispatchToProps = ({ increment, decrement});

export default connect(mapStateToProps, mapDispatchToProps)(App);