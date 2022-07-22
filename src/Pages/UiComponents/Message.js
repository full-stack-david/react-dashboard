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
 *  File name: Message.
 *  File type: Javascript.
 *  Page Component: MessagePage
 *
 ** PAGE COMPONENT :: MessagePage */

import React, {Component} from "react";
import PageTitle from "../../Components/PageTitle";
import DashboardLayout from "../../Components/DashboardLayout";
import {Col, Row, message, Button} from "antd";
import Widget from "../../Components/Widget";

message.config({
    top: 60
});
export default class MessagePage extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <DashboardLayout>
                {/*** Page Title ***/}
                <PageTitle title={'Message'}
                           subTitle={'Display global messages as feedback in response to user operations.'}/>
                <Row gutter={32}>
                    <Col xs={24} md={12} lg={12}>
                        <Widget title={'Normal prompt'}>
                            <MessageExample1/>
                        </Widget>
                        <Widget title={'Customize duration'}>
                            <MessageExample3/>
                        </Widget>
                    </Col>

                    <Col xs={24} md={12} lg={12}>
                        <Widget title={'Other types of message'}>
                            <MessageExample2/>
                        </Widget>
                        <Widget title={'Message of loading'}>
                            <MessageExample4/>
                        </Widget>
                    </Col>
                </Row>
            </DashboardLayout>
        )
    }
}


class MessageExample1 extends Component {

    render() {
        const info = () => {
            message.info('This is a normal message');
        };

        return (
            <Button type="primary" onClick={info}>Display normal message</Button>
        )
    }
}

class MessageExample2 extends Component {

    render() {
        const success = () => {
            message.success('This is a message of success');
        };

        const error = () => {
            message.error('This is a message of error');
        };

        const warning = () => {
            message.warning('This is message of warning');
        };

        return (
            <div>
                <Button className={'mr-1'} onClick={success}>Success</Button>
                <Button className={'mr-1'} onClick={error}>Error</Button>
                <Button onClick={warning}>Warning</Button>
            </div>
        )
    }
}

class MessageExample3 extends Component {

    render() {
        const success = () => {
            message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
        };


        return (
            <Button onClick={success}>Customized display duration</Button>
        )
    }
}

class MessageExample4 extends Component {

    render() {
        const success = () => {
            const hide = message.loading('Action in progress..', 0);
            // Dismiss manually and asynchronously
            setTimeout(hide, 2500);
        };


        return (
            <Button onClick={success}>Display a loading indicator</Button>
        )
    }
}