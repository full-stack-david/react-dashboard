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
 *  File name: Notification.
 *  File type: Javascript.
 *  Page Component: NotificationPage
 *
 ** PAGE COMPONENT :: NotificationPage */

import React, {Component} from "react";
import PageTitle from "../../Components/PageTitle";
import DashboardLayout from "../../Components/DashboardLayout";
import {Button, Col, Row, notification, Select} from "antd";
import Widget from "../../Components/Widget";
notification.config({
    top: 60
});
export default class NotificationPage extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <DashboardLayout>
                {/*** Page Title ***/}
                <PageTitle title={'Notification'}
                           subTitle={'Display a notification message globally.'}/>
                <Row gutter={32}>
                    <Col xs={24} md={12} lg={12}>
                        <Widget title={'Basic'}>
                            <NotificationExample1/>
                        </Widget>
                        <Widget title={'Notification with icon'}>
                            <NotificationExample3/>
                        </Widget>
                        <Widget title={'Placement'}>
                            <NotificationExample5/>
                        </Widget>
                    </Col>
                    <Col xs={24} md={12} lg={12}>
                        <Widget title={'Duration after which the notification box is closed'}>
                            <NotificationExample2/>
                        </Widget>

                        <Widget title={'Custom close button'}>
                            <NotificationExample4/>
                        </Widget>
                    </Col>
                </Row>
            </DashboardLayout>
        )
    }
}


class NotificationExample1 extends Component{

    render(){
        const openNotification = () => {
            notification.open({
                message: 'Notification Title',
                description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            });
        };

        return(
            <Button type="primary" onClick={openNotification}>Open the notification box</Button>
        )
    }
}

class NotificationExample2 extends Component{

    render(){
        const openNotification = () => {
            const args = {
                message: 'Notification Title',
                description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
                duration: 0,
            };
            notification.open(args);
        };

        return(
            <Button type="primary" onClick={openNotification}>Open the notification box</Button>
        )
    }
}

class NotificationExample3 extends Component{

    render(){
        const openNotificationWithIcon = (type) => {
            notification[type]({
                message: 'Notification Title',
                description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            });
        };

        return(
            <div>
                <Button className={'mr-1'} onClick={() => openNotificationWithIcon('success')}>Success</Button>
                <Button className={'mr-1'} onClick={() => openNotificationWithIcon('info')}>Info</Button>
                <Button className={'mr-1'} onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
                <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
            </div>
        )
    }
}

class NotificationExample4 extends Component{

    render(){
        const close = () => {
            console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');
        };

        const openNotification = () => {
            const key = `open${Date.now()}`;
            const btn = (
                <Button type="primary" size="small" onClick={() => notification.close(key)}>
                    Confirm
                </Button>
            );
            notification.open({
                message: 'Notification Title',
                description: 'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
                btn,
                key,
                onClose: close,
            });
        };
        return(
            <Button type="primary" onClick={openNotification}>
                Open the notification box
            </Button>
        )
    }
}

class NotificationExample5 extends Component{

    render(){
        const { Option } = Select;
        const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
        const openNotification = () => {
            notification.open({
                message: 'Notification Title',
                description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            });
        };
        return(
            <div>
                <Select
                    defaultValue="topRight"
                    style={{ width: 120, marginRight: 10 }}
                    onChange={(val) => {
                        notification.config({
                            placement: val,
                        });
                    }}
                >
                    {options.map(val => <Option key={val} value={val}>{val}</Option>)}
                </Select>
                <Button
                    type="primary"
                    onClick={openNotification}
                >
                    Open the notification box
                </Button>
            </div>
        )
    }
}