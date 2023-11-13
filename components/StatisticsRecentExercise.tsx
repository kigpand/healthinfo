import {View, Dimensions, StyleSheet} from 'react-native';
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
      data: [3, 7, 2, 5, 3],
    },
  ],
};

export default function StatisticsRecentExercise() {
  return (
    <View>
      <BarChart
        style={styles.chart}
        data={data}
        width={Dimensions.get('window').width - 50}
        height={250}
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
  chart: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
