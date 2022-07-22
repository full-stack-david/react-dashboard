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
 *  File name: Drawer.
 *  File type: Javascript.
 *  Page Component: DrawerPage
 *
 ** PAGE COMPONENT :: DrawerPage */

import React, {Component} from "react";
import PageTitle from "../../Components/PageTitle";
import DashboardLayout from "../../Components/DashboardLayout";
import Widget from "../../Components/Widget";
import {Button, Col, Drawer, Form, Radio, Row, Select, Input, DatePicker, List, Avatar,Divider} from "antd";
import {UserContactCardMini} from "../../Components/Cards";

const RadioGroup = Radio.Group;
export default class DrawerPage extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <DashboardLayout>
                {/*** Page Title ***/}
                <PageTitle title={'Drawer'}
                           subTitle={'A Drawer is a panel that is typically overlaid on top of a page and slides in from the side. It contains a set of information or actions. Since that user can interact with the Drawer without leaving the current page, tasks can be achieved more efficient within the same context.'}/>
                <Row gutter={32}>
                    <Col xs={24} md={12} lg={12}>
                        <Widget title={'Basic'}>
                            <Example1/>
                        </Widget>

                        <Widget title={'Edit item in drawer'}>
                            <Example3/>
                        </Widget>

                    </Col>
                    <Col xs={24} md={12} lg={12}>
                        <Widget title={'Custom Placement'}>
                            <Example2/>
                        </Widget>
                        <Widget title={'Preview drawer'}>
                            <Example4/>
                        </Widget>
                    </Col>
                </Row>
            </DashboardLayout>
        )
    }
}

class Example1 extends Component {
    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showDrawer}>
                    Open
                </Button>
                <Drawer
                    title="Basic Drawer"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p>
                        <UserContactCardMini src={require('../../Assets/users/user-1.jpg')} name={'User Name'} info={'@username'}/>
                    </p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p>Some contents...</p>
                </Drawer>
            </div>
        );
    }
}

class Example2 extends React.Component {
    state = { visible: false, placement: 'left' };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    onChange = (e) => {
        this.setState({
            placement: e.target.value,
        });
    }

    render() {
        return (
            <div>
                <RadioGroup
                    style={{ marginRight: 8 }}
                    defaultValue={this.state.placement}
                    onChange={this.onChange}
                >
                    <Radio value="top">top</Radio>
                    <Radio value="right">right</Radio>
                    <Radio value="bottom">bottom</Radio>
                    <Radio value="left">left</Radio>
                </RadioGroup>
                <Button type="primary" onClick={this.showDrawer}>
                    Open
                </Button>
                <Drawer
                    title="Basic Drawer"
                    placement={this.state.placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            </div>
        );
    }
}


class DrawerForm extends React.Component {
    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const { Option } = Select;
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Button type="primary" onClick={this.showDrawer}>
                    Create
                </Button>
                <Drawer
                    title="Create"
                    width={300}
                    placement="right"
                    onClose={this.onClose}
                    maskClosable={false}
                    visible={this.state.visible}
                    style={{
                        height: 'calc(100% - 55px)',
                        overflow: 'auto',
                        paddingBottom: 53,
                    }}
                >
                    <Form layout="vertical" hideRequiredMark>
                        <Row gutter={16}>
                            <Col span={12} xs={24}>
                                <Form.Item label="Name">
                                    {getFieldDecorator('name', {
                                        rules: [{ required: true, message: 'please enter user name' }],
                                    })(<Input placeholder="please enter user name" />)}
                                </Form.Item>
                            </Col>
                            <Col span={12} xs={24}>
                                <Form.Item label="Url">
                                    {getFieldDecorator('url', {
                                        rules: [{ required: true, message: 'please enter url' }],
                                    })(
                                        <Input
                                            style={{ width: '100%' }}
                                            addonBefore="http://"
                                            addonAfter=".com"
                                            placeholder="please enter url"
                                        />
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12} xs={24}>
                                <Form.Item label="Owner">
                                    {getFieldDecorator('owner', {
                                        rules: [{ required: true, message: 'Please select an owner' }],
                                    })(
                                        <Select placeholder="Please select an owner">
                                            <Option value="xiao">Xiaoxiao Fu</Option>
                                            <Option value="mao">Maomao Zhou</Option>
                                        </Select>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12} xs={24}>
                                <Form.Item label="Type">
                                    {getFieldDecorator('type', {
                                        rules: [{ required: true, message: 'Please choose the type' }],
                                    })(
                                        <Select placeholder="Please choose the type">
                                            <Option value="private">Private</Option>
                                            <Option value="public">Public</Option>
                                        </Select>
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}  xs={24}>
                                <Form.Item label="Approver">
                                    {getFieldDecorator('approver', {
                                        rules: [{ required: true, message: 'Please choose the approver' }],
                                    })(
                                        <Select placeholder="Please choose the approver">
                                            <Option value="jack">Jack Ma</Option>
                                            <Option value="tom">Tom Liu</Option>
                                        </Select>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12} xs={24}>
                                <Form.Item label="DateTime">
                                    {getFieldDecorator('dateTime', {
                                        rules: [{ required: true, message: 'Please choose the dateTime' }],
                                    })(
                                        <DatePicker.RangePicker
                                            style={{ width: '100%' }}
                                            getPopupContainer={trigger => trigger.parentNode}
                                        />
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24} xs={24}>
                                <Form.Item label="Description">
                                    {getFieldDecorator('description', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'please enter url description',
                                            },
                                        ],
                                    })(<Input.TextArea rows={4} placeholder="please enter url description" />)}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                    <div
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                            borderTop: '1px solid #e8e8e8',
                            padding: '10px 16px',
                            textAlign: 'right',
                            left: 0,
                            background: '#fff',
                            borderRadius: '0 0 4px 4px',
                        }}
                    >
                        <Button
                            style={{
                                marginRight: 8,
                            }}
                            onClick={this.onClose}
                        >
                            Cancel
                        </Button>
                        <Button onClick={this.onClose} type="primary">Submit</Button>
                    </div>
                </Drawer>
            </div>
        );
    }
}

const Example3 = Form.create()(DrawerForm);


class Example4 extends React.Component {
    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const pStyle = {
            fontSize: 16,
            color: 'rgba(0,0,0,0.85)',
            lineHeight: '24px',
            display: 'block',
            marginBottom: 16,
        };

        const DescriptionItem = ({ title, content }) => (
            <div
                style={{
                    fontSize: 14,
                    lineHeight: '22px',
                    marginBottom: 7,
                    color: 'rgba(0,0,0,0.65)',
                }}
            >
                <p
                    style={{
                        marginRight: 8,
                        display: 'inline-block',
                        color: 'rgba(0,0,0,0.85)',
                    }}
                >
                    {title}:
                </p>
                {content}
            </div>
        );

        return (
            <div>
                <List
                    dataSource={[
                        {
                            name: 'Lily',
                        },
                        {
                            name: 'Lily',
                        },
                    ]}
                    bordered
                    renderItem={item => (
                        <List.Item key={item.id} actions={[<a onClick={this.showDrawer}>View Profile</a>]}>
                            <List.Item.Meta
                                avatar={
                                    <Avatar src={'https://via.placeholder.com/60'}/>
                                }
                                title={<div>{item.name}</div>}
                                description="Progresser AFX"
                            />
                        </List.Item>
                    )}
                />
                <Drawer
                    width={300}
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p style={{ ...pStyle, marginBottom: 24 }}>User Profile</p>
                    <p style={pStyle}>Personal</p>
                    <Avatar size={120} className={'mb-2'}  src={'https://via.placeholder.com/60'} />
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Full Name" content="Lily" />{' '}
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Account" content="user@example.com" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="City" content="City Name" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Country" content="Country Name" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Birthday" content="February 2,1900" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Website" content="-" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <DescriptionItem
                                title="Message"
                                content="Make things as simple as possible but no simpler."
                            />
                        </Col>
                    </Row>
                    <Divider />
                    <p style={pStyle}>Company</p>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Position" content="Programmer" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Responsibilities" content="Coding" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Department" content="AFX" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <DescriptionItem
                                title="Skills"
                                content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
                            />
                        </Col>
                    </Row>
                    <Divider />
                    <p style={pStyle}>Contacts</p>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Email" content="user@example.com" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <DescriptionItem
                                title="Github"
                                content={(
                                    <a href="">
                                        github.com
                                    </a>
                                )}
                            />
                        </Col>
                    </Row>
                </Drawer>
            </div>
        );
    }
}