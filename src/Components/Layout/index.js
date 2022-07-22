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
 * ::::::::::::::::::::::::::::::[  COMPONENT  ]::::::::::::::::::::::::::::::::::::
 *
 *  File name: index.
 *  File type: Javascript.
 *  Component: AppLayout
 *
 ** COMPONENT :: AppLayout */

import React, {Component} from "react";
import PropTypes from 'prop-types';
import style from "./style.scss";
import {Scrollbars} from "react-custom-scrollbars";


export class AppLayout extends Component {

    static propTypes = {
        header: PropTypes.node,
        leftSideBar: PropTypes.node,
        rightSideBar: PropTypes.node,
        showLeftSideBar: PropTypes.bool,
        showRightSideBar: PropTypes.bool
    }

    static defaultProps = {
        header: null,
        leftSideBar: null,
        rightSideBar: null,
        showLeftSideBar: true,
        showRightSideBar: true
    }

    constructor(props) {
        super(props);
        this.state = {
            showTopHeader: true,
            width: 0,
            height: 0,
            showTopHeaderShadow: false,
            showLeftSideBar: true,
            showRightSideBar: true
        }
    }


    updateDimensions = () => {
    this.setState({width: window.innerWidth, height: window.innerWidth});
if (window.innerWidth <= 1280) {
    this.setState({
        showLeftSideBar: false,
        showRightSideBar: false
    });
}

}

componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions();
}

componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
}

componentWillReceiveProps(props) {
    if (this.state.showLeftSideBar !== props.showLeftSideBar) {
        this.setState({
            showLeftSideBar: props.showLeftSideBar
        });

    }

    if (this.state.showRightSideBar !== props.showRightSideBar) {
        this.setState({
            showRightSideBar: props.showRightSideBar,
        })
    }

    /*if (window.innerWidth <= 500) {


            if(this.state.showLeftSideBar){
                this.setState({
                    showLeftSideBar: false
                });
            }
            if(this.state.showRightSideBar){
                this.setState({
                    showRightSideBar: false
                });
            }

    } else {


        this.setState({
            showLeftSideBar: props.showLeftSideBar,
            showRightSideBar: props.showRightSideBar,
        })
    }*/
}

onMainContentScroll = (v) => {
    const {scrollTop} = v;
    if (scrollTop > 0) {
        this.setState({
            showTopHeaderShadow: true
        });
    } else {
        this.setState({
            showTopHeaderShadow: false
        });
    }
}

// COMPONENT Render ................................
render() {
    return (
        <div className={style.appLayout}>
    {this.props.header !== null ? (
        <AppLayoutHeader shadow={this.state.showTopHeaderShadow}>
        {this.props.header}
    </AppLayoutHeader>
    ) : null}
    {this.props.leftSideBar !== null ? (
        <AppLayoutSideBar position={'left'} show={this.state.showLeftSideBar}>
        {this.props.leftSideBar}
    </AppLayoutSideBar>
    ) : null}

<AppLayoutMainContent onScroll={this.onMainContentScroll}>
    {this.props.children}
</AppLayoutMainContent>
    {this.props.rightSideBar !== null ? (
        <AppLayoutSideBar position={'right'} show={this.state.showRightSideBar}>
        {this.props.rightSideBar}
    </AppLayoutSideBar>
    ) : null}
</div>
)
}
}

export class AppLayoutHeader extends Component {


    static propTypes = {
        shadow: PropTypes.bool
    }

    static defaultProps = {
        shadow: false
    }

    // COMPONENT Render ................................
    render() {
        return (
            <div className={[style.appLayoutHeader, this.props.shadow ? style.shadow : null].join(' ')}>
        {this.props.children}
    </div>
    )
    }
}

export class AppLayoutSideBar extends Component {
    static propTypes = {
        position: PropTypes.string
    }

    static defaultProps = {
        position: 'left'
    }

    // COMPONENT Render ................................
    render() {
        return (
            <div
        className={[style.appLayoutSideBar, style[this.props.position], this.props.show ? style.show : null].join(' ')}>
    <Scrollbars style={{width: '100%', height: '100%'}}
        autoHide>
        <div className={style.container}>
        {this.props.children}
    </div>
        </Scrollbars>
        </div>
    )
    }
}

export class AppLayoutMainContent extends Component {
    scrollBar = React.createRef();
    static propTypes = {
        onScroll: PropTypes.func
    }

    static defaultProps = {
        onScroll: () => {
    }
}

scrollBarOnUpdate = (values) => {
    this.props.onScroll(values);

}

// COMPONENT Render ................................
render() {
    return (
        <div className={[style.appLayoutMainContent]}>
        <Scrollbars style={{width: '100%', height: '100%'}}
    onUpdate={this.scrollBarOnUpdate}
    ref={ref=>this.scrollBar=ref}
    autoHide>
    <div className={style.appLayoutContainer}>
    {this.props.children}
</div>
    </Scrollbars>
    </div>
)
}
}

export class AppLayoutSideBarMenuIcon extends Component {
    render() {
        return (
            <div className={style.appLayoutSideBarMenuIcon} onClick={this.props.onClick}>
    <div className={style.line}/>
        <div className={style.line}/>
        <div className={style.line}/>
        </div>
    )
    }
}