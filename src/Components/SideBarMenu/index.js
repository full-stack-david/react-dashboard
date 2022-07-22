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
 *  Component: SideBarMenu
 *
 ** COMPONENT :: SideBarMenu */

import React, {Component} from "react";
import style from "./style.scss";
import PropTypes from "prop-types";

export default class SideBarMenu extends Component {
    static propTypes = {
        menuItems: PropTypes.array
    }

    static defaultProps = {
        menuItems: []
    }

    // COMPONENT Render ................................
    render() {
        return (
            <div className={style.sideBarMenu}>
                {this.props.menuItems.map((item, index) => (
                    <MenuItem key={index}
                              isSection={item.isSection || false}
                              title={item.title}
                              link={item.link || '#'}
                              icon={item.icon || null}
                              menuItems={item.menuItems || []}/>
                ))}
            </div>
        )
    }
}

export class MenuItem extends Component {

    render() {
        return (
            <div className={[style.menuItem, this.props.isSection? style.section: null].join(' ')} onClick={() => {
                if(this.props.menuItems.length<=0 || !this.props.isSection){
                    window.location.hash = this.props.link
                }

            }}>
                {this.props.isSection? (<div className={style.sectionTitle}>{this.props.title}</div>):(
                    this.props.title
                )}
                {this.props.menuItems.map((item, index)=>(
                    <div key={'section-item-' + index} className={[style.menuItem, item.isSection? style.section: null].join(' ')} onClick={(e) => {
                        window.location.hash = item.link;

                    }}>
                        {item.icon!=null?(
                            <div className={style.itemIcon}>
                                {item.icon}
                            </div>
                        ):null}

                        {item.title}
                    </div>
                ))}
            </div>
        )
    }
}