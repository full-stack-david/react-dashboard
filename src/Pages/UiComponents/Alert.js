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
 *  File name: Alert.
 *  File type: Javascript.
 *  Page Component: AlertPage
 *
 ** PAGE COMPONENT :: AlertPage */

import React, {Component} from "react";
import PageTitle from "../../Components/PageTitle";
import DashboardLayout from "../../Components/DashboardLayout";
import {Alert, Col, Row} from "antd";
import Widget from "../../Components/Widget";

export default class AlertPage extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <DashboardLayout>
                {/*** Page Title ***/}
                <PageTitle title={'Alert'}
                           subTitle={'Alert component for feedback.'}/>

                <Row gutter={32}>
                    <Col lg={24} md={12}>
                        {/*** BASIC ALERT ***/}
                        <Widget title={'Basic Alert'}>
                            <p>Use one of the four required contextual classes</p>
                            <p>
                                <Alert message="Success Text" type="success"/>
                            </p>
                            <p>
                                <Alert message="Info Text" type="info"/>
                            </p>
                            <p>
                                <Alert message="Warning Text" type="warning"/>
                            </p>
                            <Alert message="Error Text" type="error"/>
                        </Widget>
                    </Col>
                    <Col lg={12} md={12}>
                        {/*** ALERT With Description ***/}
                        <Widget title={'Alert With Description'}>
                            <p>Additional description for alert message.</p>
                            <p>
                                <Alert
                                    message="Success Text"
                                    description="Success Description Success Description Success Description"
                                    type="success"
                                />
                            </p>
                            <p>
                                <Alert
                                    message="Info Text"
                                    description="Info Description Info Description Info Description Info Description"
                                    type="info"
                                />
                            </p>
                            <p>
                                <Alert
                                    message="Warning Text"
                                    description="Warning Description Warning Description Warning Description Warning Description"
                                    type="warning"
                                />
                            </p>
                            <Alert
                                message="Error Text"
                                description="Error Description Error Description Error Description Error Description"
                                type="error"
                            />
                        </Widget>
                    </Col>
                    <Col lg={12} md={12}>
                        {/*** ALERT With Icon ***/}
                        <Widget title={'Alert Width Description'}>
                            <p>Decent icon make information more clear and more friendly.</p>
                            <p>
                                <Alert message="Success Tips" type="success" showIcon/>
                            </p>
                            <p>
                                <Alert message="Informational Notes" type="info" showIcon/>
                            </p>
                            <p>
                                <Alert message="Warning" type="warning" showIcon/>
                            </p>
                            <Alert message="Error" type="error" showIcon/>
                        </Widget>
                    </Col>
                </Row>
            </DashboardLayout>
        )
    }
}