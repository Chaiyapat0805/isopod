import React, { useEffect } from 'react'
import { Text, View, StyleSheet, Image, TextInput, Alert, TouchableOpacity } from 'react-native'
import { CheckBox } from 'react-native-elements';


export function Monitorpada({ navigation }) {

    const [Name, setname] = React.useState(0);
    const [Size, setsize] = React.useState(0);
    const [Age, setage] = React.useState(0);

    const getpanda = async () => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch(`http://203.154.83.69/Show/Monitor `, requestOptions)
        const result = await response.json();
        console.log(result[1].Name)
        setname(result[1].Name)
        setsize(result[1].Size)
        setage(result[1].Age)

    }

    useEffect(() => {
        getpanda();
    })


    return (
        <View style={styles.container}>
            <Text style={styles.text}> MONITOR </Text>
            <Image
                style={{ width: 220, height: 220, margin: 10, top: 15, alignSelf: 'center', borderRadius: 20 }}
                resizeMode='contain'
                source={require('../imge/IsopodTypeimg/6.png')} />

            <View style={styles.bname}>
                <Text style={styles.textname}> Name </Text>
                <Text style={{ fontSize: 18, alignSelf: 'center', bottom: 25 }}>
                    {Name}</Text>
            </View>

            <View style={styles.bsize}>
                <Text style={styles.textsize}> Size </Text>
                <Text style={{ fontSize: 18, alignSelf: 'center', bottom: 25 }}>
                    {Size}</Text>
            </View>

            <View style={styles.bage}>
                <Text style={styles.textage}> Age </Text>
                <Text style={{ fontSize: 18, alignSelf: 'center', bottom: 25 }}>
                    {Age}</Text>
            </View>

            <Text style={styles.color}> Color Level </Text>

            <View style={styles.level1}>
            </View>
            <Text style={styles.textle1}>Level 1</Text>

            <View style={styles.level2}>
            </View>
            <Text style={styles.textle2}>Level 2</Text>

            <View style={styles.level3}>
            </View>
            <Text style={styles.textle3}>Level 3</Text>

            <View style={styles.level4}>
            </View>
            <Text style={styles.textle4}>Level 4</Text>

            <View style={styles.level5}>
            </View>
            <Text style={styles.textle5}>Level 5</Text>

            <View style={styles.buttonfix}>

                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('บันทึกสำเร็จ')}>
                    <Text style={{ color: '#000000', fontSize: 13, textAlign: 'center', top: 3 }}> Save </Text>
                </TouchableOpacity>
            </View>

        </View>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAD4BB'
    },
    text: {
        fontSize: 35,
        textAlign: 'center',
        top: 10
    },
    textname: {
        fontSize: 20,
        alignSelf: 'center',
        top: -35
    },
    bname: {
        backgroundColor: '#F0FFFF',
        width: 200,
        height: 25,
        borderRadius: 35,
        alignSelf: 'center',
        top: 55
    },
    textsize: {
        fontSize: 20,
        alignSelf: 'center',
        top: -35
    },
    bsize: {
        backgroundColor: '#F0FFFF',
        width: 100,
        height: 25,
        borderRadius: 35,
        alignSelf: 'center',
        top: 115
    },
    textage: {
        fontSize: 20,
        alignSelf: 'center',
        top: -35
    },
    bage: {
        backgroundColor: '#F0FFFF',
        width: 110,
        height: 25,
        borderRadius: 35,
        alignSelf: 'center',
        top: 170
    },
    color: {
        fontSize: 20,
        alignSelf: 'center',
        top: 190
    },
    level1: {
        backgroundColor: '#FFFCE9',
        width: 25,
        height: 25,
        borderRadius: 20,
        borderWidth: 1,
        top: 200,
        left: 95
    },
    textle1: {
        fontSize: 12,
        top: 200,
        left: 88
    },
    level2: {
        backgroundColor: '#CCC0B3',
        width: 25,
        height: 25,
        borderRadius: 20,
        borderWidth: 1,
        top: 159,
        left: 135
    },
    textle2: {
        fontSize: 12,
        top: 159,
        left: 135
    },
    level3: {
        backgroundColor: '#B9B1A9',
        width: 25,
        height: 25,
        borderRadius: 20,
        borderWidth: 1,
        top: 118,
        left: 178
    },
    textle3: {
        fontSize: 12,
        top: 118,
        left: 178
    },
    level4: {
        backgroundColor: '#AFA9A4',
        width: 25,
        height: 25,
        borderRadius: 20,
        borderWidth: 1,
        top: 77,
        left: 222
    },
    textle4: {
        fontSize: 12,
        top: 77,
        left: 222
    },
    level5: {
        backgroundColor: '#99938D',
        width: 25,
        height: 25,
        borderRadius: 20,
        borderWidth: 1,
        top: 36,
        left: 265
    },
    textle5: {
        fontSize: 12,
        top: 36,
        left: 265
    },
    button: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        width: 46,
        height: 24
    },
    buttonfix: {
        flexDirection: 'row',
        justifyContent: 'center',
        top: 80
    },
});

export default Monitorpada;
