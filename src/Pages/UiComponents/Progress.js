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
 *  File name: Progress.
 *  File type: Javascript.
 *  Page Component: ProgressPage
 *
 ** PAGE COMPONENT :: ProgressPage */

import React, {Component} from "react";
import PageTitle from "../../Components/PageTitle";
import DashboardLayout from "../../Components/DashboardLayout";
import {Button, Col, Progress, Row, Tooltip} from "antd";
import Widget from "../../Components/Widget";
export default class ProgressPage extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <DashboardLayout>
                {/*** Page Title ***/}
                <PageTitle title={'Progress'}
                           subTitle={'Display the current progress of an operation flow.'}/>
                <Row gutter={32}>
                    <Col lxs={24} md={12} lg={12}>
                        <Widget title={'Progress bar'}>
                            <Progress percent={30}/>
                            <Progress percent={50} status="active"/>
                            <Progress percent={70} status="exception"/>
                            <Progress percent={100}/>
                            <Progress percent={50} showInfo={false}/>
                        </Widget>
                        <Widget title={'Mini size progress bar'}>
                            <Progress percent={30} size="small" />
                            <Progress percent={50} size="small" status="active" />
                            <Progress percent={70} size="small" status="exception" />
                            <Progress percent={100} size="small" />
                        </Widget>
                        <Widget title={'Progress bar with success segment'}>
                            <Tooltip title="3 done / 3 in progress / 4 to do">
                                <Progress percent={60} successPercent={30} />
                            </Tooltip>
                        </Widget>
                        <Widget title={'Dynamic'}>
                            <ProgressExample1/>
                        </Widget>
                    </Col>
                    <Col lxs={24} md={12} lg={12}>
                        <Widget title={'Circular progress bar'}>
                            <Progress className={'mr-1'} type="circle" percent={75}/>
                            <Progress className={'mr-1'} type="circle" percent={70} status="exception"/>
                            <Progress className={'mr-1'} type="circle" percent={100}/>
                        </Widget>
                        <Widget title={'Mini size circular progress bar'}>
                            <Progress className={'mr-1'} type="circle" percent={30} width={80} />
                            <Progress className={'mr-1'} type="circle" percent={70} width={80} status="exception" />
                            <Progress className={'mr-1'} type="circle" percent={100} width={80} />
                        </Widget>
                        <Widget title={'Square linecaps'}>
                            <Progress className={'mb-1'} strokeLinecap="square" percent={75} />
                            <Progress className={'mr-1'} strokeLinecap="square" type="circle" percent={75} />
                            <Progress className={'mr-1'} strokeLinecap="square" type="dashboard" percent={75} />
                        </Widget>
                        <Widget title={'Dynamic circular progress bar'}>
                            <ProgressExample2/>
                        </Widget>
                    </Col>
                </Row>
            </DashboardLayout>
        )
    }
}


class ProgressExample1 extends Component {
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
        const ButtonGroup = Button.Group;

        return (
            <div>
                <Progress percent={this.state.percent} />
                <ButtonGroup>
                    <Button onClick={this.decline} icon="minus" />
                    <Button onClick={this.increase} icon="plus" />
                </ButtonGroup>
            </div>
        );
    }
}
class ProgressExample2 extends Component {
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
        const ButtonGroup = Button.Group;

        return (
            <div>
                <Progress className={'mr-1'} type="circle" percent={this.state.percent} />
                <ButtonGroup >
                    <Button onClick={this.decline} icon="minus" />
                    <Button onClick={this.increase} icon="plus" />
                </ButtonGroup>
            </div>
        );
    }
}