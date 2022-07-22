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
 *  File name: Support.
 *  File type: Javascript.
 *  Page Component: SupportDashboardPage
 *
 ** PAGE COMPONENT :: SupportDashboardPage */

import React, {Component} from "react";
import PageTitle from "../../Components/PageTitle";
import DashboardLayout from "../../Components/DashboardLayout";
import {Avatar, Col, Rate, Row} from "antd";
import {InfoCard} from "../../Components/Cards";
import {FlatIcon, StrokeIcon} from "../../Components/Icon";
import Widget from "../../Components/Widget";
import RadarChart from "../../Components/Charts/radar";
import PolarChart from "../../Components/Charts/polar";

export default class SupportDashboardPage extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <DashboardLayout>
                {/*** Page Title ***/}
                <PageTitle title={'Support Dashboard'}
                           subTitle={'Customer Support Team Dashboard.'}/>

                <Row gutter={32}>
                    <Col lg={8} md={24}>
                        <InfoCard icon={<FlatIcon icon={'telemarketer'}/>}
                                  title={'Open Tickets'}
                                  value={82}/>
                    </Col>
                    <Col lg={8} md={24}>
                        <InfoCard icon={<StrokeIcon icon={'help2'}/>}
                                  title={'Closed Tickets'}
                                  value={2398}/>
                    </Col>
                    <Col lg={8} md={24}>
                        <InfoCard icon={<StrokeIcon icon={'alarm'}/>}
                                  title={'Pending Tickets '}
                                  value={15920}/>
                    </Col>
                </Row>

                <Row gutter={32}>
                    <Col lg={12} md={24}>
                        <Widget title={'Support Cases'}>
                            <RadarChart/>
                        </Widget>
                    </Col>
                    <Col lg={12} md={24}>
                        <Widget title={'Customers Reviews'}>
                            <PolarChart/>
                        </Widget>
                    </Col>

                </Row>

                <Row gutter={32}>
                    <Col lg={8} md={24}>
                        <InfoCard title={'5 Stars For Quality'} icon={<Avatar size={90} src={'https://via.placeholder.com/120'}/>} value={<Rate disabled defaultValue={5} allowHalf/>}/>
                    </Col>
                    <Col lg={8} md={24}>
                        <InfoCard title={'3.5 Stars For Support'} icon={<Avatar size={90} src={'https://via.placeholder.com/120'}/>} value={<Rate disabled defaultValue={4.5} allowHalf/>}/>

                    </Col>
                    <Col lg={8} md={24}>
                        <InfoCard title={'4 Stars For Other'} icon={<Avatar size={90} src={'https://via.placeholder.com/120'}/>} value={<Rate disabled defaultValue={4} allowHalf/>}/>

                    </Col>
                </Row>
            </DashboardLayout>
        )
    }
}