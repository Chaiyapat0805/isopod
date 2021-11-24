import React, { useState, useEffect } from 'react';
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


    const [dataChart, setDataChart] = useState([0])
    const [dataChart2 , setDataChart2] = useState("")

    const [dataChart3, setDataChart3] = useState([0])
    const [dataChart4 , setDataChart4] = useState("")
    useEffect(() => {
        getApiData();
        getApiData2();
        const dataInterval = setInterval(() => getApiData(), 6 * 1000);
        const dataInterval2 = setInterval(() => getApiData2(), 6 * 1000);
        return () => {clearInterval(dataInterval),clearInterval(dataInterval2)};
    }, [])
    const getApiData = async () => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const response = await fetch(`http://203.154.83.69/Show/DataT`, requestOptions)
        const result = await response.json()

        for(var i = 10 ; i < 20 ; i++){
        var convert_data = parseInt(result[i].Temperature)
        setDataChart2(result[i].Temperature) 
        console.log("temp : ", convert_data)
        //console.log(typeof (convert_data))
        setDataChart(dataChart => [...dataChart, convert_data]) 
        }
       
    }
    const getApiData2 = async () => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const response = await fetch(`http://203.154.83.69/Show/DataH`, requestOptions)
        const result = await response.json()

        for(var i = 0 ; i < 10 ; i++){
        var convert_data = parseInt(result[i].Humidity)
        setDataChart4(result[i].Humidity) 
        console.log("hum" ,convert_data)
        //console.log(typeof (convert_data))
        setDataChart3(dataChart3 => [...dataChart3, convert_data]) 
        }
       
    }


    const check = () => {
        console.log("length:", dataChart.length);
        var lengthApiData = dataChart.length;
        if (lengthApiData > 7) {
            dataChart.splice(0, 1);
            setDataChart([0]);
            setDataChart2(''); 
            setDataChart3([0]);
            setDataChart4(''); 
            console.log("chart splice: ", dataChart);
            return;
        }
        else {
            console.log('stack not full');
            return;
        }
    }
    check();
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
                                data: dataChart,
                                color: (opacity = 1) => `rgba(0, 181, 201, 1${opacity})`,
                                strokeWidth: 2
                            },
                            {
                                data: dataChart3,
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
                <Text style={styles.temp}> {dataChart2} °C </Text>  
                <AntDesign
                    name='loading1'
                    size={90}
                    color="#99FFCC"
                />
            </View>
            <View style={styles.icoh}>
                <Text style={styles.hum}> {dataChart4} % </Text>
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
