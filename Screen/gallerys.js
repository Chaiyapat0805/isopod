// import React from 'react';
// import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import GridImageView from 'react-native-grid-image-viewer';

// export function gallerys({ navigation }) {
//     return (

//         <View style={styles.background}>
//             <Text style={styles.headline_text}> Images ISOPOD </Text>
//             <Text style={styles.explore_text}> Click เพื่อดูรูปเต็มๆของน้อง ISOPOD </Text>

//             <GridImageView data={['https://i2.wp.com/www.isopodapet.com/wp-content/uploads/2019/12/IMG_1507.jpg?fit=1024%2C768&ssl=1',
//                 'https://i0.wp.com/isopodapet.com/wp-content/uploads/2019/12/IMG_1252.jpg?fit=1726%2C1294&ssl=1',
//                 'https://cdn.shopify.com/s/files/1/0107/5501/4715/products/IMG_4226_803x700.jpg?v=1609734712',
//                 'https://preview.redd.it/3obnfe1lr1i31.jpg?auto=webp&s=4a5ef66d0f6ad8845feb5a3a76d9e25462442275',
//                 'https://cf.shopee.co.th/file/8650f1b7bad0fd5276f0f590ebbe3527',
//                 'https://cdn.shopify.com/s/files/1/0364/0072/6152/products/Porcellio-laevis-Orange-Isopod-1.jpg?v=1587676983']} />


//             {/* <View style={styles.buttonfix}>

//                 <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Monitor')}>
//                     <Text style={{ color: '#000000', fontSize: 13, textAlign: 'center', top: 1.5 }}> Back </Text>
//                 </TouchableOpacity>
//             </View> */}
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     background: {
//         backgroundColor: '#000',
//         flex: 1
//     },
//     headline_text: {
//         color: '#CCFFFF',
//         fontSize: 30,
//         fontWeight: 'bold',
//         marginTop: 50,
//         marginLeft: 20
//     },
//     explore_text: {
//         marginTop: 5,
//         marginBottom: 10,
//         color: '#CCFFFF',
//         marginLeft: 20,
//         fontSize: 13,
//         fontWeight: '600'
//     },
//     button: {
//         backgroundColor: '#FFFFFF',
//         borderRadius: 20,
//         width: 45,
//         height: 22,
//     },
//     buttonfix: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         bottom: 10
//     },
// });

// export default gallerys;


import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

class gallerys extends Component {
  constructor(props) {
    super(props);
    this.state = {
        image : '',
    };
  }

  render() {
    return (
      <View>
          <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
              <TouchableOpacity
              onPress={()=> goToPicker()}
              style={{
                  height: 100,
                  width: 100,
                  borderRadius: 100,
                  backgroundColor: 'green',
              }}
              />
          </View>
      </View>
    );
  }
}

function goToPicker(){
    ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,       
    }).then(image => {
        console.log('image console ==>', image);
    })
}

export default gallerys;
