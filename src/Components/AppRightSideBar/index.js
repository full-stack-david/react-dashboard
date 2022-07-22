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
 *  Component: AppRightSideBar
 *
 ** COMPONENT :: AppRightSideBar */

import React, {Component} from "react";
import style from "./style.scss";
import {UserContactCardMini} from "../Cards";

export default class AppRightSideBar extends Component {
    state = {
        contacts: [
            {
                userFullName: 'Randee Spotts',
                online: true
            },
            {
                userFullName: 'Zachariah Ohern',
                online: true
            },
            {
                userFullName: 'Margret Willis',
                online: true
            },
            {
                userFullName: 'Christa Ifill',
                online: false
            },
            {
                userFullName: 'Delpha Kite',
                online: true
            },
            {
                userFullName: 'Hsiu Lund',
                online: true
            },
            {
                userFullName: 'Shelby Cue',
                online: false
            },
            {
                userFullName: 'Bret Haag',
                online: false

            },
            {
                userFullName: 'Maribeth Shoaf',
                online: false

            },
            {
                userFullName: 'Anjelica Comeaux',
                online: true
            },
            {
                userFullName: 'Hsiu Lund',
                online: true
            },
            {
                userFullName: 'Shelby Cue',
                online: false
            },
            {
                userFullName: 'Bret Haag',
                online: false

            },
            {
                userFullName: 'Maribeth Shoaf',
                online: false

            },
            {
                userFullName: 'Anjelica Comeaux',
                online: false
            }
        ]
    };

    // COMPONENT Render ................................
    render() {
        return (
            <div className={style.appRightSideBar}>
                {this.state.contacts.map((item, index) => (
                    <UserContactCardMini online={item.online}
                                         src={'https://via.placeholder.com/60'}
                                         key={'contact-' + index} name={item.userFullName}
                                         info={'@' + item.userFullName.toLowerCase().replace(' ', '_')}/>
                ))}
            </div>
        )
    }
}