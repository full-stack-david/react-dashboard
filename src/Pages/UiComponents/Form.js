/******************************************************************************************
 *
 *  MAGEMAX - React Admin Dashboard.
 *  Version: 1.0
 *  Author: @rex_q - https://themeforest.net/user/rex_q/portfolio.
 *  Copyright © 2018 RexQ.
 *  Licensed: Under ThemeForest License.
 *
 * ........................................................................................
 *
 *  There is more Awesome projects coming soon make sure you follow us to
 *  know more about our new projects and updates.
 *
 *  FOLLOW US:
 *  Themeforest: https://themeforest.net/user/rex_q
 *  Twitter: https://twitter.com/vueghost
 *  Facebook: https://www.facebook.com/Vueghost-113597132644224/
 *
 * ::::::::::::::::::::::::::::::[  PAGE COMPONENT  ]::::::::::::::::::::::::::::::::::
 *
 *  File name: Form.
 *  File type: Javascript.
 *  Page Component: FormPage
 *
 ** PAGE COMPONENT :: FormPage */

import React, {Component} from "react";
import PageTitle from "../../Components/PageTitle";
import DashboardLayout from "../../Components/DashboardLayout";
import {Col, Row, Form, Icon, Input, Button,DatePicker, TimePicker} from "antd";
import Widget from "../../Components/Widget";
import {WrappedRegistrationForm} from "../Pages/Register";

export default class FormPage extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <DashboardLayout>
                {/*** Page Title ***/}
                <PageTitle title={'Form'}
                           subTitle={'Form is used to collect, validate, and submit the user input, usually contains various form items including checkbox, radio, input, select, and etc.'}/>

                <Row gutter={32}>
                    <Col lg={12} md={24}>
                       <Widget title={'Login Form'}>
                        <ExampleHorizontalLoginForm/>
                       </Widget>
                        <Widget title={'Dynamic Form Item'}>
                            <WrappedDynamicFieldSet/>
                        </Widget>
                    </Col>
                    <Col lg={12} md={24}>
                        <Widget title={'Register Form'}>
                            <WrappedRegistrationForm/>
                        </Widget>

                    </Col>
                    <Col lg={24}>
                        <Widget title={'Time-related Controls'}>
                            <WrappedTimeRelatedForm/>
                        </Widget>
                    </Col>
                </Row>
            </DashboardLayout>
        )
    }
}


const FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <FormItem
                    validateStatus={userNameError ? 'error' : ''}
                    help={userNameError || ''}
                >
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem
                    validateStatus={passwordError ? 'error' : ''}
                    help={passwordError || ''}
                >
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={hasErrors(getFieldsError())}
                    >
                        Log in
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const ExampleHorizontalLoginForm = Form.create()(HorizontalLoginForm);

let uuid = 0;
class DynamicFieldSet extends React.Component {
    remove = (k) => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one passenger
        if (keys.length === 1) {
            return;
        }

        // can use data-binding to set
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    }

    add = () => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(uuid);
        uuid++;
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            keys: nextKeys,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;

        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 4 },
            },
        };
        getFieldDecorator('keys', { initialValue: [] });
        const keys = getFieldValue('keys');
        const formItems = keys.map((k, index) => {
            return (
                <FormItem
                    {...(index === 0 ? formItemLayoutWithOutLabel : formItemLayoutWithOutLabel)}
                    required={false}
                    key={k}
                >
                    {getFieldDecorator(`names[${k}]`, {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{
                            required: true,
                            whitespace: true,
                            message: "Please input passenger's name or delete this field.",
                        }],
                    })(
                        <Input placeholder="passenger name" style={{ width: '60%', marginRight: 8 }} />
                    )}
                    {keys.length > 1 ? (
                        <Icon
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                            disabled={keys.length === 1}
                            onClick={() => this.remove(k)}
                        />
                    ) : null}
                </FormItem>
            );
        });
        return (
            <Form onSubmit={this.handleSubmit}>
                {formItems}
                <FormItem {...formItemLayoutWithOutLabel}>
                    <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
                        <Icon type="plus" /> Add field
                    </Button>
                </FormItem>
                <FormItem {...formItemLayoutWithOutLabel}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedDynamicFieldSet = Form.create()(DynamicFieldSet);


const { MonthPicker, RangePicker } = DatePicker;

class TimeRelatedForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }

            // Should format date value before submit.
            const rangeValue = fieldsValue['range-picker'];
            const rangeTimeValue = fieldsValue['range-time-picker'];
            const values = {
                ...fieldsValue,
                'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
                'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
                'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
                'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
                'range-time-picker': [
                    rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
                    rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
                ],
                'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
            };
            console.log('Received values of form: ', values);
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        };
        const rangeConfig = {
            rules: [{ type: 'array', required: true, message: 'Please select time!' }],
        };
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="DatePicker"
                >
                    {getFieldDecorator('date-picker', config)(
                        <DatePicker />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="DatePicker[showTime]"
                >
                    {getFieldDecorator('date-time-picker', config)(
                        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="MonthPicker"
                >
                    {getFieldDecorator('month-picker', config)(
                        <MonthPicker />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="RangePicker"
                >
                    {getFieldDecorator('range-picker', rangeConfig)(
                        <RangePicker />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="RangePicker[showTime]"
                >
                    {getFieldDecorator('range-time-picker', rangeConfig)(
                        <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="TimePicker"
                >
                    {getFieldDecorator('time-picker', config)(
                        <TimePicker />
                    )}
                </FormItem>
                <FormItem
                    wrapperCol={{
                        xs: { span: 24, offset: 0 },
                        sm: { span: 16, offset: 8 },
                    }}
                >
                    <Button type="primary" htmlType="submit">Submit</Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedTimeRelatedForm = Form.create()(TimeRelatedForm);