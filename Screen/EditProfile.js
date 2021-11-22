import React from 'react';
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';

export function EditProfile({ navigation }) {

    function goToPicker() {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log('image console ==>', image);
        })
    }

    return (

        <View style={styles.container}>

            <Text style={styles.text}> PROFILE </Text>

            <View style={styles.btnadd}>
                <TouchableOpacity style={styles.add} onPress={()=> goToPicker()}>
                    <Icon
                        name='add-outline'
                        size={40} />
                </TouchableOpacity>
            </View>


            <Text style={styles.texticon}> <Image source={require('../imge/profile/iconpro.png')}
                style={styles.imageic} /> Name </Text>
            <View style={styles.inputname}>
                <TextInput
                    style={styles.input}
                />
            </View>

            <Text style={styles.texticon}> <Image source={require('../imge/profile/iconsex.png')}
                style={styles.imageic} /> Gender  </Text>
            <View style={styles.inputsex}>
                <TextInput
                    style={styles.input}
                />
            </View>

            <Text style={styles.texticon}> <Image source={require('../imge/profile/iconloca.png')}
                style={styles.imageic} /> Location  </Text>
            <View style={styles.inputlo}>
                <TextInput
                    style={styles.input}
                />
            </View>

            <Text style={styles.texticon}> <Image source={require('../imge/profile/icontel.png')}
                style={styles.imageic} /> Tel  </Text>
            <View style={styles.inputtel}>
                <TextInput
                    style={styles.input}
                    keyboardType='number-pad'
                />
            </View>

            <View style={styles.buttonfix}>

                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Save ข้อมูลเรียบร้อย')}>
                    <Text style={{ color: '#000000', fontSize: 13, textAlign: 'center', top: 3 }}> Save </Text>
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
        top: 22
    },
    btnadd: {
        backgroundColor: '#FFFFFF',
        width: 150,
        height: 150,
        borderRadius: 35,
        alignSelf: 'center',
        top: 40
    },
    add: {
        alignItems: 'center',
        top: 50
    },
    texticon: {
        fontSize: 18,
        top: 38,
        height: 48,
        left: 10
    },
    imageic: {
        width: 35,
        height: 35,
    },
    inputname: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        width: 200,
        height: 37,
        left: 45,
        borderRadius: 35,
        top: 32
    },
    input: {
        top: 3,
    },
    inputsex: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        width: 90,
        height: 37,
        left: 45,
        borderRadius: 35,
        top: 32
    },
    inputlo: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        width: 200,
        height: 37,
        left: 45,
        borderRadius: 35,
        top: 32
    },
    inputtel: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        width: 200,
        height: 37,
        left: 45,
        borderRadius: 35,
        top: 32
    },
    buttonfix: {
        flexDirection: 'row',
        justifyContent: 'center',
        top: 120
    },
    button: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        width: 48,
        height: 26,
    },
});

export default EditProfile;