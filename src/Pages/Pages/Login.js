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
 *  File name: Login.
 *  File type: Javascript.
 *  Page Component: LoginPage
 *
 ** PAGE COMPONENT :: LoginPage */

import React, {Component} from "react";
import style from "./Login.scss";
import Widget from "../../Components/Widget";
import LoginFrom from "../../Components/Auth";


export default class LoginPage extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <div className={style.loginPage}>

                <Widget className={style.loginWidget}>
                   <LoginFrom/>
                </Widget>
            </div>
        )
    }
}