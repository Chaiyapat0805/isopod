import React from 'react';
import { StyleSheet, View, Image, Text, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 220, height: 220, margin: 10, bottom: 45}}
          resizeMode= 'contain'
          source={require('./picture/4.png')}/>
        <Text style={{ bottom: 320, fontSize: 25, textAlign: 'center'}}> ISOTYPE </Text>
        <Text style={{ bottom: 55, fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}> Cubaris sp. "Platin" </Text>
        <Text style={{ bottom: 45, fontSize: 15, textAlign: 'center'}}> ลักษณะและการเป็นอยู่ </Text>
        <Text style={{ bottom: 30, fontSize: 15, textAlign: 'center'}}> ขนาด: 1 - 1.2 เซนติเมตร </Text>
        <Text style={{ bottom: 28, fontSize: 15, textAlign: 'center'}}> ความชื้น: 60 - 70 เปอร์เซ็น </Text>
        <Text style={{ bottom: 26, fontSize: 15, textAlign: 'center'}}> อุณหภูมิ: 18 - 28 องศาเซลเซียส </Text>
        <Text style={{ bottom: 14, fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}> อาหาร </Text>
        <Text style={{ bottom: 8, fontSize: 15, textAlign: 'center'}}> ใบไม้แห้ง </Text>
        <Text style={{ bottom: 6, fontSize: 15, textAlign: 'center'}}> กระดองปลาหมึก </Text>
        <Text style={{ bottom: 4, fontSize: 15, textAlign: 'center'}}> อาหารปลา </Text>
        <Text style={{ bottom: 2, fontSize: 15, textAlign: 'center'}}> แตงกวา/แครอท/ฟักทอง </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
  },  
});