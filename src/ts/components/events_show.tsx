import * as React from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { getEvent, deleteEvent, putEvent } from '../actions'

// ↓ 表示用のデータ型
interface AppDispatchProperties
{
    getEvent;
    deleteEvent;
    putEvent;
    match;
	history;
	handleSubmit;
    pristine;
    submitting;
    invalid;
 }

export class EventsShow extends React.Component<AppDispatchProperties>
{

    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.onDeleteClick = this.onDeleteClick.bind(this)
    }

    componentDidMount() {
        const { id } = this.props.match.params
        if (id) this.props.getEvent(id)
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

    async onDeleteClick() {
        const { id } = this.props.match.params
        await this.props.deleteEvent(id)
        this.props.history.push('/')
    }

    async onSubmit(values) {
        await this.props.putEvent(values)
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
                        <Link to="/" >キャンセル</Link>
                        <Link to="/" onClick={this.onDeleteClick} >削除</Link>
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

const mapStateToProps = (state, ownProps) => {
    const event = state.events[ownProps.match.params.id]
    return { initialValues: event, event }
}

const mapDispatchToProps = ({ getEvent, deleteEvent, putEvent });

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true})(EventsShow)
)