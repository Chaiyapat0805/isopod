import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, TextInput, Button, View, TouchableOpacity, Alert, } from "react-native";

export function Profile({ navigation }) {

    const [name, setname] = React.useState(0);
    const [gender, setgender] = React.useState(0);
    const [email, setemail] = React.useState(0);
    const [phone, setphone] = React.useState(0);
    // const username = route.params.username;
    const [Namepic, setNamepic] = React.useState(0);

    const getprofile = async () => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");


        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch(`http://203.154.83.69/Show/Register `, requestOptions)
        const result = await response.json();
        console.log(result[0].name)
        setname(result[0].name)
        setgender(result[0].gender)
        setemail(result[0].email)
        setphone(result[0].phone)

    }

    const getImage = async () => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        const response = await fetch(`http://203.154.83.69/Show/Image `, requestOptions)
        const result = await response.json();
        console.log(result[2].Namepic)
        setNamepic(result[2].Namepic)


    }

    useEffect(() => {
        getprofile();
        getImage();
    })

    return (

        <View style={styles.container}>

            <Text style={styles.text}> PROFILE </Text>

            <Image source={require('../imge/Test/arum.png')}style={styles.imagebg} />

            <View style={styles.icon}>

                <Text style={styles.texticon}> <Image source={require('../imge/profile/iconpro.png')}
                    style={styles.imageic} /> Name : {name}</Text>

                <Text style={styles.texticon}> <Image source={require('../imge/profile/iconsex.png')}
                    style={styles.imageic} /> Gender : {gender} </Text>

                <Text style={styles.texticon}> <Image source={require('../imge/profile/iconemail.png')}
                    style={styles.imageic} /> Email :  {email}</Text>

                <Text style={styles.texticon}> <Image source={require('../imge/profile/icontel.png')}
                    style={styles.imageic} /> Tel : {phone} </Text>

            </View>

            <View style={styles.buttonfix}>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Homepage')}>
                    <Text style={{ color: '#000000', fontSize: 13, textAlign: 'center', top: 3 }}> OK </Text>
                </TouchableOpacity>

            </View>

            {/* 
                <View style={styles.buttonfixed}>

                    <TouchableOpacity style={styles.buttoned} onPress={() => navigation.navigate('EditProfile')}>
                        <Text style={{ color: '#000000', fontSize: 13, textAlign: 'center', top: 3 }}> EditProfile </Text>
                    </TouchableOpacity>

                </View> */}

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC'
    },
    icon: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginTop: 28,
        left: 18
    },
    imagebg: {
        width: 150,
        height: 150,
        borderRadius: 15,
        marginTop: 40,
        left: 120
    },
    imageic: {
        width: 35,
        height: 35,
        left: 35
    },
    text: {
        fontSize: 38,
        textAlign: 'center',
        top: 22
    },
    texticon: {
        fontSize: 18,
        width: "100%",
        height: 85,
        textAlign: 'left',
    },
    textbt: {
        fontSize: 13,
        textAlign: "center",
        top: 1.5
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15
    },
    buttonP: {
        backgroundColor: '#fff',
        borderRadius: 15,
        width: 52,
        height: 25,
    },
    buttonfix: {
        flexDirection: 'row',
        justifyContent: 'center',
        top: 50
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 20,
        width: 60,
        height: 25,
    },
    // buttonfixed: {
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     bottom: 45
    // },
    // buttoned: {
    //     backgroundColor: '#fff',
    //     borderRadius: 20,
    //     width: 85,
    //     height: 25,
    // },

});

export default Profile;