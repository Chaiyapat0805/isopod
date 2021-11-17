import React, { Component } from 'react';
import { ImageBackground, Image, StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

export function Homepage({ navigation }) {

    return (

        <View style={styles.container}>

            <Text style={styles.text}> HOME   PAGE </Text>

            <Image source={require('../imge/homepage/isopodhp.png')} style={styles.imagebg} />

            <View style={styles.button}>
                <TouchableOpacity style={styles.buttonicon} onPress={() => navigation.navigate('Profile')}  >
                    <Image source={require('../imge/homepage/icon1.png')} style={styles.imageicon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonicon} onPress={() => navigation.navigate('selecisopod')} >
                    <Image source={require('../imge/homepage/icon2.png')} style={styles.imageicon} />
                </TouchableOpacity>
            </View>

            <View style={styles.button2}>
                <TouchableOpacity style={styles.buttonicon} onPress={() => navigation.navigate('Isocare')}  >
                    <Image source={require('../imge/homepage/icon3.png')} style={styles.imageicon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonicon} onPress={() => navigation.navigate('Monitor')} >
                    <Image source={require('../imge/homepage/icon4.png')} style={styles.imageicon} />
                </TouchableOpacity>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC'
    },
    imagebg: {
        width: 332,
        height: 217,
        borderRadius: 15,
        margin: 25,
        top: 20,
        left: 5
    },
    imageicon: {
        width: 152,
        height: 127
    },
    text: {
        fontSize: 38,
        textAlign: 'center',
        top: 23
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 0,
        marginTop: 28
    },
    button2: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 15
    },
    buttonicon: {
        backgroundColor: '#DDDDDD'
    },
});

export default Homepage;