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
 * ::::::::::::::::::::::::::::::::::::[  COMPONENT  ]:::::::::::::::::::::::::::::::::::::
 *
 *  File name: Index.
 *  File type: Javascript.
 *  Component: Index
 *  Purpose: Main React Index File.
 *
 ** APP COMPONENT :: ReactDOM */

import React from 'react';
import ReactDOM from 'react-dom';
import "./Assets/flaticons/flaticon.css";
import "./Assets/stroke7/style.css";
import "./Theme/theme.scss";
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
