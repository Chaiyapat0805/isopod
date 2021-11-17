import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

export function Monitor2({ navigation }) {

    return (

        <View style={styles.container}>

            <Text style={styles.text}> MONITOR </Text>

            <View style={styles.box1}>
                <Image source={require('../imge/IsopodTypeimg/6.png')} style={styles.imageicon} />
                <View style={styles.bname}>
                    <Text style={styles.textb}> Cubaris sp. "Panda King" </Text>
                </View>
            </View>

            <TouchableOpacity style={styles.btnadd} onPress={() => navigation.navigate('Monitor')}>
                <Entypo
                    name='new-message'
                    size={20}
                />
            </TouchableOpacity>

            <View style={styles.box2}>
                <Image source={require('../imge/IsopodTypeimg/5.png')} style={styles.imageicon} />
                <View style={styles.bname}>
                    <Text style={styles.textb}> Cubaris sp. "Amber" </Text>
                </View>
            </View>

            <TouchableOpacity style={styles.btnadd} onPress={() => navigation.navigate('Monitor')}>
                <Entypo
                    name='new-message'
                    size={20}
                />
            </TouchableOpacity>

            <View style={styles.box3}>
                <TouchableOpacity style={styles.add} onPress={() => navigation.navigate('Monitor2')}>
                    <Icon
                        name='add-outline'
                        size={45} />
                </TouchableOpacity>
            </View>


            <View style={styles.buttonfix}>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Monitorchart')}>
                    <Text style={{ color: '#000000', fontSize: 13, textAlign: 'center', top: 4 }}> Chart </Text>
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
    text: {
        fontSize: 35,
        textAlign: 'center',
        top: 10
    },
    box1: {
        backgroundColor: '#BEBEBE',
        width: 345,
        height: 130,
        borderRadius: 35,
        alignSelf: 'center',
        top: 28
    },
    imageicon: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        borderRadius: 75,
        top: 10
    },
    bname: {
        backgroundColor: '#F0FFFF',
        width: 200,
        height: 25,
        borderRadius: 35,
        alignSelf: 'center',
        top: 20
    },
    textb: {
        textAlign: 'center',
        margin: 2
    },
    box2: {
        backgroundColor: '#BEBEBE',
        width: 345,
        height: 130,
        borderRadius: 35,
        alignSelf: 'center',
        top: 28
    },
    box3: {
        backgroundColor: '#BEBEBE',
        width: 345,
        height: 130,
        borderRadius: 35,
        alignSelf: 'center',
        top: 28
    },
    btnadd: {
        alignSelf: 'center',
        left: 145,
        bottom: 90
    },
    add: {
        alignItems: 'center',
        top: 38
    },
    buttonfix: {
        flexDirection: 'row',
        justifyContent: 'center',
        top: 145
    },
    button: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        width: 55,
        height: 30
    },

});

export default Monitor2;