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
 *  File name: Spin.
 *  File type: Javascript.
 *  Page Component: SpinPage
 *
 ** PAGE COMPONENT :: SpinPage */

import React, {Component} from "react";
import PageTitle from "../../Components/PageTitle";
import DashboardLayout from "../../Components/DashboardLayout";
import {Alert, Col, Icon, Row, Spin, Switch} from "antd";
import Widget from "../../Components/Widget";

export default class SpinPage extends Component {

    // COMPONENT Render ................................
    render() {
        const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
        return (
            <DashboardLayout>
                {/*** Page Title ***/}
                <PageTitle title={'Spin'}
                           subTitle={'A spinner for displaying loading state of a page or a section.'}/>
                <Row gutter={32}>
                    <Col xs={24} md={12} lg={12}>
                        <Widget title={'Basic'}>
                            <Spin />
                        </Widget>
                        <Widget title={'Embedded mode'}>
                            <SpinExample1/>
                        </Widget>
                    </Col>
                    <Col xs={24} md={12} lg={12}>
                        <Widget title={'Size'}>
                            <Spin className={'mr-1'} size="small" />
                            <Spin  className={'mr-1'}  />
                            <Spin size="large" />
                        </Widget>
                        <Widget title={'Custom spinning indicator'}>
                            <Spin indicator={antIcon} />
                        </Widget>
                    </Col>
                </Row>
            </DashboardLayout>
        )
    }
}

class SpinExample1 extends Component {
    state = { loading: false }

    toggle = (value) => {
        this.setState({ loading: value });
    }

    render() {
        return (
            <div>
                <Spin spinning={this.state.loading}>
                    <Alert
                        message="Alert message title"
                        description="Further details about the context of this alert."
                        type="info"
                    />
                </Spin>
                <div style={{ marginTop: 16 }}>
                    Loading state：<Switch checked={this.state.loading} onChange={this.toggle} />
                </div>
            </div>
        );
    }
}