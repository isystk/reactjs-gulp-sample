import * as React from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import { Link } from 'react-router-dom'

// ↓ 表示用のデータ型
interface appstateproperties
{
    events: appstateproperty[]
}
interface appstateproperty
{
    id: number;
    text: string;
}
interface appdispatchproperties
{
	readevents;
}

export class EventsNew extends React.Component
{
    render() {
        return (
            <React.Fragment>
                <div>foo</div>
            </React.Fragment>
        )
    }
}


//const mapDispatchToProps = ({ readEvents });

export default connect(null,null)(EventsNew);