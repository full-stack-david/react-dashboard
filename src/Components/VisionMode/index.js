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
 *  Component: VisionMode
 *
 ** COMPONENT :: VisionMode */

import React, {Component} from "react";
import style from "./style.scss";
import {StrokeIcon} from "../Icon";

export default class VisionMode extends Component {

    state = {
        isNightMode: false
    }

    componentWillMount(){
        var mode = localStorage.getItem('visionMode');
        if(mode==='night'){
            document.body.classList.remove('light-mode');
            document.body.classList.add('night-mode');
            this.setState ({
                isNightMode: true
            });
        }else{
            document.body.classList.remove('night-mode');
            document.body.classList.add('light-mode');
            this.setState ({
                isNightMode: false
            })
        }
    }



    // COMPONENT Render ................................
    render() {
        return (
            <div className={style.visionMode} onClick={()=>{
                var mode = localStorage.getItem('visionMode');
                if(mode==='night'){
                    localStorage.setItem('visionMode', 'light');
                    document.body.classList.remove('night-mode');
                    document.body.classList.add('light-mode');
                    this.setState ({
                        isNightMode: false
                    })
                }else{
                    localStorage.setItem('visionMode', 'night');
                    document.body.classList.remove('light-mode');
                    document.body.classList.add('night-mode');

                    this.setState ({
                        isNightMode: true
                    })
                }

            }}>
                <StrokeIcon icon={this.state.isNightMode? 'sun':'moon'}/>
            </div>
        )
    }
}