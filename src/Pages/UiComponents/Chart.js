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
 *  File name: Chart.
 *  File type: Javascript.
 *  Page Component: ChartPage
 *
 ** PAGE COMPONENT :: ChartPage */

import React, {Component} from "react";
import PageTitle from "../../Components/PageTitle";
import DashboardLayout from "../../Components/DashboardLayout";
import {Col, Row} from "antd";
import Widget from "../../Components/Widget";
import ChartDoughnut from "../../Components/Charts/doughnut";
import {ChartBubble} from "../../Components/Charts/bubble";
import {ChartCrazyLine} from "../../Components/Charts/crazyLine";
import {ChartDynamicDoughnut} from "../../Components/Charts/dynamic-doughnut";
import ChartHorizontalBar from "../../Components/Charts/horizontalBar";
import {ChartLine} from "../../Components/Charts/line";
import PieChart from "../../Components/Charts/pie";
import PolarChart from "../../Components/Charts/polar";
import RadarChart from "../../Components/Charts/radar";
import RandomizedDataLineChart from "../../Components/Charts/randomizedLine";
import ScatterChart from "../../Components/Charts/scatter";

export default class ChartPage extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <DashboardLayout>
                {/*** Page Title ***/}
                <PageTitle title={'Chart'}
                           subTitle={'Chart Components'}/>

                <Row gutter={32}>
                    <Col lg={12} md={24}>
                        <Widget title={'Doughnut Chart'}>
                            <ChartDoughnut/>
                        </Widget>
                        <Widget title={'Polar Chart'}>
                            <PolarChart/>
                        </Widget>
                        <Widget title={'Chart Horizontal Bar'}>
                            <ChartHorizontalBar/>
                        </Widget>
                        <Widget title={'Chart Line'}>
                            <ChartLine/>
                        </Widget>
                        <Widget title={'Randomized Data Line Chart'}>
                            <RandomizedDataLineChart/>
                        </Widget>
                    </Col>
                    <Col lg={12} md={24}>
                        <Widget title={'Chart Bubble'}>
                            <ChartBubble/>
                        </Widget>
                        <Widget title={'Chart Crazy Line'}>
                            <ChartCrazyLine/>
                        </Widget>
                        <Widget title={'Pie Chart'}>
                            <PieChart/>
                        </Widget>

                        <Widget title={'Chart Dynamic Doughnut'}>
                            <ChartDynamicDoughnut/>
                        </Widget>
                        <Widget title={'Radar Chart'}>
                            <RadarChart/>
                        </Widget>
                        <Widget title={'Scatter Chart'}>
                            <ScatterChart/>
                        </Widget>

                    </Col>
                </Row>
            </DashboardLayout>
        )
    }
}