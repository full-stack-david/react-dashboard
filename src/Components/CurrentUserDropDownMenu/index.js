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
 *  Component: CurrentUserDropDownMenu
 *
 ** COMPONENT :: CurrentUserDropDownMenu */

import React, {Component} from "react";
import style from "./style.scss";
import {Avatar, Dropdown, Menu} from "antd";
import {FlatIcon} from "../Icon";

export default class CurrentUserDropDownMenu extends Component {

    menu = () => (
        <Menu className={style.currentUserDropDownMenu} width={300}>
            <Menu.Item key="0">
                <div className={style.userInfo}>
                    <Avatar size={80} src={require('../../Assets/users/user-6.jpg')} alt=""/>
                    <div className={style.content}>
                        <div className={style.name}>James Petter</div>
                        <div className={style.username}>demouser@demo.com</div>
                    </div>
                </div>
            </Menu.Item>
            <Menu.Item key="1">
                <FlatIcon icon={'user'}/> Account
            </Menu.Item>
            <Menu.Item key="2">
                <FlatIcon icon={'settings'}/> Settings
            </Menu.Item>
            <Menu.Item key="3">
                <FlatIcon icon={'exit'}/> Logout
            </Menu.Item>
        </Menu>
    );

    // COMPONENT Render ................................
    render() {
        return (
            <Dropdown placement={'bottomRight'} className={style.currentUserDropDownMenu} overlay={this.menu()}
                      trigger={['click']}>
                <a className="ant-dropdown-link" href="">
                    <Avatar src={'https://via.placeholder.com/50'} alt=""/>
                    <span className={style.dropDownUserFullName}>James Petter</span>
                </a>
            </Dropdown>
        )
    }
}