import * as React from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import * as _ from 'lodash'

import AppStore from '../Store'
import { readEvents } from '../actions/index'
import { Events, Event } from '../StoreTypes'

// ↓ 表示用のデータ型
interface AppStateProperties
{
    events: AppStateProperty[]
}
interface AppStateProperty
{
    id: number;
    text: string;
}
interface AppDispatchProperties
{
	readEvents;
}

export class EventsIndex extends React.Component<AppStateProperties & AppDispatchProperties, any>
{
    componentDidMount() {
        this.props.readEvents();
    }

    renderEvents() {
        return _.map(this.props.events, event => (
            <tr>
                <td>{event.id}</td>
                <td>{event.text}</td>
            </tr>
        ))
    }

    render() {
        const props = this.props;
        return (
            <React.Fragment>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Text</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.renderEvents()}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state: Events, ownProp?: any): AppStateProperties  => ({
    events: _.map(state.events, function(event) {
        return {
            id: event.id,
            text: event.title + ',' + event.body
        }
    })
});

const mapDispatchToProps = ({ readEvents });

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);