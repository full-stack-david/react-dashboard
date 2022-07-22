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
 *  File name: Radio.
 *  File type: Javascript.
 *  Page Component: RadioPage
 *
 ** PAGE COMPONENT :: RadioPage */

import React, {Component} from "react";
import PageTitle from "../../Components/PageTitle";
import DashboardLayout from "../../Components/DashboardLayout";
import {Button, Col, Input, Radio, Row} from "antd";
import Widget from "../../Components/Widget";
export default class RadioPage extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <DashboardLayout>
                {/*** Page Title ***/}
                <PageTitle title={'Radio'}
                           subTitle={'Used to select a single state in multiple options.'}/>
                <Row gutter={32}>
                    <Col xs={24} md={12} lg={12}>
                        <Widget title='Basic Radio'>
                            <Radio>Radio</Radio>


                        </Widget>
                        <Widget title='Disabled Radio'>

                            <RadioExample3/>
                        </Widget>
                        <Widget title='Horizontal RadioGroup'>
                            <RadioExample1/>

                        </Widget>
                        <Widget title='Vertical RadioGroup'>
                            <RadioExample2/>
                        </Widget>
                    </Col>
                    <Col xs={24} md={12} lg={12}>
                        <Widget title='Basic Radio'>
                            <Radio>Radio</Radio>


                        </Widget>
                        <Widget title='Disabled Radio'>

                            <RadioExample3/>
                        </Widget>
                        <Widget title='Horizontal RadioGroup'>
                            <RadioExample2/>

                        </Widget>
                        <Widget title='Vertical RadioGroup'>
                            <RadioExample2/>
                        </Widget>
                    </Col>
                </Row>
            </DashboardLayout>
        )
    }
}


const RadioGroup = Radio.Group;
class RadioExample1 extends React.Component {
    state = {
        value: 1,
    }

    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }

    render() {
        return (
            <RadioGroup onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
            </RadioGroup>
        );
    }
}

class RadioExample2 extends React.Component {
    state = {
        value: 1,
    }

    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }

    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        return (
            <RadioGroup onChange={this.onChange} value={this.state.value}>
                <Radio style={radioStyle} value={1}>Option A</Radio>
                <Radio style={radioStyle} value={2}>Option B</Radio>
                <Radio style={radioStyle} value={3}>Option C</Radio>
                <Radio style={radioStyle} value={4}>
                    More...
                    {this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                </Radio>
            </RadioGroup>
        );
    }
}
class RadioExample3 extends React.Component {
    state = {
        disabled: true,
    }

    toggleDisabled = () => {
        this.setState({
            disabled: !this.state.disabled,
        });
    }

    render() {
        return (
            <div>
                <Radio defaultChecked={false} disabled={this.state.disabled}>Disabled</Radio>
                <br/>
                <Radio defaultChecked disabled={this.state.disabled}>Disabled</Radio>
                <div style={{marginTop: 20}}>
                    <Button type="primary" onClick={this.toggleDisabled}>
                        Toggle disabled
                    </Button>
                </div>
            </div>
        );
    }
}