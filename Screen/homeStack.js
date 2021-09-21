import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/native-stack";

import  Login  from "./Screen/Login"

const HS = createStackNavigator();

export default () => (
      <NavigationContainer>
        <HS.Navigator>
            <HS.Screen name="HOME" component={Login} />
            {/* <HS.Screen name="Signin" component={Signin} /> */}
        </HS.Navigator>
      </NavigationContainer>

)