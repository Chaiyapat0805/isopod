import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert } from 'react-native';

export function selecisopod({ navigation }) {
    return (
      <View style={styles.container}>

        <View>

            <Text style={{ bottom: -30, fontSize: 24, textAlign: 'center', justifyContent: 'center'}}> ISOTYPE </Text> 

        </View>

        <View style={styles.button}>

            <TouchableOpacity style={styles.buttonicon} onPress={() =>  navigation.navigate('Dakmill')}  >
                <Image source={require('../imge/IsopodTypeimg/1.png')} style={styles.imageicon} />  
                <Text style={{fontSize: 14, textAlign: 'center'}}> Cubaris sp. "Dakmill" </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonicon} onPress={() =>  navigation.navigate('DairyCow')}  >
                <Image style={styles.imageicon} source={require('../imge/IsopodTypeimg/2.png')}/>
                <Text style={{fontSize: 14,  textAlign: 'center'}}> Porcellio laevis "DairyCow" </Text>
            </TouchableOpacity>

        </View>

        <View style={styles.button}>

            <TouchableOpacity style={styles.buttonicon} onPress={() =>  Alert.alert('รอ Update3')}  >
                <Image style={styles.imageicon} source={require('../imge/IsopodTypeimg/3.png')}/>
                <Text style={{fontSize: 14,  textAlign: 'center'}}>  Cubaris sp. "Murina" </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonicon} onPress={() =>  Alert.alert('รอ Update4')}  >
                <Image style={styles.imageicon} source={require('../imge/IsopodTypeimg/4.png')}/>
                <Text style={{fontSize: 14, textAlign: 'center'}}>  Cubaris sp. "Platin" </Text>
            </TouchableOpacity>

        </View>  

        <View style={styles.button}>

            <TouchableOpacity style={styles.buttonicon} onPress={() =>  Alert.alert('รอ Update5')}  >        
                <Image style={styles.imageicon} source={require('../imge/IsopodTypeimg/4.png')}/> 
                <Text style={{fontSize: 14, textAlign: 'center'}}> Cubaris sp. "Amber Ducky" </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonicon} onPress={() =>  Alert.alert('รอ Update6')}  >
                <Image style={styles.imageicon} source={require('../imge/IsopodTypeimg/4.png')}/> 
                <Text style={{fontSize: 14, textAlign: 'center'}}> Cubaris sp. "Panda King" </Text>
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
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10,
        marginTop: 55
    },
});

export default selecisopod;