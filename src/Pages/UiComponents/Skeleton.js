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
 *  File name: Skeleton.
 *  File type: Javascript.
 *  Page Component: SkeletonPage
 *
 ** PAGE COMPONENT :: SkeletonPage */

import React, {Component} from "react";
import PageTitle from "../../Components/PageTitle";
import DashboardLayout from "../../Components/DashboardLayout";
import {Button, Col, Row, Skeleton} from "antd";
import Widget from "../../Components/Widget";

export default class SkeletonPage extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <DashboardLayout>
                {/*** Page Title ***/}
                <PageTitle title={'Skeleton'}
                           subTitle={'Provide a placeholder at the place which need waiting for loading.'}/>
                <Row gutter={32}>
                    <Col xs={24} md={12} lg={12}>
                        <Widget title={'Basic'}>
                            <Skeleton/>
                        </Widget>
                        <Widget title={'Active Animation'}>
                            <Skeleton active/>
                        </Widget>
                    </Col>
                    <Col xs={24} md={12} lg={12}>
                        <Widget title={'Complex combination'}>
                            <Skeleton avatar paragraph={{rows: 4}}/>
                        </Widget>
                        <Widget title={'Contains sub component'}>
                            <SkeletonExample1/>
                        </Widget>
                    </Col>
                </Row>
            </DashboardLayout>
        )
    }
}

class SkeletonExample1 extends Component {
    state = {
        loading: false,
    };

    showSkeleton = () => {
        this.setState({loading: true});
        setTimeout(() => {
            this.setState({loading: false});
        }, 3000);
    };

    render() {
        return (
            <div className="article">
                <Skeleton loading={this.state.loading}>
                    <div className={'mb-1'}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                    </div>
                </Skeleton>
                <Button onClick={this.showSkeleton} disabled={this.state.loading}>
                    Show Skeleton
                </Button>
            </div>
        );
    }
}