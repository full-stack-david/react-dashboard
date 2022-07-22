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
 *  Component: AppHeader
 *
 ** COMPONENT :: AppHeader */

import React, {Component} from "react";
import style from "./style.scss";
import {Input} from "antd";
import CurrentUserDropDownMenu from "../CurrentUserDropDownMenu";
import VisionMode from "../VisionMode";
import {AppLayoutSideBarMenuIcon} from "../Layout";
import {StrokeIcon} from "../Icon";
import NotificationDropDownMenu from "../Notification";

export default class AppHeader extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <div className={style.appHeader}>
                <div className={style.section}>
                    <img className={style.brandLogo} src={require('../../Assets/logo.svg')} alt={'brand logo'}
                         height={40}/>
                    <img className={style.brandLogoNightMode} src={require('../../Assets/logo-night-mode.svg')}
                         alt={'brand logo'}
                         height={40}/>


                </div>
                <div className={style.section}>
                    <AppLayoutSideBarMenuIcon onClick={() => {
                        this.props.onClickToggleLeftSideBar();
                    }}/>

                    <Input.Search className={style.searchInput} placeholder={'Search'}/>
                </div>
                <div className={style.section}>
                    <VisionMode/>
                    <NotificationDropDownMenu/>
                    <div className={style.iconInSection} onClick={() => {
                        this.props.onClickToggleRightSideBar();
                    }}>
                        <StrokeIcon icon={'chat'}/>
                    </div>

                    <CurrentUserDropDownMenu/>
                </div>
            </div>
        )
    }
}