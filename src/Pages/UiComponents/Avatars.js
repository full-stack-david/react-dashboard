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
 *  File name: Avatars.
 *  File type: Javascript.
 *  Page Component: AvatarsPage
 *
 ** PAGE COMPONENT :: AvatarsPage */

import React, {Component} from "react";
import PageTitle from "../../Components/PageTitle";
import DashboardLayout from "../../Components/DashboardLayout";
import {Avatar, Badge, Col, Button, Row} from "antd";
import Widget from "../../Components/Widget";

export default class AvatarsPage extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <DashboardLayout>
                {/*** Page Title ***/}
                <PageTitle title={'Avatars'}
                           subTitle={'Avatars can be used to represent people or objects. It supports images, Icons, or letters.'}/>


                <Row gutter={32}>
                    <Col lxs={24} md={12} lg={12}>
                        <Widget title={'Basic Avatar'}>
                            <div className={'mb-1'}>
                                <Avatar size={64} style={{marginRight: 8}} src={'https://via.placeholder.com/90'}/>
                                <Avatar size="large" style={{marginRight: 8}}
                                        src={'https://via.placeholder.com/90'}/>
                                <Avatar icon="user" style={{marginRight: 8}}
                                        src={'https://via.placeholder.com/90'}/>
                                <Avatar size="small" style={{marginRight: 8}}
                                        src={'https://via.placeholder.com/90'}/>
                            </div>
                            <div>
                                <Avatar shape="square" size={64} style={{marginRight: 8}}
                                        src={'https://via.placeholder.com/90'}/>
                                <Avatar shape="square" size="large" style={{marginRight: 8}}
                                        src={'https://via.placeholder.com/90'}/>
                                <Avatar shape="square" icon="user" style={{marginRight: 8}}
                                        src={'https://via.placeholder.com/90'}/>
                                <Avatar shape="square" size="small" style={{marginRight: 8}}
                                        src={'https://via.placeholder.com/90'}/>

                            </div>
                        </Widget>
                        <Widget title={'Type Avatar'}>
                            <Avatar icon="user"/>
                            <Avatar className={'ml-1'}>U</Avatar>
                            <Avatar className={'ml-1'}>USER</Avatar>
                            <Avatar className={'ml-1'} src={'https://via.placeholder.com/90'}/>
                            <Avatar className={'ml-1'} style={{color: '#f56a00', backgroundColor: '#fde3cf'}}>U</Avatar>
                            <Avatar className={'ml-1'} style={{backgroundColor: '#87d068'}} icon="user"/>
                        </Widget>
                    </Col>
                    <Col lxs={24} md={12} lg={12}>
                        <Widget title={'Autoset Font Size'}>
                            <Autoset/>
                        </Widget>
                        <Widget title={'Avatar With Badge'}>
                             <span style={{marginRight: 24}}>
                                <Badge count={1}><Avatar shape="square"
                                                         src={'https://via.placeholder.com/90'}/></Badge>
                             </span>
                            <span>
                                <Badge dot><Avatar shape="square" src={'https://via.placeholder.com/90'}/></Badge>
                            </span>
                        </Widget>
                    </Col>
                </Row>
            </DashboardLayout>
        )
    }
}

const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

class Autoset extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: UserList[0],
            color: colorList[0],
        };
    }

    changeUser = () => {
        const index = UserList.indexOf(this.state.user);
        this.setState({
            user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0],
            color: index < colorList.length - 1 ? colorList[index + 1] : colorList[0],
        });
    }

    render() {
        return (
            <div>
                <Avatar style={{backgroundColor: this.state.color, verticalAlign: 'middle'}} size="large">
                    {this.state.user}
                </Avatar>
                <Button size="small" style={{marginLeft: 16, verticalAlign: 'middle'}} onClick={this.changeUser}>
                    Change
                </Button>
            </div>
        );
    }
}