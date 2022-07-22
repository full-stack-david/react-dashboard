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
 *  Component: Widget
 *
 ** COMPONENT :: Widget */

import React, {Component} from "react";
import style from "./style.scss";
import {FlatIcon} from "../Icon";

export default class Widget extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <div className={[style.widget, this.props.className].join(' ')}>
                <div className={style.box}>
                    {this.props.title !== null ? (<div className={style.title}>
                        {this.props.icon !== null ? <FlatIcon icon={this.props.icon}/> : null}
                        {this.props.title}</div>) : null}
                    <div className={style.body}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}