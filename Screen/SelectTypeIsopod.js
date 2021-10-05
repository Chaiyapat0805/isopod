import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert } from 'react-native';

export function selecisopod({ navigation }) {
    return (
        <View style={styles.container}>

            <View>

                <Text style={{ bottom: -30, fontSize: 24, textAlign: 'center', justifyContent: 'center' }}> ISOTYPE </Text>

            </View>

            <View style={styles.button}>

                <TouchableOpacity style={styles.buttonicon} onPress={() => navigation.navigate('MagicPotion')}  >
                    <Image source={require('../imge/IsopodTypeimg/7.png')} style={styles.imageicon} />
                    <Text style={{ fontSize: 14, textAlign: 'center' }}> Armadillidium "Magic Potion" </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonicon} onPress={() => navigation.navigate('Marbleized')}  >
                    <Image style={styles.imageicon} source={require('../imge/IsopodTypeimg/8.png')} />
                    <Text style={{ fontSize: 14, textAlign: 'center' }}> Armadilliduim "Marbleized" </Text>
                </TouchableOpacity>

            </View>

            <View style={styles.button}>

                <TouchableOpacity style={styles.buttonicon} onPress={() => navigation.navigate('GiantOrange')}  >
                    <Image style={styles.imageicon} source={require('../imge/IsopodTypeimg/9.png')} />
                    <Text style={{ fontSize: 14, textAlign: 'center' }}>  Porcellio laevis "Giant Orange" </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonicon} onPress={() => navigation.navigate('DairyCow')}  >
                    <Image style={styles.imageicon} source={require('../imge/IsopodTypeimg/2.png')} />
                    <Text style={{ fontSize: 14, textAlign: 'center' }}>  Porcellio laevis "Dairy Cow" </Text>
                </TouchableOpacity>

            </View>

            <View style={styles.button}>

                <TouchableOpacity style={styles.buttonicon} onPress={() => navigation.navigate('Amber')}  >
                    <Image style={styles.imageicon} source={require('../imge/IsopodTypeimg/5.png')} />
                    <Text style={{ fontSize: 14, textAlign: 'center' }}> Cubaris sp. "Amber" </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonicon} onPress={() => navigation.navigate('PandaKing')}  >
                    <Image style={styles.imageicon} source={require('../imge/IsopodTypeimg/6.png')} />
                    <Text style={{ fontSize: 14, textAlign: 'center' }}> Cubaris sp. "PandaKing" </Text>
                </TouchableOpacity>

            </View>

            <View style={styles.buttonfix}>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Homepage')}>
                    <Text style={{ color: '#000000', fontSize: 15, textAlign: 'center', top: 5 }}> Back </Text>
                </TouchableOpacity>
            </View>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC'
    },
    buttonicon: {
        backgroundColor: '#DCDCDC',
        width: 130,
        height: 130
    },
    imageicon: {
        width: 130,
        height: 130,
        borderRadius: 25
    },
    button: {
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10,
        marginTop: 55
    },
});

export default selecisopod;