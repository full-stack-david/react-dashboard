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
 * ::::::::::::::::::::::::::::::[  COMPONENT  ]::::::::::::::::::::::::::::::::::::
 *
 *  File name: index.
 *  File type: Javascript.
 *  Component: NotificationDropDownMenu
 *
 ** COMPONENT :: NotificationDropDownMenu */

import React, {Component} from "react";
import style from "./style.scss";
import { StrokeIcon} from "../Icon";
import {Badge, Dropdown, Tabs,Menu} from "antd";
import {UserContactCardMini} from "../Cards";

const TabPane = Tabs.TabPane;

export default class NotificationDropDownMenu extends Component {

    menu = () => (
        <Menu className={style.notificationDropDownMenuTabs} width={300}>
            <Tabs defaultActiveKey="1">
                <TabPane tab={'Messages'} key="1">
                    <UserContactCardMini name={'Sozan Mark'} info={'@so_20993'} src={'https://via.placeholder.com/100'}/>
                    <UserContactCardMini name={'name Mark'} info={'@asamn'} src={'https://via.placeholder.com/100'}/>
                    <UserContactCardMini name={'other name Mark'} info={'@james'} src={'https://via.placeholder.com/100'}/>
                    <UserContactCardMini name={'some Mark'} info={'@so_209e93'} src={'https://via.placeholder.com/100'}/>

                </TabPane>
                <TabPane tab="Projects" key="2">
                    <div className={'ml-2 mr-2 mt-2 mb-2'}>
                        No Projects Notifications
                    </div>
                </TabPane>
                <TabPane tab="Teams" key="3">
                    <div className={'ml-2 mr-2 mt-2 mb-2'}>
                        No Teams Notifications
                    </div>
                </TabPane>
            </Tabs>
        </Menu>
    );

    // COMPONENT Render ................................
    render() {
        return (
            <Dropdown placement={'bottomRight'} className={style.notificationDropDownMenu} overlay={this.menu()}
                      trigger={['click']}>
                <Badge count={5}>
                <StrokeIcon icon={'bell'}/>
                </Badge>
            </Dropdown>
        )
    }
}