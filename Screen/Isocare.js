import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';


export function Isocare({ navigation }) {

    return (

        <View style={styles.container}>

            <Text style={styles.text}> ISOCARE </Text>

            <View style={styles.box1}>

                <Text style={styles.textbox1}> ISOCARE BOX NO.01 </Text>
                <Text style={styles.textbox1_1}>  Type: Cubaris </Text>
                <Text style={styles.textbox1_2}> suitable temperature & humidity  </Text>

                <TouchableOpacity style={styles.buttonicon} onPress={() => navigation.navigate('Isobox1')}  >
                    <Image source={require('../imge/IsopodTypeimg/5.png')} style={styles.imageicon1} />
                </TouchableOpacity>

                <Image source={require('../imge/isocare/icontemp.png')} style={styles.imageicon2} />
                <Text style={styles.texticon2}> 18-28 °C </Text>
                <Image source={require('../imge/isocare/iconhum.png')} style={styles.imageicon3} />
                <Text style={styles.texticon3}> 70-80 % </Text>

            </View>
            <TouchableOpacity style={styles.btnadd1} onPress={() => navigation.navigate('Isocare2')}>
                <Entypo
                    name='new-message'
                    size={20}
                />
            </TouchableOpacity>


            <View style={styles.box2}>

                <Text style={styles.textbox2}> ISOCARE BOX NO.02 </Text>
                <Text style={styles.textbox2_1}>  Type: Porcellio </Text>
                <Text style={styles.textbox2_2}> suitable temperature & humidity  </Text>

                <TouchableOpacity style={styles.buttonicon} onPress={() => navigation.navigate('Isobox2')}  >
                    <Image source={require('../imge/IsopodTypeimg/9.png')} style={styles.imageicon1} />
                </TouchableOpacity>

                <Image source={require('../imge/isocare/icontemp.png')} style={styles.imageicon2} />
                <Text style={styles.texticon2}> 18-28 °C </Text>
                <Image source={require('../imge/isocare/iconhum.png')} style={styles.imageicon3} />
                <Text style={styles.texticon3}> 50-55 % </Text>

            </View>
            <TouchableOpacity style={styles.btnadd2} onPress={() => navigation.navigate('Isocare2')}>
                <Entypo
                    name='new-message'
                    size={20}
                />
            </TouchableOpacity>

            <View style={styles.box3}>

                <Text style={styles.textbox3}> ISOCARE BOX NO.03 </Text>
                <Text style={styles.textbox3_1}>  Type: Armadillidium </Text>
                <Text style={styles.textbox3_2}> suitable temperature & humidity  </Text>

                <TouchableOpacity style={styles.buttonicon} onPress={() => navigation.navigate('Isobox3')}  >
                    <Image source={require('../imge/IsopodTypeimg/7.png')} style={styles.imageicon1} />
                </TouchableOpacity>

                <Image source={require('../imge/isocare/icontemp.png')} style={styles.imageicon2} />
                <Text style={styles.texticon2}> 18-31 °C </Text>
                <Image source={require('../imge/isocare/iconhum.png')} style={styles.imageicon3} />
                <Text style={styles.texticon3}> 60 % </Text>

            </View>

            <TouchableOpacity style={styles.btnadd3} onPress={() => navigation.navigate('Isocare2')}>
                <Entypo
                    name='new-message'
                    size={20}
                />
            </TouchableOpacity>

            <View style={styles.boxadd}>
                <TouchableOpacity style={styles.add} onPress={() => navigation.navigate('Isocare')}>
                    <Icon
                        name='add-outline'
                        size={40} />
                </TouchableOpacity>

            </View>

            <View style={styles.buttonfix}>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Homepage')}>
                    <Text style={{ color: '#000000', fontSize: 13, textAlign: 'center', top: 3 }}> Close </Text>
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
        top: 10
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
        top: 56
    },
    buttonicon: {
        flexDirection: 'row',
        bottom: 15
    },
    box1: {
        backgroundColor: '#F0FFFF',
        width: 345,
        height: 130,
        borderRadius: 35,
        alignSelf: 'center',
        top: 26
    },
    textbox1: {
        fontSize: 18,
        fontWeight: 'bold',
        left: 75,
        margin: 1
    },
    textbox1_1: {
        fontSize: 14,
        left: 84
    },
    textbox1_2: {
        fontSize: 12,
        left: 105,
        top: 16.5
    },
    imageicon1: {
        margin: 15,
        width: 60,
        height: 60,
        borderRadius: 50,
        bottom: 55
    },
    imageicon2: {
        width: 48,
        height: 48,
        left: 100,
        bottom: 68
    },
    texticon2: {
        fontSize: 13,
        left: 135,
        bottom: 105
    },
    imageicon3: {
        width: 20,
        height: 20,
        left: 210,
        bottom: 123
    },
    texticon3: {
        fontSize: 13,
        left: 233,
        bottom: 142
    },
    box2: {
        backgroundColor: '#F0FFFF',
        width: 345,
        height: 130,
        borderRadius: 35,
        alignSelf: 'center',
        top: 32
    },
    textbox2: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 1,
        left: 78
    },
    textbox2_1: {
        fontSize: 14,
        left: 82,
    },
    textbox2_2: {
        fontSize: 12,
        left: 105,
        top: 18
    },
    box3: {
        backgroundColor: '#F0FFFF',
        width: 345,
        height: 130,
        borderRadius: 35,
        alignSelf: 'center',
        top: 40
    },
    textbox3: {
        fontSize: 18,
        fontWeight: 'bold',
        left: 75,
        margin: 1
    },
    textbox3_1: {
        fontSize: 14,
        left: 80
    },
    textbox3_2: {
        fontSize: 12,
        left: 105,
        top: 18
    },
    boxadd: {
        backgroundColor: '#F0FFFF',
        width: 345,
        height: 130,
        borderRadius: 35,
        alignSelf: 'center',
        top: 48
    },
    add: {
        alignItems: 'center',
        top: 40
    },
    btnadd1: {
        alignSelf: 'center',
        left: 145,
        bottom: 90
    },
    btnadd2: {
        alignSelf: 'center',
        left: 145,
        bottom: 78
    },
    btnadd3: {
        alignSelf: 'center',
        left: 145,
        bottom: 68
    },
});
export default Isocare;