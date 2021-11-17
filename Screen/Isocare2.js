import React from 'react';
import { StyleSheet, Text, TextInput, Image, View, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


export function Isocare2({ navigation }) {
    return (

        <View style={styles.container}>

            <Text style={styles.text}> ISOCARE </Text>

            <View style={styles.box1}>
                <View style={styles.inputname}>
                    <TextInput
                        style={styles.input}

                    />
                </View>

                <View style={styles.inputype}>
                    <TextInput
                        style={styles.input}
                    />
                </View>

                <Text style={styles.textbox}> suitable temperature & humidity  </Text>
                <Image source={require('../imge/isocare/icontemp.png')} style={styles.imageicon} />
                <View style={styles.inputemp}>
                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                    />
                </View>

                <Image source={require('../imge/isocare/iconhum.png')} style={styles.imageiconh} />
                <View style={styles.inputhum}>
                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                    />
                </View>
            </View>


            <View style={styles.box2}>
                <View style={styles.inputname2}>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputype2}>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <Text style={styles.textbox}> suitable temperature & humidity  </Text>
                <Image source={require('../imge/isocare/icontemp.png')} style={styles.imageicon} />
                <View style={styles.inputemp}>
                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                    />
                </View>
                <Image source={require('../imge/isocare/iconhum.png')} style={styles.imageiconh} />
                <View style={styles.inputhum}>
                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                    />
                </View>
            </View>

            <View style={styles.box3}>
                <View style={styles.inputname3}>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputype3}>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <Text style={styles.textbox}> suitable temperature & humidity  </Text>
                <Image source={require('../imge/isocare/icontemp.png')} style={styles.imageicon} />
                <View style={styles.inputemp}>
                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                    />
                </View>
                <Image source={require('../imge/isocare/iconhum.png')} style={styles.imageiconh} />
                <View style={styles.inputhum}>
                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                    />
                </View>
            </View>
            <View style={styles.btnadd}>
                <TouchableOpacity style={styles.add} onPress={() => navigation.navigate('gallerysocare')}>
                    <Icon
                        name='add-outline'
                        size={35} />
                </TouchableOpacity>
            </View>
            <View style={styles.btnadd2}>
                <TouchableOpacity style={styles.add} onPress={() => navigation.navigate('gallerysocare')}>
                    <Icon
                        name='add-outline'
                        size={35} />
                </TouchableOpacity>
            </View>
            <View style={styles.btnadd3}>
                <TouchableOpacity style={styles.add} onPress={() => navigation.navigate('gallerysocare')}>
                    <Icon
                        name='add-outline'
                        size={35} />
                </TouchableOpacity>
            </View>

            <View style={styles.buttonfix}>

                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Save เรียบร้อย')}>
                    <Text style={{ color: '#000000', fontSize: 13, textAlign: 'center', top: 3 }}> Save </Text>
                </TouchableOpacity>
            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFCC99'
    },
    text: {
        fontSize: 35,
        textAlign: 'center',
        top: 10
    },
    button: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        width: 48,
        height: 26,
    },
    buttonfix: {
        flexDirection: 'row',
        justifyContent: 'center',
        bottom: 30
    },
    box1: {
        backgroundColor: '#F5F5F5',
        width: 345,
        height: 165,
        borderRadius: 45,
        alignSelf: 'center',
        top: 30
    },
    inputname: {
        borderWidth: 1,
        width: 180,
        height: 37,
        borderRadius: 20,
        alignSelf: 'center',
        top: 10,
    },
    input: {
        top: 3,
        fontSize: 13
    },
    inputype: {
        borderWidth: 1,
        width: 135,
        height: 36,
        borderRadius: 20,
        left: 85,
        top: 15
    },
    textbox: {
        fontSize: 12,
        top: 25,
        left: 115
    },
    imageicon: {
        width: 45,
        height: 45,
        left: 115,
        top: 29
    },
    inputemp: {
        borderWidth: 1,
        width: 63,
        height: 36,
        borderRadius: 35,
        left: 149,
        top: -15
    },
    imageiconh: {
        width: 20,
        height: 20,
        left: 215,
        bottom: 40
    },
    inputhum: {
        borderWidth: 1,
        width: 65,
        height: 36,
        borderRadius: 35,
        left: 240,
        bottom: 70
    },
    box2: {
        backgroundColor: '#F5F5F5',
        width: 345,
        height: 165,
        borderRadius: 45,
        alignSelf: 'center',
        top: 55
    },
    inputname2: {
        borderWidth: 1,
        width: 180,
        height: 36,
        borderRadius: 35,
        alignSelf: 'center',
        top: 10
    },
    inputype2: {
        borderWidth: 1,
        width: 135,
        height: 36,
        borderRadius: 35,
        left: 85,
        top: 15
    },
    box3: {
        backgroundColor: '#F5F5F5',
        width: 345,
        height: 165,
        borderRadius: 45,
        alignSelf: 'center',
        top: 85
    },
    inputname3: {
        borderWidth: 1,
        width: 180,
        height: 36,
        borderRadius: 35,
        alignSelf: 'center',
        top: 10
    },
    inputype3: {
        borderWidth: 1,
        width: 135,
        height: 36,
        borderRadius: 35,
        left: 85,
        top: 15
    },
    btnadd: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        width: 55,
        height: 55,
        borderRadius: 35,
        alignSelf: 'center',
        bottom: 440,
        right: 128
    },
    add: {
        alignItems: 'center',
        top: 6
    },
    btnadd2: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        width: 55,
        height: 55,
        borderRadius: 35,
        alignSelf: 'center',
        bottom: 305,
        right: 128
    },
    btnadd3: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        width: 55,
        height: 55,
        borderRadius: 35,
        alignSelf: 'center',
        bottom: 170,
        right: 128
    },
});
export default Isocare2;