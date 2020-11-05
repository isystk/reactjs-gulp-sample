import * as React from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { postEvent } from '../actions'

// ↓ 表示用のデータ型
interface AppDispatchProperties
{
	postEvent;
	history;
	handleSubmit;
    pristine;
    submitting;
    invalid;
 }

export class EventsNew extends React.Component<AppDispatchProperties>
{

    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }

    renderField(field) {
        const { input, label, type, meta: { touched, error } } = field
        return (
            <div>
                <input {...input} placeholder={label} type={type} />
                {touched && error && <span>{error}</span>}
            </div>
        )
    }

    async onSubmit(values) {
        await this.props.postEvent(values)
        this.props.history.push('/')
    }

    render() {
        // pristineは、フォームが未入力状態の場合にtrueを返す
        // submittingは、既にSubmit済みの場合にtrueを返す
        const { handleSubmit, pristine, submitting, invalid } = this.props
        return (
            <React.Fragment>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <div>
                        <Field label="Title" name="title" type="text" component={this.renderField} />
                    </div>
                    <div>
                        <Field label="Body" name="body" type="text" component={this.renderField} />
                    </div>
                    <div>
                        <input type="submit" value="Submit" disabled={pristine || submitting || invalid} />
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

const mapDispatchToProps = ({ postEvent });

export default connect(null, mapDispatchToProps)(
    reduxForm({ validate, form: 'eventNewForm'})(EventsNew)
)
