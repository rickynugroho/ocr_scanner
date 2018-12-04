import React, { Component } from "react";
import {
  Router,
  Scene,
} from "react-native-router-flux";
import {
  Home,
} from "@screens";

class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="home" component={Home} initial></Scene>
        </Scene>
      </Router>
    );
  }
}

export default App;
