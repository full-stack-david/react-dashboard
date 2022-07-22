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
 *  File name: Badges.
 *  File type: Javascript.
 *  Page Component: BadgesPage
 *
 ** PAGE COMPONENT :: BadgesPage */

import React, {Component} from "react";
import PageTitle from "../../Components/PageTitle";
import DashboardLayout from "../../Components/DashboardLayout";
import {Avatar, Badge, Col, Row, Icon} from "antd";
import Widget from "../../Components/Widget";

export default class BadgesPage extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <DashboardLayout>
                {/*** Page Title ***/}
                <PageTitle title={'Badges'}
                           subTitle={'BadgeSmall numerical value or status descriptor for UI elements.'}/>


                <Row gutter={32}>
                    <Col lg={12} md={12}>
                        {/*** BASIC Badges ***/}
                        <Widget title={'Basic Badges'}>
                            <p>
                                Simplest Usage. Badge will be hidden when count is 0, but we can use showZero to show
                                it.
                            </p>
                            <Badge count={5} className={'mr-1'}>
                                <Avatar src={'https://via.placeholder.com/60'}/>
                            </Badge>
                            <Badge count={0} showZero>
                                <Avatar src={'https://via.placeholder.com/60'}/>
                            </Badge>
                        </Widget>
                    </Col>
                    <Col lg={12} md={12}>
                        {/*** Standalone ***/}
                        <Widget title={'Standalone Badges'}>
                            <p>Used in standalone when children is empty.</p>
                            <Badge className={'mr-1'} count={25} />
                            <Badge className={'mr-1'} count={4} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} />
                            <Badge className={'mr-1'} count={109} style={{ backgroundColor: '#52c41a' }} />
                        </Widget>
                    </Col>

                </Row>
                <Row gutter={32}>
                    <Col lg={12} md={12}>
                        {/*** Red badge  ***/}
                        <Widget title={'Red  Badges'}>
                            <p>This will simply display a red badge, without a specific count. If count equals 0, it won't display the dot.</p>
                            <Badge className={'mr-1'} dot>
                                <Icon type="notification" />
                            </Badge>
                            <Badge className={'mr-1'} count={0} dot>
                                <Icon type="notification" />
                            </Badge>
                            <Badge dot>
                                <a href="">Link something</a>
                            </Badge>
                        </Widget>
                    </Col>
                    <Col lg={12} md={12}>
                        {/*** Clickable ***/}
                        <Widget title={'Clickable Badges'}>
                            <p>The badge can be wrapped with a tag to make it linkable.</p>
                            <a href="">
                                <Badge count={5}>
                                    <span className="head-example" />
                                </Badge>
                            </a>
                        </Widget>
                    </Col>
                </Row>
                <Row gutter={32}>
                    <Col lg={12} md={12}>
                        {/*** Status   ***/}
                        <Widget title={'Status Badges'}>
                            <p>Standalone badge with status.</p>
                            <Badge status="success" />
                            <Badge status="error" />
                            <Badge status="default" />
                            <Badge status="processing" />
                            <Badge status="warning" />
                            <br />
                            <Badge status="success" text="Success" />
                            <br />
                            <Badge status="error" text="Error" />
                            <br />
                            <Badge status="default" text="Default" />
                            <br />
                            <Badge status="processing" text="Processing" />
                            <br />
                            <Badge status="warning" text="Warning" />
                        </Widget>
                    </Col>

                </Row>
            </DashboardLayout>
        )
    }
}