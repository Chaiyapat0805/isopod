import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert } from 'react-native';

export function MagicPotion({ navigation }) {
  return (

    <View style={styles.container}>

      <Image
        style={{ width: 220, height: 220, margin: 10, bottom: 25 }}
        resizeMode='contain'
        source={require('../imge/IsopodTypeimg/7.png')} />
      <Text style={{ bottom: 310, fontSize: 25, textAlign: 'center' }}> ISOTYPE </Text>
      <Text style={{ bottom: 55, fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}> Armadillidium "Magic Potion" </Text>
      <Text style={{ bottom: 45, fontSize: 16, textAlign: 'center' }}> ลักษณะและการเป็นอยู่ </Text>
      <Text style={{ bottom: 28, fontSize: 16, textAlign: 'center' }}> ขนาด: 2 เซนติเมตร </Text>
      <Text style={{ bottom: 27, fontSize: 16, textAlign: 'center' }}> ความชื้น: 60 เปอร์เซ็น </Text>
      <Text style={{ bottom: 26, fontSize: 16, textAlign: 'center' }}> อุณหภูมิ: 18 - 31 องศาเซลเซียส </Text>
      <Text style={{ bottom: 10, fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}> อาหาร </Text>
      <Text style={{ bottom: 7, fontSize: 16, textAlign: 'center' }}> ใบไม้แห้ง </Text>
      <Text style={{ bottom: 6, fontSize: 16, textAlign: 'center' }}> กระดองปลาหมึก </Text>
      <Text style={{ bottom: 5, fontSize: 16, textAlign: 'center' }}> อาหารปลา </Text>
      <Text style={{ bottom: 4, fontSize: 16, textAlign: 'center' }}> แตงกวา/แครอท/ฟักทอง </Text>

      <View style={styles.buttonfix}>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('selecisopod')}>
          <Text style={{ color: '#000000', fontSize: 15, textAlign: 'center', top: 8 }}> Close </Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    width: 58,
    height: 38
  },
  buttonfix: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: 26
  },
});

export default MagicPotion;