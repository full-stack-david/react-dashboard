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
 *  File name: Profile.
 *  File type: Javascript.
 *  Page Component: ProfilePage
 *
 ** PAGE COMPONENT :: ProfilePage */

import React, {Component} from "react";
import PageTitle from "../../Components/PageTitle";
import DashboardLayout from "../../Components/DashboardLayout";
import {Avatar, Col, Divider, Row} from "antd";
import Widget from "../../Components/Widget";

const pStyle = {
    fontSize: 16,
    lineHeight: '24px',
    display: 'block',
    marginBottom: 16,
};


const DescriptionItem = ({title, content}) => (
    <div style={{
        fontSize: 14,
        lineHeight: '22px',
        marginBottom: 7,
    }}>
        <p style={{
            marginRight: 8,
            display: 'inline-block',
        }}>
            {title}:
        </p>
        {content}
    </div>
);


export default class ProfilePage extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <DashboardLayout>
                {/*** Page Title ***/}
                <PageTitle title={'Profile'}
                           subTitle={''}/>
                <Widget title={'User Profile'}>
                    <Row>
                        <Col lg={3}>
                            <Avatar size={120} className={'mb-2'} src={'https://via.placeholder.com/120'}/>
                        </Col>
                        <Col lg={21} >
                            <div className={'ml-2'}>
                            <h1>User name</h1>
                            <DescriptionItem title="Full Name" content="Lily"/>{' '}
                            <DescriptionItem title="Account" content="user@example.com"/>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="City" content="City Name"/>
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Country" content="Country Name"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Birthday" content="February 2,1900"/>
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Website" content="-"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <DescriptionItem
                                title="Message"
                                content="Make things as simple as possible but no simpler."
                            />
                        </Col>
                    </Row>
                    <Divider/>
                    <p style={pStyle}>Company</p>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Position" content="Programmer"/>
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Responsibilities" content="Coding"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Department" content="AFX"/>
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Supervisor" content={<a>Lin</a>}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <DescriptionItem
                                title="Skills"
                                content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
                            />
                        </Col>
                    </Row>
                    <Divider/>
                    <p style={pStyle}>Contacts</p>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Email" content="user@example.com"/>
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Phone Number" content="+86 181 0000 0000"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <DescriptionItem
                                title="Github"
                                content={(
                                    <a href="">
                                        github.com
                                    </a>
                                )}
                            />
                        </Col>
                    </Row>
                </Widget>
            </DashboardLayout>
        )
    }
}