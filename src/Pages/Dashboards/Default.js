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
 *  File name: Default.
 *  File type: Javascript.
 *  Page Component: DefaultDashboardPage
 *
 ** PAGE COMPONENT :: DefaultDashboardPage */

import React, {Component} from "react";
import DashboardLayout from "../../Components/DashboardLayout";
import PageTitle from "../../Components/PageTitle";
import {Avatar, Col, Row} from "antd";
import {InfoCard} from "../../Components/Cards";
import {FlatIcon, StrokeIcon} from "../../Components/Icon";
import Widget from "../../Components/Widget";
import ChartDoughnut from "../../Components/Charts/doughnut";
import {ChartLine} from "../../Components/Charts/line";
import {ListExample1, ListExample2} from "../UiComponents/List";


export default class DefaultDashboardPage extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <DashboardLayout>
                {/*** Page Title ***/}
                <PageTitle title={'Default Dashboard'}
                           subTitle={'Welcome MAGEMAX React Admin Dashboard.'}/>

                <Row gutter={32}>
                    <Col lg={8} md={24}>
                        <InfoCard icon={<StrokeIcon icon={'target'}/>}
                                  title={'Monthly Earnings'}
                                  value={29381}/>
                    </Col>
                    <Col lg={8} md={24}>
                        <InfoCard icon={<FlatIcon icon={'users'}/>}
                                  title={'Total Users Registered'}
                                  value={2398}/>
                    </Col>
                    <Col lg={8} md={24}>
                        <InfoCard icon={<FlatIcon icon={'euro-symbol'}/>}
                                  title={'Total Sales'}
                                  value={15920}/>
                    </Col>
                </Row>

                <Row gutter={32}>
                    <Col lg={12} md={24}>
                        <Widget title={'Storage Manager'}>
                            <ChartDoughnut/>
                        </Widget>
                    </Col>
                    <Col lg={12} md={24}>
                        <Widget title={'Site Traffic'}>
                            <ChartLine/>
                        </Widget>
                    </Col>

                </Row>

                <Row gutter={32}>
                    <Col lg={12}>
                        <Widget title={'Recent Activity Feed'}>
                        <ListExample1/>
                        </Widget>
                    </Col>
                    <Col lg={12}>
                        <InfoCard title={'Followers'} icon={<Avatar size={90} src={'https://via.placeholder.com/100'}/>} value={29234}/>
                        <InfoCard title={'Followers'} icon={<Avatar size={90} src={'https://via.placeholder.com/100'}/>} value={49581}/>
                        <InfoCard title={'Followers'} icon={<Avatar size={90} src={'https://via.placeholder.com/100'}/>} value={25581}/>
                        <InfoCard title={'Followers'} icon={<Avatar size={90} src={'https://via.placeholder.com/100'}/>} value={98273}/>
                    </Col>

                </Row>

                <Row gutter={32}>
                    <Col lg={24}>
                        <Widget title={'Recent News Feed'}>
                            <ListExample2/>
                        </Widget>
                    </Col>
                </Row>
            </DashboardLayout>
        )
    }
}