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
 *  File name: Speedometer.
 *  File type: Javascript.
 *  Page Component: SpeedometerPage
 *
 ** PAGE COMPONENT :: SpeedometerPage */

import React, {Component} from "react";
import PageTitle from "../../Components/PageTitle";
import DashboardLayout from "../../Components/DashboardLayout";
import ReactSpeedometer from "react-d3-speedometer";
import {Col, Row} from "antd";
import Widget from "../../Components/Widget";

export default class SpeedometerPage extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <DashboardLayout>
                {/*** Page Title ***/}
                <PageTitle title={'Speedometer'}
                           subTitle={'Component for showing speedometer like gauge using d3'}/>

                <Row gutter={32}>
                    <Col lg={12} md={24}>
                       <Widget>
                           <SpeedometerExample1/>
                       </Widget>
                        <Widget>
                            <SpeedometerExample3/>
                        </Widget>
                    </Col>
                    <Col lg={12} md={24}>
                        <Widget>
                            <SpeedometerExample2/>
                        </Widget>
                    </Col>
                </Row>
            </DashboardLayout>
        )
    }
}

export class SpeedometerExample1 extends Component {

    render() {
        return (
            <div className={'d-center'}>
                <ReactSpeedometer value={800} height={175}/>
            </div>
        )
    }
}

export class SpeedometerExample2 extends Component {

    render() {
        return (
            <div className={'d-center'}>
                <ReactSpeedometer value={102419} height={175} maxValue={300000} ringWidth={true}/>
            </div>
        )
    }
}

export class SpeedometerExample3 extends Component {

    render() {
        return (
            <div className={'d-center'}>
                <ReactSpeedometer value={900} height={175} ringWidth={false}/>
            </div>
        )
    }
}
