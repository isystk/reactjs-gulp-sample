import * as React from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
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

    renderField(field) {
        const { input, label, type, meta: { touched, error } } = field
        return (
            <div>
                <input {...input} placeholder={label} type={type} />
                {touched && error && <span>{error}</span>}
            </div>
        )
    }

    render() {
        return (
            <React.Fragment>
                <form>
                    <div>
                        <Field label="Title" name="title" type="text" component={this.renderField} />
                    </div>
                    <div>
                        <Field label="Body" name="body" type="text" component={this.renderField} />
                    </div>
                    <div>
                        <input type="submit" value="Submit" disabled={false} />
                        <Link to="/" >Cancel</Link>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

const validate = values => {
    const errors = {
        title: '',
        body: ''
    }
    if (!values.title) errors.title = 'Titleを入力して下さい'
    if (!values.body) errors.body = 'Bodyを入力して下さい'
    return errors
}

//const mapDispatchToProps = ({ readEvents });

export default connect(null,null)(
    reduxForm({ validate, form: 'eventNewForm'})(EventsNew)
)
