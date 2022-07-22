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
 *  File name: Switch.
 *  File type: Javascript.
 *  Page Component: SwitchPage
 *
 ** PAGE COMPONENT :: SwitchPage */

import React, {Component} from "react";
import PageTitle from "../../Components/PageTitle";
import DashboardLayout from "../../Components/DashboardLayout";
import {Col, Icon, Row, Switch, message} from "antd";
import Widget from "../../Components/Widget";

function onChange(checked) {
    message.config({
        top: 60,
    });
    message.success(`switch to ${checked}`);
}

export default class SwitchPage extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <DashboardLayout>
                {/*** Page Title ***/}
                <PageTitle title={'Switch'}
                           subTitle={'Switching Selector.'}/>
                <Row gutter={32}>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Widget title='Basic Switch'>

                            <Switch defaultChecked={false} onChange={onChange}/>

                        </Widget>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Widget title='Sized Switch'>
                            <div>
                                <span  className={'mr-1'}>
                                <Switch/>
                                </span>

                                <Switch size="small"/>
                            </div>
                        </Widget>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Widget title='Labeled Switch'>
                            <div>
                                <Switch className={'mr-1'} checkedChildren={'YES'} unCheckedChildren={'NO'}/>

                                <div className={'mt-1 mb-1'}>
                                <Switch  checkedChildren="1" unCheckedChildren="0"/>

                                </div>
                                <Switch
                                    checkedChildren={< Icon type="check"/>}
                                    unCheckedChildren={< Icon type="cross"/>}/>
                            </div>
                        </Widget>
                    </Col>

                </Row>
            </DashboardLayout>
        )
    }
}