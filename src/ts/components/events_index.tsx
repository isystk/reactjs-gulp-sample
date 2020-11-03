import * as React from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'

import AppStore from '../Store'
import { readEvents } from '../actions/index'
import { AppStoreState } from '../StoreTypes'

interface AppStateProperties
{
}

interface AppDispatchProperties
{
	readEvents;
}

export class EventsIndex extends React.Component<AppStateProperties & AppDispatchProperties, any>
{
    componentDidMount() {
        console.log('Hi!');
        this.props.readEvents();
    }
    render() {
        const props = this.props;
        return (
            <React.Fragment>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state: AppStoreState, ownProp?: any): AppStateProperties  => ({});

const mapDispatchToProps = ({ readEvents });

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);