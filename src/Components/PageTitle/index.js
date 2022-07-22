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
 *  Component: PageTitle
 *
 ** COMPONENT :: PageTitle */

import React, {Component} from "react";
import style from "./style.scss";
import PropTypes from "prop-types";

export default class PageTitle extends Component {


    // COMPONENT Render ................................
    render() {
        return (
            <div className={style.pageTitle}>
                {this.props.title !== null ? (
                    <h1 className={style.title}>
                        {this.props.title}
                    </h1>
                ) : null}
                {this.props.subTitle !== null ? (
                    <h4 className={style.subTitle}>
                        {this.props.subTitle}
                    </h4>
                ) : null}

            </div>
        )
    }
}

PageTitle.propTypes = {
    title: PropTypes.node,
    subTitle: PropTypes.node
}

PageTitle.defaultProps = {
    title: null,
    subTitle: null
}
