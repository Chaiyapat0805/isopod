import React, { Component } from 'react';
import {View} from 'react-native';
import Login from './Screen/Login';
import Register from './Screen/Register';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Login />
        {/* <Register /> */}
      </View>
    );
  }
}

export default App;
