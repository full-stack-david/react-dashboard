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
 * ::::::::::::::::::::::::::::::[  COMPONENT  ]::::::::::::::::::::::::::::::::::::
 *
 *  File name: index.
 *  File type: Javascript.
 *  Component: LoginFrom
 *
 ** COMPONENT :: LoginFrom */

import React, {Component} from "react";
import style from "./style.scss";
import {Form, Icon, Input, Button, Checkbox, Divider} from 'antd';

export default class LoginFrom extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <div className={style.loginForm}>
                <h1>Login</h1>
                <WrappedNormalLoginForm/>
            </div>
        )
    }
}

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{required: true, message: 'Please input your username!'}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} size={'large'} placeholder="Username"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please input your Password!'}],
                    })(
                        <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}  size={'large'} type="password"
                               placeholder="Password"/>
                    )}
                </FormItem>
                <FormItem>

                    <div>
                        <Button type="primary" block size={'large'} htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </div>

                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )} <a className="login-form-forgot" href="">Forgot password</a>
                    <Divider>OR</Divider>
                    Don’t have an account? <a>Sign up</a>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);