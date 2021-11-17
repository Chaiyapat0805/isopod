import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import GridImageView from 'react-native-grid-image-viewer';

export function gallerysocare({ navigation }) {
    return (

        <View style={styles.background}>
            <Text style={styles.headline_text}> Images  </Text>
            <Text style={styles.explore_text}> Click เพื่อดูรูปเต็มๆ </Text>

            <GridImageView data={['https://cdn.discordapp.com/attachments/758697285042438155/890940832373432320/unknown.png',
                'https://cdn.discordapp.com/attachments/758697285042438155/895014945199128596/unknown.png',
                'https://cdn.discordapp.com/attachments/758697285042438155/895014397490135050/unknown.png',
                'https://cdn.discordapp.com/attachments/758697285042438155/895014679280222268/unknown.png',
                'https://cdn.discordapp.com/attachments/758697285042438155/890940850744483850/unknown.png',
                'https://scontent.fbkk12-3.fna.fbcdn.net/v/t1.6435-9/67217377_1269382723221373_3521327584434454528_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFMRIVYyt4BZmFiIl8rsI09uQGoh1Mwt225AaiHUzC3bYUAdeQ8LxLK9jutBpqr_UNXjGpqkI68S5blplQRxL38&_nc_ohc=q7SDpN7d8b0AX8lESTh&_nc_ht=scontent.fbkk12-3.fna&oh=42f2c9303ed97698288bbc7c09465f55&oe=61AFEB86',
                'https://scontent.fbkk12-4.fna.fbcdn.net/v/t1.6435-9/84004388_3031099813600762_4455972816629530624_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGMmSqi7pTsvrD97YWUVjAnKQ9g4Lt8kEApD2Dgu3yQQLO5_mFDKE25GnqUgSDCArMIAafvPKSCxd4gtHl33Wp9&_nc_ohc=1SYKgLRb0XcAX_3ymkI&_nc_ht=scontent.fbkk12-4.fna&oh=72b6a649693ea96fe6e77780180fe0d6&oe=61B21F62',
                'https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.6435-9/125056391_1304960186521000_7634557782303693244_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeH9Wy_kn1XQZYDaQP7yEZBT6tnnym9K96vq2efKb0r3qzCNn0ajfo0jWcbM1g5niRY6WOdMbQnrkJhwe_XkHLny&_nc_ohc=5ADB1SE8NyoAX-PQjDK&tn=DangVi9bl2yMqw8D&_nc_ht=scontent.fbkk12-1.fna&oh=dfcbc5ee68ba155e54798988b14e49a8&oe=61B098C9',
                'https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.6435-9/79981303_2827388933984154_6086279060013449216_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF1NdTjKSGIYpxm_LHpD5NSd-_iKMgO6k537-IoyA7qTmT1B_qAWpqmP-DTXfRrcGBEmZEM0b5AkjXGRTcz6EB0&_nc_ohc=iZtLnEXqlicAX_wdtXV&_nc_ht=scontent.fbkk13-1.fna&oh=d5209ace94d5d44384746136c73fa3e9&oe=61B16FB0',
                'https://scontent.fbkk9-3.fna.fbcdn.net/v/t1.6435-1/c0.38.298.298a/p320x320/125832482_3586835591380168_1146033357218767981_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeFRF5lzRygI03EO8xlnbY0Y0WUbZQCNDw_RZRtlAI0PD5v7wm84weLiMp4YHIu6ggb2LCGIWvY4pOKzJ4SsIYG1&_nc_ohc=Q9h6O2kNOd8AX_0pttM&tn=DangVi9bl2yMqw8D&_nc_ht=scontent.fbkk9-3.fna&oh=1a092ebf4d40a28b9ad4b02060c508f2&oe=61B005C7']} />

{/* 
            <View style={styles.buttonfix}>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Isocare2')}>
                    <Text style={{ color: '#000000', fontSize: 13, textAlign: 'center', top: 1.5 }}> Back </Text>
                </TouchableOpacity>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#000',
        flex: 1
    },
    headline_text: {
        color: '#CCFFFF',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 50,
        marginLeft: 20
    },
    explore_text: {
        marginTop: 5,
        marginBottom: 10,
        color: '#CCFFFF',
        marginLeft: 20,
        fontSize: 13,
        fontWeight: '600'
    },
    button: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        width: 45,
        height: 22,
    },
    buttonfix: {
        flexDirection: 'row',
        justifyContent: 'center',
        bottom: 10
    },
});

export default gallerysocare;