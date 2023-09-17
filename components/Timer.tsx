import {Modal, StyleSheet, Text, View} from 'react-native';
import {backgroundColor} from '../style/color';
import {useEffect, useState} from 'react';
import {useInterval} from '../hooks/useInterval';

type Props = {
  timer: number;
  closeView: () => void;
};

export default function Timer({timer, closeView}: Props) {
  const [time, setTime] = useState<number>(timer);

  useInterval(
    () => {
      setTime(time - 1);
    },
    time !== 0 ? 1000 : null,
  );

  useEffect(() => {
    if (time === 0) {
      closeView();
    }
  }, [time]);

  return (
    <View style={style.modal}>
      <Text style={style.text}>{time}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  modal: {
    width: '100%',
    height: '100%',
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: backgroundColor,
  },
  text: {
    fontSize: 70,
    fontWeight: '700',
  },
});
