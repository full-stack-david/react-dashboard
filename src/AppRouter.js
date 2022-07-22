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
 * ::::::::::::::::::::::::::::::::::::[  COMPONENT  ]:::::::::::::::::::::::::::::::::::::
 *
 *  File name: AppRouter.
 *  File type: Javascript.
 *  Component: APP Router Component
 *  Purpose: Main React App Router File.
 *
 ** APP COMPONENT :: AppRouter */

import React, {Component} from "react";
import {HashRouter, Route} from "react-router-dom";
import DefaultDashboardPage from "./Pages/Dashboards/Default";
import AlertPage from "./Pages/UiComponents/Alert";
import AvatarsPage from "./Pages/UiComponents/Avatars";
import BadgesPage from "./Pages/UiComponents/Badges";
import SupportDashboardPage from "./Pages/Dashboards/Support";
import ServerDashboardPage from "./Pages/Dashboards/Server";
import ChartPage from "./Pages/UiComponents/Chart";
import LoginPage from "./Pages/Pages/Login";
import RegisterPage from "./Pages/Pages/Register";
import Error404Page from "./Pages/Pages/Error";
import SearchPage from "./Pages/Pages/Search";
import CardsPage from "./Pages/UiComponents/Cards";
import TimelinePage from "./Pages/UiComponents/Timeline";
import SwitchPage from "./Pages/UiComponents/Switch";
import RadioPage from "./Pages/UiComponents/Radio";
import SelectPage from "./Pages/UiComponents/Select";
import ProgressPage from "./Pages/UiComponents/Progress";
import PopconfirmPage from "./Pages/UiComponents/Popconfirm";
import SpinPage from "./Pages/UiComponents/Spin";
import RatePage from "./Pages/UiComponents/Rate";
import SkeletonPage from "./Pages/UiComponents/Skeleton";
import DrawerPage from "./Pages/UiComponents/Drawer";
import ModalPage from "./Pages/UiComponents/Modal";
import MessagePage from "./Pages/UiComponents/Message";
import NotificationPage from "./Pages/UiComponents/Notification";
import ListPage from "./Pages/UiComponents/List";
import SliderPage from "./Pages/UiComponents/Slider";
import ButtonsPage from "./Pages/UiComponents/Buttons";
import SpeedometerPage from "./Pages/UiComponents/Speedometer";
import FormPage from "./Pages/UiComponents/Form";
import ProfilePage from "./Pages/Pages/Profile";
import SettingsPage from "./Pages/Pages/Settings";
import BlankPage from "./Pages/Pages/Page";
import CollapsePage from "./Pages/UiComponents/Collapse";

export default class AppRouter extends Component {

    render() {
        return (
            <HashRouter>
                <div>
                    {/*** Dashboards ***/}
                    <Route exact path="/" component={DefaultDashboardPage}/>
                    <Route exact path="/dashboard" component={DefaultDashboardPage}/>
                    <Route exact path="/dashboard/default" component={DefaultDashboardPage}/>
                    <Route exact path="/dashboard/server" component={ServerDashboardPage}/>
                    <Route exact path="/dashboard/support" component={SupportDashboardPage}/>

                    {/*** UI Components ***/}
                    <Route exact path="/components/alerts" component={AlertPage}/>
                    <Route exact path="/components/avatar" component={AvatarsPage}/>
                    <Route exact path="/components/badges" component={BadgesPage}/>
                    <Route exact path="/components/buttons" component={ButtonsPage}/>
                    <Route exact path="/components/collapse" component={CollapsePage}/>
                    <Route exact path="/components/charts" component={ChartPage}/>
                    <Route exact path="/components/cards" component={CardsPage}/>
                    <Route exact path="/components/timeline" component={TimelinePage}/>
                    <Route exact path="/components/switch" component={SwitchPage}/>
                    <Route exact path="/components/radio" component={RadioPage}/>
                    <Route exact path="/components/select" component={SelectPage}/>
                    <Route exact path="/components/progress" component={ProgressPage}/>
                    <Route exact path="/components/popconfirm" component={PopconfirmPage}/>
                    <Route exact path="/components/spin" component={SpinPage}/>
                    <Route exact path="/components/rate" component={RatePage}/>
                    <Route exact path="/components/skeleton" component={SkeletonPage}/>
                    <Route exact path="/components/drawer" component={DrawerPage}/>
                    <Route exact path="/components/modal" component={ModalPage}/>
                    <Route exact path="/components/message" component={MessagePage}/>
                    <Route exact path="/components/notification" component={NotificationPage}/>
                    <Route exact path="/components/list" component={ListPage}/>
                    <Route exact path="/components/slider" component={SliderPage}/>
                    <Route exact path="/components/speedometer" component={SpeedometerPage}/>
                    <Route exact path="/components/form" component={FormPage}/>


                    {/*** Pages ***/}
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/register" component={RegisterPage}/>
                    <Route exact path="/404" component={Error404Page}/>
                    <Route exact path="/search" component={SearchPage}/>
                    <Route exact path="/profile" component={ProfilePage}/>
                    <Route exact path="/settings" component={SettingsPage}/>
                    <Route exact path="/page" component={BlankPage}/>

                </div>
            </HashRouter>
        )
    }
}


