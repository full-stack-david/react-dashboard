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
 *  File name: Modal.
 *  File type: Javascript.
 *  Page Component: ModalPage
 *
 ** PAGE COMPONENT :: ModalPage */

import React, {Component} from "react";
import PageTitle from "../../Components/PageTitle";
import DashboardLayout from "../../Components/DashboardLayout";
import Widget from "../../Components/Widget";
import {Button, Col, Modal, Row} from "antd";

export default class ModalPage extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <DashboardLayout>
                {/*** Page Title ***/}
                <PageTitle title={'Modal'}
                           subTitle={'Modal dialogs.'}/>
                <Row gutter={32}>
                    <Col xs={24} md={12} lg={12}>
                        <Widget title={'Basic'}>
                            <ModalExample1/>
                        </Widget>
                        <Widget title={'Customized Footer'}>
                            <ModalExample3/>
                        </Widget>
                        <Widget title={'Information modal dialog'}>
                            <ModalExample5/>
                        </Widget>
                    </Col>
                    <Col xs={24} md={12} lg={12}>
                        <Widget title={'Asynchronously close'}>
                            <ModalExample2/>
                        </Widget>
                        <Widget title={'Confirmation modal dialog'}>
                            <ModalExample4/>
                        </Widget>
                    </Col>
                </Row>
            </DashboardLayout>
        )
    }
}

class ModalExample1 extends React.Component {
    state = { visible: false }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Open Modal
                </Button>
                <Modal
                    zIndex={2000}
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        );
    }
}

class ModalExample2 extends React.Component {
    state = {
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    }

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    }

    render() {
        const { visible, confirmLoading, ModalText } = this.state;
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Open Modal with async logic
                </Button>
                <Modal title="Title"
                       zIndex={2000}
                       visible={visible}
                       onOk={this.handleOk}
                       confirmLoading={confirmLoading}
                       onCancel={this.handleCancel}
                >
                    <p>{ModalText}</p>
                </Modal>
            </div>
        );
    }
}



class ModalExample3 extends React.Component {
    state = {
        loading: false,
        visible: false,
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    render() {
        const { visible, loading } = this.state;
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Open Modal with customized footer
                </Button>
                <Modal
                    visible={visible}
                    title="Title"
                    zIndex={2000}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>Return</Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                            Submit
                        </Button>,
                    ]}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        );
    }
}

class ModalExample4 extends React.Component {

    render() {
        const confirm = Modal.confirm;

        function showConfirm() {
            confirm({
                zIndex:2000,
                title: 'Do you want to delete these items?',
                content: 'When clicked the OK button, this dialog will be closed after 1 second',
                onOk() {
                    return new Promise((resolve, reject) => {
                        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                    }).catch(() => console.log('Oops errors!'));
                },
                onCancel() {},
            });
        }

        return (
            <Button onClick={showConfirm}>
                Confirm
            </Button>
        );
    }
}

class ModalExample5 extends React.Component{
    render(){
        function info() {
            Modal.info({
                zIndex:2000,
                title: 'This is a notification message',
                content: (
                    <div>
                        <p>some messages...some messages...</p>
                        <p>some messages...some messages...</p>
                    </div>
                ),
                onOk() {},
            });
        }

        function success() {
            Modal.success({
                zIndex:2000,
                title: 'This is a success message',
                content: 'some messages...some messages...',
            });
        }

        function error() {
            Modal.error({
                zIndex:2000,
                title: 'This is an error message',
                content: 'some messages...some messages...',
            });
        }

        function warning() {
            Modal.warning({
                zIndex:2000,
                title: 'This is a warning message',
                content: 'some messages...some messages...',
            });
        }

        return(
            <div>
                <Button className={'mr-1'} onClick={info}>Info</Button>
                <Button className={'mr-1'} onClick={success}>Success</Button>
                <Button className={'mr-1'} onClick={error}>Error</Button>
                <Button onClick={warning}>Warning</Button>
            </div>
        )
    }
}