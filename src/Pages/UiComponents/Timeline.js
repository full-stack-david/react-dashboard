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
 *  File name: Timeline.
 *  File type: Javascript.
 *  Page Component: TimelinePage
 *
 ** PAGE COMPONENT :: TimelinePage */

import React, {Component} from "react";
import PageTitle from "../../Components/PageTitle";
import DashboardLayout from "../../Components/DashboardLayout";
import {Col, Icon, Row, Timeline} from "antd";
import Widget from "../../Components/Widget";

export default class TimelinePage extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <DashboardLayout>
                {/*** Page Title ***/}
                <PageTitle title={'Timeline'}
                           subTitle={'Vertical display timeline.'}/>
                <Row gutter={32}>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Widget title='Basic Timeline'>
                            <TimelineExample4/>
                        </Widget>
                        <Widget title='Last Node Timeline'>
                            <TimelineExample2/>
                        </Widget>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Widget title='Colorfull Timeline'>
                            <TimelineExample3/>
                        </Widget>
                        <Widget title='Iconed Timeline'>
                            <TimelineExample1/>
                        </Widget>
                    </Col>
                </Row>
            </DashboardLayout>
        )
    }
}

export class TimelineExample1 extends Component{
    render(){
        return(
            <Timeline>
                <Timeline.Item>Create a services site 2018-08-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2018-08-01</Timeline.Item>
                <Timeline.Item
                    dot={< Icon type = "clock-circle-o" style = {{ fontSize: '16px' }}/>}
                    color="red">Technical testing 2018-08-01</Timeline.Item>
                <Timeline.Item>Network problems being solved 2018-08-01</Timeline.Item>
            </Timeline>
        )
    }
}

export class TimelineExample2 extends Component{
    render(){
        return(
            <Timeline pending={< a href = "" > See more </a>}>
                <Timeline.Item>Create a services site 2018-08-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2018-08-01</Timeline.Item>
                <Timeline.Item>Technical testing 2018-08-01</Timeline.Item>
            </Timeline>
        )
    }
}
export class TimelineExample3 extends Component{
    render(){
        return(
            <Timeline>
                <Timeline.Item color="green">Create a services site 2018-08-01</Timeline.Item>
                <Timeline.Item color="red">
                    <p>Solve initial network problems 1</p>
                    <p>Solve initial network problems 2</p>
                    <p>Solve initial network problems 3 </p>
                </Timeline.Item>
                <Timeline.Item>
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                </Timeline.Item>
            </Timeline>
        )
    }
}
export class TimelineExample4 extends Component{
    render(){
        return(
            <Timeline>
                <Timeline.Item>Create a services site 2018-08-01</Timeline.Item>
                <Timeline.Item>Technical testing 2018-08-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2018-08-01</Timeline.Item>
                <Timeline.Item>Network problems being solved 2018-08-01</Timeline.Item>
            </Timeline>
        )
    }
}

