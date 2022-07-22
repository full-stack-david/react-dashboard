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
 *  File name: Server.
 *  File type: Javascript.
 *  Page Component: ServerDashboardPage
 *
 ** PAGE COMPONENT :: ServerDashboardPage */

import React, {Component} from "react";
import PageTitle from "../../Components/PageTitle";
import DashboardLayout from "../../Components/DashboardLayout";
import {Col, Row} from "antd";
import {InfoCard} from "../../Components/Cards";
import {FlatIcon, StrokeIcon} from "../../Components/Icon";
import Widget from "../../Components/Widget";
import RandomizedDataLineChart from "../../Components/Charts/randomizedLine";
import {SpeedometerExample1, SpeedometerExample2} from "../UiComponents/Speedometer";
import {TimelineExample3} from "../UiComponents/Timeline";

export default class ServerDashboardPage extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <DashboardLayout>
                {/*** Page Title ***/}
                <PageTitle title={'Cloud Server Dashboard'}
                           subTitle={'Cloud Server Dashboard.'}/>

                <Row gutter={32}>
                    <Col lg={8} md={24}>
                        <InfoCard icon={<FlatIcon icon={'computer'}/>}
                                  title={'Running Instance'}
                                  value={3}/>
                    </Col>
                    <Col lg={8} md={24}>
                        <InfoCard icon={<StrokeIcon icon={'server'}/>}
                                  title={'Dynamic Database DDRMS'}
                                  value={12}/>
                    </Col>
                    <Col lg={8} md={24}>
                        <InfoCard icon={<StrokeIcon icon={'timer'}/>}
                                  title={'Traffics'}
                                  value={15920}/>
                    </Col>
                </Row>
                <Row gutter={32}>
                    <Col lg={8} md={24}>
                        <InfoCard title={'Instance Storage 0532440a7416415'}
                                  icon={<img src={require('../../Assets/icons/server-drive.png')}
                                             width={90} alt=""/>} value={<div>298
                            <small>GB</small>
                        </div>}/>

                    </Col>
                    <Col lg={8} md={24}>
                        <InfoCard title={'Instance Storage 0532440a7413564'}
                                  icon={<img src={require('../../Assets/icons/server-drive.png')}
                                             width={90} alt=""/>} value={<div>398
                            <small>GB</small>
                        </div>}/>

                    </Col>
                    <Col lg={8} md={24}>
                        <InfoCard title={'Instance Storage 0533244047456415'}
                                  icon={<img src={require('../../Assets/icons/server-drive.png')}
                                             width={90} alt=""/>} value={<div>698
                            <small>GB</small>
                        </div>}/>

                    </Col>
                </Row>
                <Row gutter={32}>
                    <Col lg={12} md={24}>
                        <Widget title={'Server Speed Performance'}>
                            <SpeedometerExample1/>
                        </Widget>

                    </Col>
                    <Col lg={12} md={24}>
                        <Widget title={'Traffics'}>
                            <SpeedometerExample2/>
                        </Widget>

                    </Col>

                </Row>
                <Row gutter={32}>
                    <Col lg={12} md={24}>
                        <Widget title={'Server Traffics History'}>
                            <RandomizedDataLineChart/>
                        </Widget>
                    </Col>

                    <Col lg={12} md={24}>
                        <Widget title={'Server History'}>
                            <TimelineExample3/>
                        </Widget>
                    </Col>
                </Row>

            </DashboardLayout>
        )
    }
}