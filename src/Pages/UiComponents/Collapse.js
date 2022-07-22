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
 *  File name: Collapse.
 *  File type: Javascript.
 *  Page Component: CollapsePage
 *
 ** PAGE COMPONENT :: CollapsePage */

import React, {Component} from "react";
import PageTitle from "../../Components/PageTitle";
import DashboardLayout from "../../Components/DashboardLayout";
import {Col, Collapse, Row} from "antd";
import Widget from "../../Components/Widget";

const Panel = Collapse.Panel;
export default class CollapsePage extends Component {
    // COMPONENT Render ................................
    render() {
        return (
            <DashboardLayout>
                {/*** Page Title ***/}
                <PageTitle title={'Collapse'}
                           subTitle={'A content area which can be collapsed and expanded.'}/>
                <Row gutter={32}>
                    <Col lg={12} md={24}>
                        <Widget title={'Basic'}>
                            <CollapseExample1/>
                        </Widget>
                        <Widget title={'Nested panel'}>
                            <CollapseNestedPanelExample3/>
                        </Widget>
                        <Widget title={'Custom Panel'}>
                            <CollapseExample5/>
                        </Widget>
                    </Col>
                    <Col lg={12} md={24}>
                        <Widget title={'Accordion'}>
                            <CollapseExample2/>
                        </Widget>
                        <Widget title={'Borderless'}>
                            <CollapseExample4/>
                        </Widget>
                        <Widget title={'No arrow'}>
                            <CollapseExample6/>
                        </Widget>
                    </Col>
                </Row>
            </DashboardLayout>
        )
    }
}


export class CollapseExample1 extends Component {

    render() {
        function callback(key) {
            console.log(key);
        }

        const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
        return (
            <Collapse defaultActiveKey={['1']} onChange={callback}>
                <Panel header="This is panel header 1" key="1">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3" disabled>
                    <p>{text}</p>
                </Panel>
            </Collapse>
        )
    }
}

export class CollapseExample2 extends Component {

    render() {
        const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
        return (
            <Collapse accordion>
                <Panel header="This is panel header 1" key="1">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                    <p>{text}</p>
                </Panel>
            </Collapse>
        )
    }
}

export class CollapseNestedPanelExample3 extends Component {

    render() {
        function callback(key) {
            console.log(key);
        }

        const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

        return (
            <Collapse onChange={callback}>
                <Panel header="This is panel header 1" key="1">
                    <Collapse defaultActiveKey="1">
                        <Panel header="This is panel nest panel" key="1">
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                    <p>{text}</p>
                </Panel>
            </Collapse>
        )
    }
}

export class CollapseExample4 extends Component {

    render() {
        const text = (
            <p style={{paddingLeft: 24}}>
                A dog is a type of domesticated animal.
                Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.
            </p>
        );
        return (
            <Collapse bordered={false} defaultActiveKey={['1']}>
                <Panel header="This is panel header 1" key="1">
                    {text}
                </Panel>
                <Panel header="This is panel header 2" key="2">
                    {text}
                </Panel>
                <Panel header="This is panel header 3" key="3">
                    {text}
                </Panel>
            </Collapse>
        )
    }
}

export class CollapseExample5 extends Component {

    render() {
        const text = (
            <p style={{paddingLeft: 24}}>
                A dog is a type of domesticated animal.
                Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.
            </p>
        );
        const customPanelStyle = {
            borderRadius: 4,
            marginBottom: 24,
            border: 0,
            overflow: 'hidden',
        };
        return (
            <Collapse bordered={false} defaultActiveKey={['1']}>
                <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
                    <p>{text}</p>
                </Panel>
            </Collapse>
        )
    }
}

export class CollapseExample6 extends Component {

    render() {
        function callback(key) {
            console.log(key);
        }

        const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
        return (
            <Collapse defaultActiveKey={['1']} onChange={callback}>
                <Panel header="This is panel header with arrow icon" key="1">
                    <p>{text}</p>
                </Panel>
                <Panel showArrow={false} header="This is panel header with no arrow icon" key="2">
                    <p>{text}</p>
                </Panel>
            </Collapse>
        )
    }
}

