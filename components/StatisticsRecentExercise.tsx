import {View, Dimensions, StyleSheet, Text} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import {category} from '../data/data';
import {RecordType, useRecordQuery} from '../query/useRecordQuery';
import {CategoryQueryType, useCategoryQuery} from '../query/useCategoryQuery';
import {useState} from 'react';

const chartConfig = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: '#ffffff',
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `black`,
  strokeWidth: 1,
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

function getCategory(arr: CategoryQueryType[] | undefined) {
  if (!arr) return [];
  const cate = arr.map(item => item.category);
  console.log(cate);
  return arr.map(item => item.category);
}

function getNumberingData(record: RecordType[], cate: string[]) {
  const numbering = cate.map(item => {
    const result = record.filter(reco => reco.category === item);
    return result ? result.length : 0;
  });
  console.log(record);
  return numbering;
}

export default function StatisticsRecentExercise() {
  const {record} = useRecordQuery();
  const {category} = useCategoryQuery();
  if (!record || !category) {
    return (
      <View>
        <Text>loading</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>최근 10일간 각 운동별 횟수</Text>
      <BarChart
        style={styles.chart}
        data={{
          labels: getCategory(category),
          datasets: [
            {
              data: getNumberingData(record, getCategory(category)),
            },
          ],
        }}
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
