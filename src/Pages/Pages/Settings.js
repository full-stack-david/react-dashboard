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
 *  File name: Settings.
 *  File type: Javascript.
 *  Page Component: SettingsPage
 *
 ** PAGE COMPONENT :: SettingsPage */

import React, {Component} from "react";
import PageTitle from "../../Components/PageTitle";
import DashboardLayout from "../../Components/DashboardLayout";
import {List, Switch} from "antd";
import Widget from "../../Components/Widget";

export default class SettingsPage extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <DashboardLayout>
                {/*** Page Title ***/}
                <PageTitle title={'Settings'}
                           subTitle={''}/>

                <Widget title={'Email Settings'}>
                    <EmailSettings/>
                </Widget>

            </DashboardLayout>
        )
    }
}

export class EmailSettings extends Component{

    render(){
        var data = [
            {
                title: 'Rating reminders',
                description: 'Send an email reminding me to rate an item',
                checked: false,
            },
            {
                title: 'Item comment notifications',
                description: 'Send an email when some one add comment',
                checked: true,
            },
            {
                title: 'Team comment notifications',
                description: 'send an email when team comment',
                checked: true,
            },
            {
                title: 'Item review notifications',
                description: 'send and email when i get review',
                checked: false,
            },
            {
                title: 'Buyer review notifications',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                checked: false,
            },
            {
                title: 'Expiring support notifications',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                checked: false,
            },
            {
                title: 'Daily summary emails',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                checked: true,
            },
        ];
        return(
            <div>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item actions={[
                            <Switch/>
                        ]}>
                            <List.Item.Meta
                                title={<a href="https://ant.design">{item.title}</a>}
                                description={item.description}
                            />
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}