import React from 'react';
import { StyleSheet, Text, Image, View, Dimensions } from "react-native";
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

            <Text style={styles.text}> MONITOR </Text>

            <Image source={require('../imge/IsopodTypeimg/6.png')} style={styles.imageicon} />
            <View style={styles.bname}>
                <Text style={styles.textb}> Cubaris sp. "Panda King" </Text>
            </View>

            <View>
                <BarChart
                    data={{
                        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
                        datasets: [{
                            data: [
                                Math.random() * 3,
                                Math.random() * 3,
                                Math.random() * 3,
                                Math.random() * 3,
                                Math.random() * 3,
                                Math.random() * 3
                            ]
                        }],
                        legend: ['Cm', 'Age'],
                    }}
                    width={(Dimensions.get('window').width) - 8}
                    height={225}
                    yAxisSuffix="     "
                    chartConfig={{
                        backgroundColor: '#DCDCDC',
                        backgroundGradientFrom: '#8B8682',
                        backgroundGradientTo: '#8B8682',
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(228, 241, 254, ${opacity})`
                    }}
                    bezier
                    style={{
                        marginVertical: 50,
                        borderRadius: 14,
                        alignSelf: 'center',
                    }}
                />

            </View>








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
        top: 25
    },
    bname: {
        backgroundColor: '#F0FFFF',
        width: 200,
        height: 25,
        borderRadius: 35,
        alignSelf: 'center',
        top: 35
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