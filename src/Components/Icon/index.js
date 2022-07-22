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
 *  Component: Icon
 *
 ** COMPONENT :: Icon */

import React, {Component} from "react";

export  class FlatIcon extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <i className={['flaticon-' + this.props.icon, 'icon'].join(' ')}/>
        )
    }
}

export  class StrokeIcon extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <i className={['s7-' + this.props.icon, 'icon'].join(' ')}/>
        )
    }
}