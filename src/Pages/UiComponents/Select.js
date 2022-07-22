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
 *  File name: Select.
 *  File type: Javascript.
 *  Page Component: SelectPage
 *
 ** PAGE COMPONENT :: SelectPage */

import React, {Component} from "react";
import PageTitle from "../../Components/PageTitle";
import DashboardLayout from "../../Components/DashboardLayout";
import {Col, Row, Select, Radio} from "antd";
import Widget from "../../Components/Widget";

const Option = Select.Option;

export default class SelectPage extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <DashboardLayout>
                {/*** Page Title ***/}
                <PageTitle title={'Select'}
                           subTitle={'Select component to select value from options.'}/>
                <Row gutter={32}>
                    <Col lxs={24} md={12} lg={12}>
                        <Widget title={'Basic Usage'}>
                            <SelectExample1/>
                        </Widget>
                        <Widget title={'Multiple Selection'}>
                            <SelectExample3/>
                        </Widget>
                    </Col>
                    <Col lxs={24} md={12} lg={12}>
                        <Widget title={'Select With Search Field'}>
                            <SelectExample2/>
                        </Widget>
                        <Widget title={'Sizes'}>
                            <SelectExample4/>
                        </Widget>
                    </Col>
                </Row>
            </DashboardLayout>
        )
    }
}


class SelectExample1 extends React.Component {
    handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    render() {
        return (
            <div>
                <Select className={'mr-1'} defaultValue="lucy" style={{width: 120}} onChange={this.handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <Select defaultValue="lucy" style={{width: 120}} disabled>
                    <Option value="lucy">Lucy</Option>
                </Select>
            </div>
        )
    }
}

class SelectExample2 extends React.Component {
    handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    handleBlur = () => {
        console.log('blur');
    }

    handleFocus = () => {
        console.log('focus');
    }

    render() {
        return (
            <Select
                showSearch
                style={{width: 200}}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
            </Select>
        )
    }
}

class SelectExample3 extends React.Component {
    handleChange = (value) => {
        console.log(`selected ${value}`);
    }


    render() {
        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }
        return (
            <Select
                mode="multiple"
                style={{width: '100%'}}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
                onChange={this.handleChange}
            >
                {children}
            </Select>
        )
    }
}

class SelectExample4 extends React.Component {
    state = {
        size: 'default',
    };
    handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    handleSizeChange = (e) => {
        this.setState({size: e.target.value});
    }


    render() {
        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }
        const {size} = this.state;
        return (
            <div>
                <Radio.Group value={size} onChange={this.handleSizeChange}>
                    <Radio.Button value="large">Large</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
                <br/><br/>
                <Select
                    className={'mb-1'}
                    size={size}
                    defaultValue="a1"
                    onChange={this.handleChange}
                    style={{width: 200}}
                >
                    {children}
                </Select>
                <br/>
                <Select
                    mode="multiple"
                    className={'mb-1'}
                    size={size}
                    placeholder="Please select"
                    defaultValue={['a10', 'c12']}
                    onChange={this.handleChange}
                    style={{width: '100%'}}
                >
                    {children}
                </Select>
                <br/>
                <Select
                    mode="tags"
                    size={size}

                    placeholder="Please select"
                    defaultValue={['a10', 'c12']}
                    onChange={this.handleChange}
                    style={{width: '100%'}}
                >
                    {children}
                </Select>
            </div>
        )
    }
}
