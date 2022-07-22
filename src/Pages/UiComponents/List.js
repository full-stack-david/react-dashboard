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
 *  File name: List.
 *  File type: Javascript.
 *  Page Component: ListPage
 *
 ** PAGE COMPONENT :: ListPage */

import React, {Component} from "react";
import PageTitle from "../../Components/PageTitle";
import DashboardLayout from "../../Components/DashboardLayout";
import {Avatar, Col, Icon, List, Row} from "antd";
import Widget from "../../Components/Widget";
export default class ListPage extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <DashboardLayout>
                {/*** Page Title ***/}
                <PageTitle title={'List'}
                           subTitle={'Simple List'}/>
                <Row gutter={32}>
                    <Col xs={24} md={12} lg={12}>
                        <Widget title={'Basic'}>
                            <ListExample1/>
                        </Widget>
                    </Col>
                    <Col xs={24} md={12} lg={12}>
                        <Widget title={'Basic'}>
                            <ListExample1/>
                        </Widget>
                    </Col>
                    <Col xs={24} md={24} lg={24}>
                        <Widget title={'Vertical'}>
                            <ListExample2/>
                        </Widget>
                    </Col>
                    <Col xs={24} md={24} lg={24}>
                        <Widget title={'Vertical No Data'}>
                            <ListExample3/>
                        </Widget>
                    </Col>
                </Row>
            </DashboardLayout>
        )
    }
}

export class ListExample1 extends Component {

    render() {
        const data = [
            {
                title: 'Mariah Tome',
            },
            {
                title: 'Sosan Spanr',
            },
            {
                title: 'Rona mark',
            },
            {
                title: 'Rana Stivan',
            },
        ];

        return (
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar size={80} src={'https://via.placeholder.com/80'}/>}
                            title={<span>{item.title}</span>}
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        />
                    </List.Item>
                )}
            />
        )
    }
}

export class ListExample2 extends Component {

    render() {
        const listData = [
            {
                href: '',
                title: `Need to Solve a Problem? Turn to Nature!`,
                avatar: 'https://via.placeholder.com/900x700',
                description: 'The natural world is a remarkable problem solver. So, why aren’t we turning to nature to find more answers to our complex problems?',
                content: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            },

            {
                href: '',
                title: `A new ARM-based server processor challenges for the data center`,
                avatar: 'https://via.placeholder.com/900x700',
                description: 'A former Intel executive has launched a broadside attack against her former employer and created Ampere Computing, which develops ARM-based chips for the data center.',
                content: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            },
            {
                href: '',
                title: `This Beautiful Image Comes from a Dinosaur Bone!`,
                avatar: 'https://via.placeholder.com/900x700',
                description: 'orem Ipsum is simply dummy text of the printing and typesetting industry.',
                content: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            },
            {
                href: '',
                title: `Apple iOS 12 releases today: Top new features list, how to update, and more`,
                avatar: 'https://via.placeholder.com/900x700',
                description: 'dummy text of the printing and typesetting industry',
                content: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            },
            {
                href: '',
                title: `ICANN sets plan to reinforce internet DNS security`,
                avatar: 'https://via.placeholder.com/900x700',
                description: 'simply dummy text of the printing and typesetting industry',
                content: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            },
            {
                href: '',
                title: `Hybrid IoT communications could be the best option`,
                avatar: 'https://via.placeholder.com/900x700',
                description: 'GCT Semiconductor and LPWA network provider Sigfox announced a multi-mode, hybrid, LTE combo Sigfox chip that they say will save IoT ',
                content: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            },
            {
                href: '',
                title: `Scale Computing, APC partner to offer micro data center in a box`,
                avatar: 'https://via.placeholder.com/900x700',
                description: 'The natural world is a remarkable problem solver. So, why aren’t we turning to nature to find more answers to our complex problems?',
                content: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            }
        ];



        const IconText = ({type, text}) => (
            <span>
                <Icon type={type} style={{marginRight: 8}}/>
                {text}
            </span>
        );
        return (
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 3,
                }}
                dataSource={listData}
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[<IconText type="star-o" text="156"/>, <IconText type="like-o" text="156"/>,
                            <IconText type="message" text="2"/>]}
                        extra={<img width={'100%'} alt=""
                                    style={{borderRadius: 8, maxWidth:300}}
                                    src={item.avatar}/>}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar}/>}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {item.content}
                    </List.Item>
                )}
            />
        )
    }
}

export class ListExample3 extends Component{
    render(){
        const data = []
        return(
            <List dataSource={data}/>
        )
    }
}
