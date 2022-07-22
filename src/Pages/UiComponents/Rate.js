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
 *  File name: Rate.
 *  File type: Javascript.
 *  Page Component: RatePage
 *
 ** PAGE COMPONENT :: RatePage */

import React, {Component} from "react";
import PageTitle from "../../Components/PageTitle";
import DashboardLayout from "../../Components/DashboardLayout";
import {Col, Icon, Rate, Row} from "antd";
import Widget from "../../Components/Widget";
export default class RatePage extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <DashboardLayout>
                {/*** Page Title ***/}
                <PageTitle title={'Rate'}
                           subTitle={'Rate component.'}/>
                <Row gutter={32}>
                    <Col xs={24} md={12} lg={12}>
                        <Widget title={'Basic'}>
                            <Rate/>
                        </Widget>
                        <Widget title={'Show copywriting'}>
                            <RaterExample1/>
                        </Widget>
                        <Widget title={'Clear star'}>
                            <Rate defaultValue={3} /> allowClear: true
                            <br />
                            <Rate allowClear={false} defaultValue={3} /> allowClear: false
                        </Widget>
                    </Col>

                    <Col xs={24} md={12} lg={12}>
                        <Widget title={'Half star'}>
                            <Rate allowHalf defaultValue={2.5}/>
                        </Widget>
                        <Widget title={'Read only'}>
                            <Rate disabled defaultValue={2} />
                        </Widget>
                        <Widget title={'Other Character'}>
                            <Rate character={<Icon type="heart" />} allowHalf />
                            <br />
                            <Rate character="A" allowHalf style={{ fontSize: 36 }} />
                            <br />
                            <Rate character={<Icon type="smile" />} allowHalf />
                        </Widget>

                    </Col>
                </Row>
            </DashboardLayout>
        )
    }
}

class RaterExample1 extends Component {
    state = {
        value: 3,
    }

    handleChange = (value) => {
        this.setState({value});
    }

    render() {
        const {value} = this.state;
        return (
            <span>
        <Rate onChange={this.handleChange} value={value}/>
                {value && <span className="ant-rate-text">{value} stars</span>}
      </span>
        );
    }
}
