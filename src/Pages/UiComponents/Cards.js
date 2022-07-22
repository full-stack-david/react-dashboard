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
 *  File name: Cards.
 *  File type: Javascript.
 *  Page Component: CardsPage
 *
 ** PAGE COMPONENT :: CardsPage */

import React, {Component} from "react";
import PageTitle from "../../Components/PageTitle";
import DashboardLayout from "../../Components/DashboardLayout";
import {Avatar, Card, Col, Icon, Row} from "antd";
import {InfoCard, UserContactCardMini} from "../../Components/Cards";
import {FlatIcon} from "../../Components/Icon";

export default class CardsPage extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <DashboardLayout>
                {/*** Page Title ***/}
                <PageTitle title={'Cards'}
                           subTitle={'Cards Components'}/>
                <Row gutter={32}>
                    <Col lg={14} md={24}>
                        <CardExample1/>
                        <CardExample2/>
                        <CardExample3/>
                    </Col>


                    <Col lg={10} md={24}>
                        <h2>Info Card </h2>
                        <InfoCard title={'Info Card'} value={29381}/>
                        <InfoCard title={'Info Card With Icon'} icon={<FlatIcon icon={'money'}/>} value={29381}/>
                        <InfoCard title={'Followers'} icon={<Avatar size={90} src={'https://via.placeholder.com/120'}/>} value={29381}/>
                        <InfoCard title={'Info Card With Image'} icon={<img src={require('../../Assets/icons/server-drive.png')} width={90} alt=""/>} value={29381}/>

                        <h2>Users</h2>
                        <UserContactCardMini name={'user name'} info={'@user'}/>
                    </Col>


                </Row>

            </DashboardLayout>
        )
    }
}

export class CardExample1 extends Component {

    render() {
        return (
            <Card
                hoverable
                cover={<img alt="example" src={'https://via.placeholder.com/1000x1200'}/>}>
                <Card.Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                />
            </Card>
        )
    }
}

export class CardExample2 extends Component{
    render(){
        return(
            <Card
                cover={<img alt="example" src={'https://via.placeholder.com/1000x600'}/>}
                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                <Card.Meta
                    avatar={<Avatar src={'https://via.placeholder.com/120'} size={60}/>}
                    title="Card title"
                    description="This is the description"
                />
            </Card>
        )
    }
}

export class CardExample3 extends Component {
    state = {
        key: 'tab1',
        noTitleKey: 'app',
    }

    onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key });
    }

    render() {


        const tabListNoTitle = [{
            key: 'article',
            tab: 'article',
        }, {
            key: 'app',
            tab: 'app',
        }, {
            key: 'project',
            tab: 'project',
        }];

        const contentListNoTitle = {
            article: <p>article content</p>,
            app: <p>app content</p>,
            project: <p>project content</p>,
        };
        return (
            <div>

                <Card
                    style={{ width: '100%' }}
                    tabList={tabListNoTitle}
                    activeTabKey={this.state.noTitleKey}
                    onTabChange={(key) => { this.onTabChange(key, 'noTitleKey'); }}
                >
                    {contentListNoTitle[this.state.noTitleKey]}
                </Card>
            </div>
        );
    }
}