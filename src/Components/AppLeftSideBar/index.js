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
 *  Component: AppLeftSideBar
 *
 ** COMPONENT :: AppLeftSideBar */

import React, {Component} from "react";
import style from "./style.scss";
import SideBarMenu from "../SideBarMenu";
import {StrokeIcon} from "../Icon";

export default class AppLeftSideBar extends Component {

    state = {
        menuItems: [
            {
                title: 'dashboards',
                isSection: true,
                menuItems: [
                    {
                        title: 'default',
                        icon: <StrokeIcon icon={'ribbon'}/>,
                        link: '/'
                    },
                    {
                        title: 'Cloud Server',
                        icon: <StrokeIcon icon={'cloud'}/>,
                        link: 'dashboard/server'
                    },
                    {
                        title: 'Support',
                        icon: <StrokeIcon icon={'headphones'}/>,
                        link: 'dashboard/support'
                    }
                ]
            },

            {
                title: 'UI Components',
                isSection: true,
                menuItems: [
                    {
                        title: 'Alerts',
                        icon: <StrokeIcon icon={'alarm'}/>,
                        link: '/components/alerts'
                    },
                    {
                        title: 'Avatar',
                        icon: <StrokeIcon icon={'user'}/>,
                        link: '/components/avatar'
                    },
                    {
                        title: 'Badges',
                        icon: <StrokeIcon icon={'flag'}/>,
                        link: '/components/badges'
                    },
                    {
                        title: 'Buttons',
                        icon: <StrokeIcon icon={'mouse'}/>,
                        link: '/components/buttons'
                    },
                    {
                        title: 'Collapse',
                        icon: <StrokeIcon icon={'browser'}/>,
                        link: '/components/collapse'
                    },
                    {
                        title: 'Cards',
                        icon: <StrokeIcon icon={'photo'}/>,
                        link: '/components/cards'
                    },
                    {
                        title: 'Charts',
                        icon: <StrokeIcon icon={'graph'}/>,
                        link: '/components/charts'
                    },
                    {
                        title: 'Timeline',
                        icon: <StrokeIcon icon={'news-paper'}/>,
                        link: '/components/timeline'
                    }, {
                        title: 'Switch',
                        icon: <StrokeIcon icon={'switch'}/>,
                        link: '/components/switch'
                    }, {
                        title: 'Radio',
                        icon: <StrokeIcon icon={'radio'}/>,
                        link: '/components/radio'
                    }, {
                        title: 'Select',
                        icon: <StrokeIcon icon={'check'}/>,
                        link: '/components/select'
                    }, {
                        title: 'Progress',
                        icon: <StrokeIcon icon={'battery'}/>,
                        link: '/components/progress'
                    }, {
                        title: 'Popconfirm',
                        icon: <StrokeIcon icon={'photo-gallery'}/>,
                        link: '/components/popconfirm'
                    }, {
                        title: 'Spin',
                        icon: <StrokeIcon icon={'refresh-2'}/>,
                        link: '/components/spin'
                    }, {
                        title: 'Speed',
                        icon: <StrokeIcon icon={'timer'}/>,
                        link: '/components/speedometer',
                    }, {
                        title: 'Rate',
                        icon: <StrokeIcon icon={'star'}/>,
                        link: '/components/rate'
                    }, {
                        title: 'Skeleton',
                        icon: <StrokeIcon icon={'hourglass'}/>,
                        link: '/components/skeleton'
                    }, {
                        title: 'Drawer',
                        icon: <StrokeIcon icon={'next-2'}/>,
                        link: '/components/drawer'
                    }, {
                        title: 'Modal',
                        icon: <StrokeIcon icon={'albums'}/>,
                        link: '/components/modal'
                    }, {
                        title: 'Message',
                        icon: <StrokeIcon icon={'comment'}/>,
                        link: '/components/message'
                    }, {
                        title: 'Form',
                        icon: <StrokeIcon icon={'note'}/>,
                        link: '/components/form'
                    },
                    {
                        title: 'Notification',
                        icon: <StrokeIcon icon={'bell'}/>,
                        link: '/components/notification'
                    }, {
                        title: 'List',
                        icon: <StrokeIcon icon={'menu'}/>,
                        link: '/components/list'
                    }, {
                        title: 'Slider',
                        icon: <StrokeIcon icon={'edit'}/>,
                        link: '/components/slider'
                    }
                ]
            },
            {
                title: 'pages',
                isSection: true,
                menuItems: [
                    {
                        title: 'Settings',
                        icon: <StrokeIcon icon={'config'}/>,
                        link: '/settings'
                    },
                    {
                        title: 'Profile',
                        icon: <StrokeIcon icon={'user'}/>,
                        link: '/profile'
                    },
                    {
                        title: 'Login',
                        icon: <StrokeIcon icon={'lock'}/>,
                        link: '/login'
                    },
                    {
                        title: 'Register',
                        icon: <StrokeIcon icon={'id'}/>,
                        link: '/register'
                    },
                    {
                        title: 'Error 404',
                        icon: <StrokeIcon icon={'attention'}/>,
                        link: '/404'
                    },
                    {
                        title: 'Blank Page',
                        icon: <StrokeIcon icon={'file'}/>,
                        link: '/page'
                    },

                ]
            }

        ]
    }

    // COMPONENT Render ................................
    render() {
        return (
            <div className={style.appLeftSideBar}>
                <SideBarMenu menuItems={this.state.menuItems}/>
            </div>
        )
    }
}