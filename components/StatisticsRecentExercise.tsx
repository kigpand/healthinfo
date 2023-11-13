import {View, Dimensions, StyleSheet, Text} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import {category} from '../data/data';

const chartConfig = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: '#ffffff',
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `black`,
  strokeWidth: 1, // optional, default 3
  barPercentage: 1,
};

const data = {
  labels: category,
  datasets: [
    {
      data: [2, 4, 2, 2, 2],
    },
  ],
};

export default function StatisticsRecentExercise() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>최근 10일간 각 운동별 횟수</Text>
      <BarChart
        style={styles.chart}
        data={data}
        width={Dimensions.get('window').width - 30}
        height={200}
        chartConfig={chartConfig}
        yAxisLabel=""
        yAxisSuffix=""
        withInnerLines={false}
        showValuesOnTopOfBars={true}
        // withHorizontalLabels={false}
        fromZero={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 50,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  chart: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
