import {StyleSheet, View} from 'react-native';
import FooterItem from './FooterItem';

const data = [
  {title: '홈', link: 'Home'},
  {title: '기록', link: 'Record'},
  {title: '통계', link: 'Statistics'},
  {title: '더보기', link: 'Other'},
];

export default function Footer() {
  return (
    <View style={styles.container}>
      {data.map((item, i: number) => {
        return <FooterItem key={i} title={item.title} link={item.link} />;
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
