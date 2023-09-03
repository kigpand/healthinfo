import {StyleSheet, View} from 'react-native';
import FooterItem from './FooterItem';

const data = ['운동', '기록', '통계', '더보기'];

export default function Footer({navigation}: any) {
  return (
    <View style={styles.container}>
      {data.map((item: string, i: number) => {
        return <FooterItem key={i} title={item} navigation={navigation} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: 'black',
    shadowOpacity: 0.1,
    height: 60,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
});
