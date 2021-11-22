import React from 'react';
import { StyleSheet, Text, Image, View, Dimensions, ScrollView } from "react-native";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

export function Monitorchart({ navigation }) {

    return (

        <View style={styles.container}>


            <ScrollView>

                <Text style={styles.text}> MONITOR </Text>

                <Image source={require('../imge/IsopodTypeimg/6.png')} style={styles.imageicon} />
                <View style={styles.bname}>
                    <Text style={styles.textb}> Cubaris sp. "Panda King" </Text>
                </View>

                <View>
                    <BarChart
                        data={{
                            labels: ['week 1', 'week 2', 'week 3', 'week 4', 'week 5', 'week 6'],
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 3,
                                        Math.random() * 3,
                                        Math.random() * 3,
                                        Math.random() * 3,
                                        Math.random() * 3,
                                        Math.random() * 3
                                    ],
                                    color: (opacity = 1) => `rgba(0, 181, 201, 1${opacity})`,
                                    strokeWidth: 2
                                },
                            ],
                            legend: ['Cm', 'Week'],
                        }}
                        width={(Dimensions.get('window').width) - 5}
                        height={200}
                        yAxisSuffix="    "
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
                            marginVertical: 40,
                            borderRadius: 8,
                            alignSelf: 'center'
                        }}
                    />
                </View>

                <Image source={require('../imge/IsopodTypeimg/5.png')} style={styles.imageicon2} />
                <View style={styles.bname2}>
                    <Text style={styles.textb}> Cubaris sp. "Amber" </Text>
                </View>

                <View>
                    <BarChart
                        data={{
                            labels: ['week 1', 'week 2', 'week 3', 'week 4', 'week 5', 'week 6'],
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 3,
                                        Math.random() * 3,
                                        Math.random() * 3,
                                        Math.random() * 3,
                                        Math.random() * 3,
                                        Math.random() * 3
                                    ],
                                    color: (opacity = 1) => `rgba(0, 181, 201, 1${opacity})`,
                                    strokeWidth: 2
                                },
                            ],
                            legend: ['Cm', 'Week'],
                        }}
                        width={(Dimensions.get('window').width) - 5}
                        height={200}
                        yAxisSuffix="     "
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
                            // marginVertical: 1,
                            borderRadius: 8,
                            alignSelf: 'center',
                            bottom: 10
                        }}
                    />
                </View>


            </ScrollView>

        </View>



    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC'
    },
    text: {
        fontSize: 35,
        textAlign: 'center',
        top: 10
    },
    imageicon: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        borderRadius: 75,
        top: 20
    },
    bname: {
        backgroundColor: '#F0FFFF',
        width: 200,
        height: 25,
        borderRadius: 35,
        alignSelf: 'center',
        top: 28
    },
    textb: {
        textAlign: 'center',
        margin: 2
    },
    imageicon2: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        borderRadius: 75,
        bottom: 30
    },
    bname2: {
        backgroundColor: '#F0FFFF',
        width: 200,
        height: 25,
        borderRadius: 35,
        alignSelf: 'center',
        bottom: 20
    },
    textb2: {
        textAlign: 'center',
        margin: 2
    },
});

export default Monitorchart;