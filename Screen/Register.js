import React, { useEffect } from 'react';
import { ImageBackground, Image, StyleSheet, Text, TextInput, Button, View, TouchableOpacity, Alert } from "react-native";

export function Register({ navigation }) {

    const [username, setusername] = React.useState('');
    const [password, setpassword] = React.useState('');
    const [name, setname] = React.useState('');
    const [gender, setgender] = React.useState('');
    const [email, setemail] = React.useState('');
    const [phone, setphone] = React.useState('');


    const getsignup = async () => {

        if (password == '') {
            return alert('Please write your password.')
        }
        else {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");


            var raw = JSON.stringify(
                {
                    "username": username,
                    "password": password,
                    "name": name,
                    "gender": gender,
                    "email": email,
                    "phone": phone
                }
            )
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            const response = await fetch(`http://203.154.83.69/Create/Register `, requestOptions)
            const result = await response.json();
            console.log(result)

            if (result.password == null & result.password == '') {
                alert('Please write password!!...')
            }
            else {
                Alert.alert('สมัครสมาชิก สำเร็จ');
            }
        }
    }

    return (
        <ImageBackground source={require('../imge/background.png')} style={styles.imagebg}>

            <Text style={styles.textheader}> Sign Up </Text>

            <View style={styles.Container}>
                <Text style={styles.text}> Username :</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setusername}
                    value={username}
                    placeholder='Enter Username'
                />

                <Text style={styles.text}> Password : </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setpassword}
                    value={password}
                    keyboardType='number-pad'
                    placeholder='Enter Password'
                />

                <Text style={styles.text}> Yourname : </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setname}
                    value={name}
                    placeholder='Enter Yourname'
                />

                <Text style={styles.text}> Gender : </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setgender}
                    value={gender}
                    placeholder='Enter Gender'
                />

                <Text style={styles.text}> Email : </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setemail}
                    value={email}
                    keyboardType='email-address'
                    placeholder='Enter Email'
                />

                <Text style={styles.text}> Phone number : </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setphone}
                    value={phone}
                    keyboardType='numeric'
                    placeholder='Enter Phone number'
                />

            </View>

            <View style={styles.button}>
                <TouchableOpacity style={styles.buttonRt} onPress={() => getsignup()} >
                    <Text style={styles.textbt}> Sign Up </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonLi} onPress={() => navigation.navigate('HOME')} >
                    <Text style={styles.textbt}> Back </Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
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
        fontSize: 17,
        top: -20
    },
    textbt: {
        fontSize: 15,
        textAlign: "center",
        top: 8
    },
    textheader: {
        fontSize: 30,
        top: 45,
        textAlign: "center"
    },
    input: {
        alignSelf: 'stretch',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        top: -20,
        marginTop: -5,
        marginBottom: 15
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        top: -60,
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

export default Register;