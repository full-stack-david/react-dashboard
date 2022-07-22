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
 *  Component: Cards
 *
 ** COMPONENT :: Cards */

import React, {Component} from "react";
import style from "./style.scss";
import {Avatar, Badge} from "antd";

export class InfoCard extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <div className={style.infoCard}>

    <div className={style.cardBody}>
        {this.props.icon !== null ? (
            <div className={style.leftIcon}>
            {this.props.icon}
        </div>
        ) : null}
    <div className={style.content}>
    <div className={style.value}>
        {this.props.value}
    </div>
        <div className={style.title}>
        {this.props.title}
    </div>
        </div>




        {this.props.icon !== null ? (
            <div className={style.bgIcon}>
            {this.props.icon}
        </div>
        ) : null}
    </div>
        </div>
    )
    }
}


export class UserContactCardMini extends Component {

    render() {
        return (
            <div className={style.userContactCardMini}>
                <Avatar size={32} src={this.props.src}/>
                <div className={style.content}>
                    <div className={style.userName}>{this.props.name}</div>
                    <div className={style.userInfo}>{this.props.info}</div>
                </div>
                {this.props.online?( <Badge status="success" />):(<Badge status="processing" />)}
            </div>
        )
    }
}