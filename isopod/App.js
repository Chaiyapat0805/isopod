import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import  Login  from "./Screen/Login"
import  Register  from "./Screen/Register"
import  Homepage from "./Screen/Homepage"
import  Profile from "./Screen/Profile"
import  selecisopod from "./Screen/SelectTypeIsopod"
import  Dakmill from "./Screen/Dakmill"
import  DairyCow from "./Screen/DairyCow"

const HS = createStackNavigator();

function HomeScreen () {

    return(

      <NavigationContainer independent={true} > 

        <HS.Navigator>

            <HS.Screen name="HOME" component={Login} options={{ headerShown: false }}/>
            
            <HS.Screen name="Register" component={Register} options={{ headerShown: false }}/>

            <HS.Screen name="Homepage" component={Homepage} options={{ headerShown: false }}/>

            <HS.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>

            <HS.Screen name="selecisopod" component={selecisopod} options={{ headerShown: false }}/>

            <HS.Screen name="Dakmill" component={Dakmill} options={{ headerShown: false }}/>

            <HS.Screen name="DairyCow" component={DairyCow} options={{ headerShown: false }}/>

        </HS.Navigator>

      </NavigationContainer>
    )

}

const App = () => {

    return(

      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
      
    )

}

export default App;