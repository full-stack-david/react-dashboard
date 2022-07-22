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
 *  File name: App.
 *  File type: Javascript.
 *  Component: APP Component
 *  Purpose: Main React App File.
 *
 ** APP COMPONENT :: App */

import React, { Component } from 'react';
import AppRouter from "./AppRouter";


class App extends Component {
  render() {
    return (
      <div className="App">
          {/*** APP Router ***/}
          <AppRouter/>
      </div>
    );
  }
}

export default App;
