import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';

export function Monitor({ navigation }) {

    function goToPicker() {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log('image console ==>', image);
        })
    }

    const [name, setname] = React.useState('');
    const [size, setsize] = React.useState('');
    const [age, setage] = React.useState('');
    const [detail, setdetail] = React.useState('');

    const [Namepic, setNamepic] = React.useState('');

    const getmonitor = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(
            {
                "Name": name,
                "Size": size,
                "Age": age,
                "Detail": detail
            }
        )
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        const response = await fetch(`http://203.154.83.69/Create/Monitor `, requestOptions)
        const result = await response.json();
        console.log(result)

    }

    const getImage = async () => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(
            {
                "Namepic": Namepic
            }
        )
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        const response = await fetch(`http://203.154.83.69/Create/Inputimges`, requestOptions)
        const result = await response.json();
        console.log(result)

    }

    return (

        <View style={styles.container}>

            <Text style={styles.text}> MONITOR </Text>

            <View style={styles.btnadd}>
                <TouchableOpacity style={styles.add} onPress={() => goToPicker()}>
                    <Icon
                        name='add-outline'
                        size={40} />
                </TouchableOpacity>
            </View>
            <View style={styles.inputname}>
                <Text style={styles.name}>
                    Name </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setname}
                    value={name}
                // placeholder='Enter Name'
                />
            </View>
            <View style={styles.inputSize}>
                <Text style={styles.size}>
                    Size : cm </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setsize}
                    value={size}
                    keyboardType='numeric'
                //placeholder='Enter Size'
                />
            </View>
            <View style={styles.inputAge}>
                <Text style={styles.age}>
                    Age </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setage}
                    value={age}
                    keyboardType='numeric'
                // placeholder='Enter Age'
                />
            </View>
            <View style={styles.inputDetail}>
                <Text style={styles.detail}>
                    Other </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setdetail}
                    value={detail}
                //placeholder='Enter Detail'
                />
            </View>

            <View style={styles.buttonfix}>

                <TouchableOpacity style={styles.button}
                    onChangeText={setNamepic}
                    value={Namepic}
                    onPress={() => getmonitor(), () => getImage()}>

                    <Text style={{ color: '#000000', fontSize: 13, textAlign: 'center', top: 3 }}> Save </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Monitor2')}>
                    <Text style={{ color: '#000000', fontSize: 13, textAlign: 'center', top: 3 }}> Next </Text>
                </TouchableOpacity>
            </View>
        </View>
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
        top: 22
    },
    button: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        width: 48,
        height: 26,
        right: 40
    },
    button2: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        width: 48,
        height: 26,
        left: 40
    },
    buttonfix: {
        flexDirection: 'row',
        justifyContent: 'center',
        top: 238
    },
    btnadd: {
        backgroundColor: '#FFFFFF',
        width: 196,
        height: 200,
        borderRadius: 35,
        alignSelf: 'center',
        top: 40
    },
    add: {
        alignItems: 'center',
        top: 75
    },
    name: {
        fontSize: 19,
        alignSelf: 'center',
        bottom: 39,
    },
    inputname: {
        backgroundColor: '#FFFFFF',
        width: 200,
        height: 36,
        borderRadius: 35,
        alignSelf: 'center',
        top: 88
    },
    size: {
        fontSize: 19,
        alignSelf: 'center',
        bottom: 40,
    },
    inputSize: {
        backgroundColor: '#FFFFFF',
        width: 100,
        height: 36,
        borderRadius: 35,
        alignSelf: 'center',
        top: 138
    },
    age: {
        fontSize: 19,
        alignSelf: 'center',
        bottom: 36,
    },
    inputAge: {
        backgroundColor: '#FFFFFF',
        width: 100,
        height: 36,
        borderRadius: 35,
        alignSelf: 'center',
        top: 180
    },
    detail: {
        fontSize: 19,
        alignSelf: 'center',
        bottom: 34,
    },
    inputDetail: {
        backgroundColor: '#FFFFFF',
        width: 210,
        height: 88,
        borderRadius: 20,
        alignSelf: 'center',
        top: 225
    },
    input: {
        alignSelf: 'center',
        top: -25,
    }

});

export default Monitor;

