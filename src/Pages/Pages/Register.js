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
 *  File name: Register.
 *  File type: Javascript.
 *  Page Component: RegisterPage
 *
 ** PAGE COMPONENT :: RegisterPage */

import React, {Component} from "react";
import style from "./Register.scss";
import {Form, Input, Row, Col, Checkbox, Button} from 'antd';


export default class RegisterPage extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <div className={style.registerPage}>
                <div className={style.bg}>
                    <div className={style.leftBG}/>
                    <div className={style.rightBG}/>
                </div>
                <div className={style.container}>
                    <Row gutter={60}>
                        <Col lg={9} >
                            <div className={style.registerWidget}>
                                <h1>Register</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua</p>
                                <WrappedRegistrationForm/>
                            </div>
                        </Col>
                        <Col lg={15} className={style.pageHero}>
                            <div className={style.pageHeroContainer}>
                                <div className={style.title}>
                                    <b>MAGEMAX</b> React JS Admin Dashboard
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

const FormItem = Form.Item;


 class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], {force: true});
        }
        callback();
    }

    handleWebsiteChange = (value) => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({autoCompleteResult});
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 24},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 24},
            },
        };

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                >
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input size={'large'} placeholder={'E-mail'}/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                >
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true, message: 'Please input your password!',
                        }, {
                            validator: this.validateToNextPassword,
                        }],
                    })(
                        <Input size={'large'} type="password" placeholder={'Password'}/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}

                >
                    {getFieldDecorator('confirm', {
                        rules: [{
                            required: true, message: 'Please confirm your password!',
                        }, {
                            validator: this.compareToFirstPassword,
                        }],
                    })(
                        <Input size={'large'} type="password" placeholder="Confirm Password"
                               onBlur={this.handleConfirmBlur}/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                >
                    {getFieldDecorator('nickname', {
                        rules: [{required: true, message: 'Please input your nickname!', whitespace: true}],
                    })(
                        <Input size={'large'} placeholder={'Nickname'}/>
                    )}
                </FormItem>


                <FormItem
                    {...formItemLayout}

                    extra="We must make sure that your are a human."
                >
                    <Row gutter={8}>
                        <Col span={12}>
                            {getFieldDecorator('captcha', {
                                rules: [{required: true, message: 'Please input the captcha you got!'}],
                            })(
                                <Input size={'large'} placeholder={'Captcha'}/>
                            )}
                        </Col>
                        <Col span={12}>
                            <Button size={'large'}>Get captcha</Button>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem {...formItemLayout}>
                    {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                    })(
                        <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                    )}
                </FormItem>
                <FormItem {...formItemLayout}>
                    <Button type="primary" block size={'large'} htmlType="submit">Register</Button>
                </FormItem>
            </Form>
        );
    }
}

export const WrappedRegistrationForm = Form.create()(RegistrationForm);
