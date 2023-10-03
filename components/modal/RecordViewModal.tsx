import {StyleSheet, Text, View} from 'react-native';

type Props = {
  modalItem: any;
};

export default function RecordViewModal({modalItem}: Props) {
  return (
    <View style={style.container}>
      <Text>modal</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: '100%',
    height: '100%',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
