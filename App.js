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
import Monitor from './Screen/Monitor';
import Isocare from './Screen/Isocare';
import Isocare2 from './Screen/Isocare2';
import Isobox1 from './Screen/Isobox1';
import Isobox2 from './Screen/Isobox2';
import Isobox3 from './Screen/Isobox3';
// import gallerys from './Screen/gallerys';
// import gallerysocare from './Screen/gallerysocare';
// import EditProfile from './Screen/EditProfile';
import Monitor2 from './Screen/Monitor2';
import Chartpandaking from './Screen/Chartpandaking';
import Chartamber from './Screen/Chartamber';
import Monitorpada from './Screen/Monitorpada';
import Monitoramber from './Screen/Monitoramber';

const HS = createStackNavigator();

function HomeScreen() {

  return (

    <NavigationContainer independent={true} >

      <HS.Navigator>

        <HS.Screen name="HOME" component={Login} options={{ headerShown: false }} />

        <HS.Screen name="Register" component={Register} options={{ headerShown: false }} />

        <HS.Screen name="Homepage" component={Homepage} options={{ headerShown: false }} />

        <HS.Screen name='Profile' component={Profile} options={{ headerShown: false }} />

        <HS.Screen name="selecisopod" component={selecisopod} options={{ headerShown: false }} />

        <HS.Screen name="MagicPotion" component={MagicPotion} options={{ headerShown: false }} />

        <HS.Screen name="Marbleized" component={Marbleized} options={{ headerShown: false }} />

        <HS.Screen name="GiantOrange" component={GiantOrange} options={{ headerShown: false }} />

        <HS.Screen name="DairyCow" component={DairyCow} options={{ headerShown: false }} />

        <HS.Screen name="Amber" component={Amber} options={{ headerShown: false }} />

        <HS.Screen name="PandaKing" component={PandaKing} options={{ headerShown: false }} />

        <HS.Screen name="Monitor" component={Monitor} options={{ headerShown: false }} />

        <HS.Screen name="Isocare" component={Isocare} options={{ headerShown: false }} />

        <HS.Screen name="Isocare2" component={Isocare2} options={{ headerShown: false }} />

        <HS.Screen name="Isobox1" component={Isobox1} options={{ headerShown: false }} />

        <HS.Screen name="Isobox2" component={Isobox2} options={{ headerShown: false }} />

        <HS.Screen name="Isobox3" component={Isobox3} options={{ headerShown: false }} />

        {/* <HS.Screen name="gallerys" component={gallerys} /> */}

        {/* <HS.Screen name="gallerysocare" component={gallerysocare} /> */}

        {/* <HS.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} /> */}

        <HS.Screen name="Monitor2" component={Monitor2} options={{ headerShown: false }} />

        <HS.Screen name="Chartpandaking" component={Chartpandaking} options={{ headerShown: false }} />

        <HS.Screen name="Chartamber" component={Chartamber} options={{ headerShown: false }} />

        <HS.Screen name="Monitorpanda" component={Monitorpada} options={{ headerShown: false }} />

        <HS.Screen name="Monitoramber" component={Monitoramber} options={{ headerShown: false }} />

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