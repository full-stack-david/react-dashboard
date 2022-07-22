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
 *  File name: Buttons.
 *  File type: Javascript.
 *  Page Component: ButtonsPage
 *
 ** PAGE COMPONENT :: ButtonsPage */

import React, {Component} from "react";
import PageTitle from "../../Components/PageTitle";
import DashboardLayout from "../../Components/DashboardLayout";
import {Button, Col, Icon, Row, Radio} from "antd";
import Widget from "../../Components/Widget";
export default class ButtonsPage extends Component {
    state = {
        size: 'large',
        loading: false,
        iconLoading: false,
    };

    handleSizeChange = (e) => {
        this.setState({size: e.target.value});
    }

    enterLoading = () => {
        this.setState({loading: true});
    }

    enterIconLoading = () => {
        this.setState({iconLoading: true});
    }

    // COMPONENT Render ................................
    render() {
        const size = this.state.size;
        return (
            <DashboardLayout>
                {/*** Page Title ***/}
                <PageTitle title={'Buttons'}
                           subTitle={'To trigger an operation.'}/>

                <Row gutter={32}>
                    <Col lg={12}>
                        <Widget title={'Button Types'}>
                            <Button type="primary">Primary</Button>
                            <Button>Default</Button>
                            <Button type="dashed">Dashed</Button>
                            <Button type="danger">Danger</Button>
                        </Widget>
                        <Widget title={'Button Size'}>
                            <Radio.Group value={size} onChange={this.handleSizeChange}>
                                <Radio.Button value="large">Large</Radio.Button>
                                <Radio.Button value="default">Default</Radio.Button>
                                <Radio.Button value="small">Small</Radio.Button>
                            </Radio.Group>
                            <br/><br/>
                            <Button type="primary" size={size}>Primary</Button>
                            <Button size={size}>Normal</Button>
                            <Button type="dashed" size={size}>Dashed</Button>
                            <Button type="danger" size={size}>Danger</Button>
                            <br/>
                            <Button type="primary" shape="circle" icon="download" size={size}/>
                            <Button type="primary" icon="download" size={size}>Download</Button>
                            <br/>
                            <Button.Group size={size}>
                                <Button type="primary">
                                    <Icon type="left"/>Backward
                                </Button>
                                <Button type="primary">
                                    Forward<Icon type="right"/>
                                </Button>
                            </Button.Group>
                        </Widget>
                        <Widget title={'Loading Size'}>
                           <span>
                            <Button type="primary" loading>
                              Loading
                            </Button>
                            <Button type="primary" size="small" loading>
                              Loading
                            </Button>
                            <br/>
                            <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
                              Click me!
                            </Button>
                            <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
                              Click me!
                            </Button>
                            <br/>
                            <Button shape="circle" loading/>
                            <Button type="primary" shape="circle" loading/>
                          </span>
                        </Widget>
                    </Col>
                    <Col lg={12}>
                        <Widget title={'Icon Button'}>
                            <Button type="primary" shape="circle" icon="search"/>
                            <Button type="primary" icon="search">Search</Button>
                            <Button shape="circle" icon="search"/>
                            <Button icon="search">Search</Button>
                            <br/>
                            <Button shape="circle" icon="search"/>
                            <Button icon="search">Search</Button>
                            <Button type="dashed" shape="circle" icon="search"/>
                            <Button type="dashed" icon="search">Search</Button>
                        </Widget>
                        <Widget title={'Ghost Button'}>
                            <Button type="primary" ghost>Primary</Button>
                            <Button ghost>Default</Button>
                            <Button type="dashed" ghost>Dashed</Button>
                            <Button type="danger" ghost>danger</Button>
                        </Widget>
                        <Widget title={'Block Button'}>
                            <p>block property will make the button fit to its parent width.</p>
                            <Button type="primary" block>Primary</Button>
                            <Button block>Default</Button>
                            <Button type="dashed" block>Dashed</Button>
                            <Button type="danger" block>danger</Button>
                        </Widget>
                    </Col>
                </Row>

            </DashboardLayout>
        )
    }
}