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
 *  File name: Slider.
 *  File type: Javascript.
 *  Page Component: SliderPage
 *
 ** PAGE COMPONENT :: SliderPage */

import React, {Component} from "react";
import PageTitle from "../../Components/PageTitle";
import DashboardLayout from "../../Components/DashboardLayout";
import {Col, Icon, InputNumber, Row, Slider, Switch} from "antd";
import Widget from "../../Components/Widget";
export default class SliderPage extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <DashboardLayout>
                {/*** Page Title ***/}
                <PageTitle title={'Slider'}
                           subTitle={'A Slider component for displaying current value and intervals in range.'}/>
                <Row gutter={32}>
                    <Col xs={24} md={12} lg={12}>
                        <Widget title={'Basic'}>
                            <BasicExample/>
                        </Widget>

                        <Widget title={'Slider with icon'}>
                            <IconSliderExample/>
                        </Widget>
                    </Col>
                    <Col xs={24} md={12} lg={12}>
                        <Widget title={'Slider with InputNumber'}>
                            <IntegerStepExample/>
                            <DecimalStepExample/>
                        </Widget>
                        <Widget title={'Event'}>
                            <EventSliderExample/>
                        </Widget>
                    </Col>
                </Row>
            </DashboardLayout>
        )
    }
}


class BasicExample extends React.Component {
    state = {
        disabled: false,
    };

    handleDisabledChange = (disabled) => {
        this.setState({ disabled });
    }

    render() {
        const { disabled } = this.state;
        return (
            <div>
                <Slider defaultValue={30} disabled={disabled} />
                <Slider range defaultValue={[20, 50]} disabled={disabled} />
                Disabled: <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />
            </div>
        );
    }
}


class IntegerStepExample extends React.Component {
    state = {
        inputValue: 1,
    }

    onChange = (value) => {
        this.setState({
            inputValue: value,
        });
    }

    render() {
        const { inputValue } = this.state;
        return (
            <Row>
                <Col span={12}>
                    <Slider
                        min={1}
                        max={20}
                        onChange={this.onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={1}
                        max={20}
                        style={{ marginLeft: 16 }}
                        value={inputValue}
                        onChange={this.onChange}
                    />
                </Col>
            </Row>
        );
    }
}

class DecimalStepExample extends React.Component {
    state = {
        inputValue: 0,
    }

    onChange = (value) => {
        if (isNaN(value)) {
            return;
        }
        this.setState({
            inputValue: value,
        });
    }

    render() {
        const { inputValue } = this.state;
        return (
            <Row>
                <Col span={12}>
                    <Slider
                        min={0}
                        max={1}
                        onChange={this.onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                        step={0.01}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={0}
                        max={1}
                        style={{ marginLeft: 16 }}
                        step={0.01}
                        value={inputValue}
                        onChange={this.onChange}
                    />
                </Col>
            </Row>
        );
    }
}


class IconSliderExample extends React.Component {
    state = {
        value: 0,
    }

    handleChange = (value) => {
        this.setState({ value });
    }

    render() {
        const { max, min } = this.props;
        const { value } = this.state;
        const mid = ((max - min) / 2).toFixed(5);
        const preColor = value >= mid ? '' : 'rgba(0, 0, 0, .45)';
        const nextColor = value >= mid ? 'rgba(0, 0, 0, .45)' : '';
        return (
            <div className="d-flex">
                <Icon style={{ color: preColor }} type="frown-o" />
                <Slider {...this.props} onChange={this.handleChange} value={value} />
                <Icon style={{ color: nextColor }} type="smile-o" />
            </div>
        );
    }
}

class EventSliderExample extends React.Component {

    render() {
        function onChange(value) {
            console.log('onChange: ', value);
        }

        function onAfterChange(value) {
            console.log('onAfterChange: ', value);
        }
        return (
            <div >
                <Slider defaultValue={30} onChange={onChange} onAfterChange={onAfterChange} />
                <Slider range step={10} defaultValue={[20, 50]} onChange={onChange} onAfterChange={onAfterChange} />
            </div>
        );
    }
}

