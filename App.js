import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Screen/Login"
import Register from "./Screen/Register"
import Homepage from "./Screen/Homepage"
import Profile from "./Screen/Profile"
import selecisopod from "./Screen/SelectTypeIsopod"
import MagicPotion from "./Screen/MagicPotion"
import Marbleized from "./Screen/Marbleized"
import DairyCow from "./Screen/DairyCow"
import GiantOrange from './Screen/GiantOrange';
import Amber from './Screen/Amber';
import PandaKing from './Screen/PandaKing';

const HS = createStackNavigator();

function HomeScreen() {

  return (

    <NavigationContainer independent={true} >

      <HS.Navigator>

        <HS.Screen name="HOME" component={Login} options={{ headerShown: false }} />

        <HS.Screen name="Register" component={Register} options={{ headerShown: false }} />

        <HS.Screen name="Homepage" component={Homepage} options={{ headerShown: false }} />

        <HS.Screen name="Profile" component={Profile} options={{ headerShown: false }} />

        <HS.Screen name="selecisopod" component={selecisopod} options={{ headerShown: false }} />

        <HS.Screen name="MagicPotion" component={MagicPotion} options={{ headerShown: false }} />

        <HS.Screen name="Marbleized" component={Marbleized} options={{ headerShown: false }} />

        <HS.Screen name="GiantOrange" component={GiantOrange} options={{ headerShown: false }} />

        <HS.Screen name="DairyCow" component={DairyCow} options={{ headerShown: false }} />

        <HS.Screen name="Amber" component={Amber} options={{ headerShown: false }} />

        <HS.Screen name="PandaKing" component={PandaKing} options={{ headerShown: false }} />

      </HS.Navigator>

    </NavigationContainer>
  )

}

const App = () => {

  return (

    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>

  )

}

export default App;