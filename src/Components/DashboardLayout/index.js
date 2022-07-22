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
 *  File name: index.
 *  File type: Javascript.
 *  Page Component: DashboardLayout
 *
 ** PAGE COMPONENT :: DashboardLayout */

import React, {Component} from "react";
import AppHeader from "../AppHeader";
import AppLeftSideBar from "../AppLeftSideBar";
import AppRightSideBar from "../AppRightSideBar";
import {AppLayout} from "../Layout";

export default class DashboardLayout extends Component {

    state = {
        showLeftSideBar: true,
        showRightSideBar: true
    }
    onClickToggleLeftSideBar = (e) => {
        if (window.innerWidth <= 1024) {
            this.setState({
                showLeftSideBar: !this.state.showLeftSideBar,
                showRightSideBar: false
            })

        }else{
            this.setState({
                showLeftSideBar: !this.state.showLeftSideBar
            })
        }

    }

    onClickToggleRightSideBar = (e) =>{

        if (window.innerWidth <= 1024) {
            this.setState({
                showRightSideBar: !this.state.showRightSideBar,
                showLeftSideBar: false
            })

        }else{
            this.setState({
                showRightSideBar: !this.state.showRightSideBar
            })
        }
    }


    updateDimensions = () => {
        this.setState({width: window.innerWidth, height: window.innerWidth});
        if (window.innerWidth <= 500) {

            this.setState({
                showLeftSideBar: false,
                showRightSideBar: false
            });



        }

    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
        this.updateDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }


    // COMPONENT Render ................................
    render() {
        return (
            <AppLayout header={<AppHeader onClickToggleLeftSideBar={this.onClickToggleLeftSideBar} onClickToggleRightSideBar={this.onClickToggleRightSideBar}/>}
                       showLeftSideBar={this.state.showLeftSideBar}
                       showRightSideBar={this.state.showRightSideBar}
                       leftSideBar={<AppLeftSideBar/>}
                       rightSideBar={<AppRightSideBar/>}>
                {this.props.children}
            </AppLayout>
        )
    }
}