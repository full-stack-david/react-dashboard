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
 *  File name: Error.
 *  File type: Javascript.
 *  Page Component: Error404Page
 *
 ** PAGE COMPONENT :: Error404Page */

import React, {Component} from "react";
import {Button} from "antd";
import style from "./Error.scss"
import {Link} from "react-router-dom";

export default class Error404Page extends Component {

    // COMPONENT Render ................................
    render() {
        return (
            <div className={style.errorPage404}>
                <div className={style.pageContent}>
                    <Error404Icon/>
                    <h1>Sorry Page Not Found</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <Button><Link to={'/'}>Take Me Home</Link></Button>
                </div>
            </div>
        )
    }
}

const Error404Icon =()=>(
    <svg id="error-404-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470.97 204.62" className="svg" x="0px" y="0px">

        <title>404</title>
        <path className="cls-1" d="M582,485.87a83,83,0,1,1-83-83A83,83,0,0,1,582,485.87Z"
              transform="translate(-265.52 -370.38)"/>
        <path className="cls-2"
              d="M499,575a89.13,89.13,0,1,1,89.13-89.13A89.24,89.24,0,0,1,499,575Zm0-165.93a76.8,76.8,0,1,0,76.79,76.8A76.89,76.89,0,0,0,499,409.07Z"
              transform="translate(-265.52 -370.38)"/>
        <path className="cls-3" d="M558.56,485.27s-62-4.24-119.09,0c0,0,77.47,6.93,119.09,0"
              transform="translate(-265.52 -370.38)"/>
        <path className="cls-3" d="M499.6,426.32s-6.94,77.48,0,119.1C499.6,545.42,503.84,483.36,499.6,426.32Z"
              transform="translate(-265.52 -370.38)"/>
        <g className="animatearear" transform="translate(150, 100)">
        <polygon  x="-50" y="-50"  className="cls-4" points="228.11 109.51 238.91 121.46 189.97 158.08 228.11 109.51"/>
        <polygon  x="-50" y="-50"  className="cls-5" points="238.87 121.46 228.07 109.51 277.01 72.9 238.87 121.46"/>
        </g>
        <path className="cls-2"
              d="M265.52,518.17v-10.4L373.69,370.38H386.9V506.93h32.59v11.24H386.9v50.57H374.25V518.17ZM374.81,387.24,279.57,506.93h95.25Z"
              transform="translate(-265.52 -370.38)"/>
        <path className="cls-2"
              d="M582.52,519.17v-10.4L690.69,371.38H703.9V507.93h32.59v11.24H703.9v50.57H691.25V519.17ZM691.81,388.24,596.57,507.93h95.25Z"
              transform="translate(-265.52 -370.38)"/>
    </svg>
)
