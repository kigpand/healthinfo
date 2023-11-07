import {Pressable, StyleSheet, Text, View} from 'react-native';
import {falseColor, trueColor} from '../style/color';

type Props = {
  onPlaySubmit: () => void;
  onNoSubmit: () => void;
};

export default function AddNewDataSubmitBtns({
  onPlaySubmit,
  onNoSubmit,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>운동을 바로 시작하시겠습니까?</Text>
        <View style={styles.buttons}>
          <Pressable style={styles.button} onPress={onPlaySubmit}>
            <Text style={styles.yesBtn}>네</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={onNoSubmit}>
            <Text style={styles.noBtn}>아니오</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: 'white',
    borderRadius: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttons: {
    marginTop: 30,
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    overflow: 'hidden',
    borderRadius: 8,
  },
  yesBtn: {
    width: 80,
    paddingVertical: 10,
    backgroundColor: trueColor,
    color: 'white',
    textAlign: 'center',
  },
  noBtn: {
    width: 80,
    paddingVertical: 10,
    backgroundColor: falseColor,
    color: 'white',
    textAlign: 'center',
  },
});
