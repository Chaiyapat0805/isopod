import React, { Component } from 'react';
import { ImageBackground, Image, StyleSheet, Text, TextInput, Button, View, TouchableOpacity, Alert} from "react-native";

export const Login = (navigation) => {

    return(

        <ImageBackground source={require('../imge/background.png')} style={styles.imagebg}>

            <Image source={require('../imge/signinimge/mrisopod.png')}  style={styles.imagein}/>

                <View style={styles.Container}>
                    <Text style={styles.text}> Username : </Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter Username' 
                    />

                    <Text style={styles.text}> Password : </Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                        placeholder='Enter Password' 
                    />
                </View>

                <View style={styles.button}>
                    <TouchableOpacity style={styles.buttonRt} onPress={() => Alert.alert('Touch')} >
                        <Text style={styles.textbt}> Register </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonLi} onPress={() => Alert.alert('Touch')} >
                        <Text style={styles.textbt}> Log in </Text>
                    </TouchableOpacity>
                </View>
  
        </ImageBackground>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imagebg: {
        width: "100%",
        height: 750
    },
    imagein: {
        width: 160,
        height: 160,
        top: 60,
        left: 116,
    },
    Container: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 80,
        top: 28
    },
    text: {
        fontSize: 17
    },
    textbt: {
        fontSize: 15,
        textAlign: "center",
        top: 8
    },
    input: {
        alignSelf: 'stretch',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginTop: -5,
        marginBottom: 15
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 40,
        marginTop: 5 
    },
    buttonRt: {
        backgroundColor: '#DDDDDD',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: 100,
        height: 40
    },
    buttonLi: {
        backgroundColor: '#DDDDDD',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: 100,
        height: 40
    },
});

export default Login;