// src/screens/Analytics/index.js
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';
import styles from './styles';

const screenWidth = Dimensions.get("window").width;

export default function AnalyticsScreen() {
  const [earningsData, setEarningsData] = useState({
    labels: [],
    datasets: [{ data: [] }]
  });
  const [usageData, setUsageData] = useState({
    labels: [],
    datasets: [{ data: [] }]
  });

  useEffect(() => {
    // Fetch analytics data from API
    // This is a placeholder. Replace with actual API call.
    setEarningsData({
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [{ data: [20000, 45000, 28000, 80000, 99000, 43000] }]
    });
    setUsageData({
      labels: ["Station 1", "Station 2", "Station 3", "Station 4", "Station 5"],
      datasets: [{ data: [20, 45, 28, 80, 99] }]
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      // src/screens/Analytics/index.js (continued)
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Monthly Earnings</Text>
        <LineChart
          data={earningsData}
          width={screenWidth - 40}
          height={220}
          yAxisLabel="₹"
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={styles.chart}
        />
      </View>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Station Usage</Text>
        <BarChart
          data={usageData}
          width={screenWidth - 40}
          height={220}
          yAxisLabel="hrs"
          chartConfig={{
            backgroundColor: '#307ecc',
            backgroundGradientFrom: '#4287f5',
            backgroundGradientTo: '#307ecc',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          style={styles.chart}
        />
      </View>
    </ScrollView>
  );
}