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
 *  File name: Popconfirm.
 *  File type: Javascript.
 *  Page Component: PopconfirmPage
 *
 ** PAGE COMPONENT :: PopconfirmPage */

import React, {Component} from "react";
import PageTitle from "../../Components/PageTitle";
import {Button, Col, Popconfirm, Row, message, Switch} from "antd";
import DashboardLayout from "../../Components/DashboardLayout";
import Widget from "../../Components/Widget";

export default class PopconfirmPage extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <DashboardLayout>
                {/*** Page Title ***/}
                <PageTitle title={'Popconfirm'}
                           subTitle={'A simple and compact confirmation dialog of an action.'}/>
                <Row gutter={32}>
                    <Col xs={24} md={12} lg={12}>
                        <Widget title={'Basic'}>
                            <PopconfirmExample1/>
                        </Widget>
                        <Widget title={'Placement'}>
                            <PopconfirmExample4/>
                        </Widget>
                    </Col>
                    <Col xs={24} md={12} lg={12}>
                        <Widget title={'Locale text'}>
                            <PopconfirmExample2/>
                        </Widget>
                        <Widget title={'Conditional trigger'}>
                            <PopconfirmExample3/>
                        </Widget>
                    </Col>
                </Row>
            </DashboardLayout>
        )
    }
}

class PopconfirmExample1 extends Component {
    state = {
        percent: 0,
    }

    increase = () => {
        let percent = this.state.percent + 10;
        if (percent > 100) {
            percent = 100;
        }
        this.setState({ percent });
    }

    decline = () => {
        let percent = this.state.percent - 10;
        if (percent < 0) {
            percent = 0;
        }
        this.setState({ percent });
    }

    render() {
        function confirm(e) {
            console.log(e);
            message.success('Click on Yes');
        }

        function cancel(e) {
            console.log(e);
            message.error('Click on No');
        }

        return (
            <Popconfirm title="Are you sure delete this task?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
                <span >Delete</span>
            </Popconfirm>
        );
    }
}

class PopconfirmExample2 extends Component {


    render() {


        return (
            <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
                <span>Delete</span>
            </Popconfirm>
        );
    }
}

class PopconfirmExample3 extends Component {
    state = {
        visible: false,
        condition: true, // Whether meet the condition, if not show popconfirm.
    }

    changeCondition = (value) => {
        this.setState({ condition: value });
    }

    confirm = () => {
        this.setState({ visible: false });
        message.success('Next step.');
    }

    cancel = () => {
        this.setState({ visible: false });
        message.error('Click on cancel.');
    }

    handleVisibleChange = (visible) => {
        if (!visible) {
            this.setState({ visible });
            return;
        }
        // Determining condition before show the popconfirm.
        console.log(this.state.condition);
        if (this.state.condition) {
            this.confirm(); // next step
        } else {
            this.setState({ visible }); // show the popconfirm
        }
    }

    render() {
        return (
            <div>
                <Popconfirm
                    title="Are you sure delete this task?"
                    visible={this.state.visible}
                    onVisibleChange={this.handleVisibleChange}
                    onConfirm={this.confirm}
                    onCancel={this.cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <a href="">Delete a task</a>
                </Popconfirm>
                <br />
                <br />
                Whether directly execute：<Switch defaultChecked onChange={this.changeCondition} />
            </div>
        );
    }
}

class PopconfirmExample4 extends Component {


    render() {
        const text = 'Are you sure to delete this task?';
        function confirm() {
            message.info('Clicked on Yes.');
        }
        return (
            <div className="demo">
                <div style={{ marginLeft: 70, whiteSpace: 'nowrap' }}>
                    <Popconfirm placement="topLeft" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                        <Button>TL</Button>
                    </Popconfirm>
                    <Popconfirm placement="top" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                        <Button>Top</Button>
                    </Popconfirm>
                    <Popconfirm placement="topRight" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                        <Button>TR</Button>
                    </Popconfirm>
                </div>
                <div style={{ width: 70, float: 'left' }}>
                    <Popconfirm placement="leftTop" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                        <Button>LT</Button>
                    </Popconfirm>
                    <Popconfirm placement="left" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                        <Button>Left</Button>
                    </Popconfirm>
                    <Popconfirm placement="leftBottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                        <Button>LB</Button>
                    </Popconfirm>
                </div>
                <div style={{ width: 70, marginLeft: 304 }}>
                    <Popconfirm placement="rightTop" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                        <Button>RT</Button>
                    </Popconfirm>
                    <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                        <Button>Right</Button>
                    </Popconfirm>
                    <Popconfirm placement="rightBottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                        <Button>RB</Button>
                    </Popconfirm>
                </div>
                <div style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
                    <Popconfirm placement="bottomLeft" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                        <Button>BL</Button>
                    </Popconfirm>
                    <Popconfirm placement="bottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                        <Button>Bottom</Button>
                    </Popconfirm>
                    <Popconfirm placement="bottomRight" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                        <Button>BR</Button>
                    </Popconfirm>
                </div>
            </div>
        );
    }
}