import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, Alert, Dimensions } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

export function Isobox1({ navigation }) {

    return (

        <View style={styles.container}>

            <Text style={styles.text}> ISOCARE </Text>

            <View style={styles.box}>

                <Image source={require('../imge/IsopodTypeimg/5.png')} style={styles.imageicon} />

                <Text style={styles.textbox}> Cubaris BOX </Text>
                <Text style={styles.texttype}> suitable temperature & humidity  </Text>

                <Image source={require('../imge/isocare/icontemp.png')} style={styles.imageicon1} />
                <Text style={styles.texttemp}> 18-28 °C </Text>

                <Image source={require('../imge/isocare/iconhum.png')} style={styles.imageicon2} />
                <Text style={styles.texthum}> 70-80 % </Text>

            </View>
            <View style={styles.chart}>
                <LineChart
                    data={{
                        labels: ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'],
                        datasets: [
                            {
                                data: [
                                    Math.random() * 28,
                                    Math.random() * 28,
                                    Math.random() * 28,
                                    Math.random() * 28,
                                    Math.random() * 28,
                                    Math.random() * 28,
                                    Math.random() * 28
                                ],
                                color: (opacity = 1) => `rgba(0, 181, 201, 1${opacity})`,
                                strokeWidth: 2
                            },
                            {
                                data: [
                                    Math.random() * 80,
                                    Math.random() * 80,
                                    Math.random() * 80,
                                    Math.random() * 80,
                                    Math.random() * 80,
                                    Math.random() * 80,
                                    Math.random() * 80
                                ],
                                color: (opacity = 1) => `rgba(65, 131, 215, 1${opacity})`,
                                strokeWidth: 2
                            },
                        ],
                        legend: ['Temp', 'Hum'],
                    }}
                    width={(Dimensions.get('window').width) - 20}
                    height={200}
                    chartConfig={{
                        backgroundGradientFrom: '#8B8682',
                        backgroundGradientTo: '#8B8682',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                    }}
                    bezier
                    style={{
                        marginVertical: 2.5,
                        borderRadius: 25
                    }}
                />

            </View>

            <View style={styles.icot}>
                <Text style={styles.temp}> 28 °C </Text>
                <AntDesign
                    name='loading1'
                    size={90}
                    color="#99FFCC"
                />
            </View>
            <View style={styles.icoh}>
                <Text style={styles.hum}> 70 % </Text>
                <AntDesign
                    name='loading1'
                    size={90}
                    color="#66CCFF"
                />
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
    box: {
        backgroundColor: '#F0FFFF',
        width: 345,
        height: 200,
        borderRadius: 35,
        alignSelf: 'center',
        top: 75
    },
    imageicon: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: 150,
        height: 150,
        borderRadius: 75,
        bottom: 45
    },
    textbox: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        bottom: 38
    },
    texttype: {
        fontSize: 14,
        alignSelf: 'center',
        bottom: 35
    },
    imageicon1: {
        width: 48,
        height: 48,
        left: 85,
        bottom: 38
    },
    texttemp: {
        fontSize: 13,
        left: 120,
        bottom: 75
    },
    imageicon2: {
        width: 20,
        height: 20,
        left: 188,
        bottom: 94
    },
    texthum: {
        fontSize: 13,
        left: 210,
        bottom: 112
    },
    chart: {
        flex: 1,
        margin: 10,
        top: 190,
    },
    icot: {
        bottom: 165,
        left: 75,

    },
    icoh: {
        bottom: 285,
        left: 230
    },
    temp: {
        fontSize: 20,
        top: 55,
        left: 12
    },
    hum: {
        fontSize: 20,
        top: 55,
        left: 15
    }
});

export default Isobox1;
