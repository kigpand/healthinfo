import {Pressable, StyleSheet, Text, View} from 'react-native';
import {falseColor, trueColor} from '../../style/color';

type Props = {
  handleSubmitBtn: () => void;
  closeView: () => void;
};

export default function AddNewDataCheckModal({
  handleSubmitBtn,
  closeView,
}: Props) {
  function handleYesButton() {
    handleSubmitBtn();
    closeView();
  }
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>더 이상 추가할 루틴이 없으신가요?</Text>
        <View style={styles.btns}>
          <Pressable style={styles.yesBtn}>
            <Text
              style={{color: 'white', textAlign: 'center'}}
              onPress={handleYesButton}>
              예
            </Text>
          </Pressable>
          <Pressable style={styles.noBtn} onPress={closeView}>
            <Text style={{color: 'white', textAlign: 'center'}}>아니오</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  body: {
    width: '70%',
    padding: 20,
    borderRadius: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  btns: {
    marginTop: 40,
    flexDirection: 'row',
    gap: 20,
  },
  yesBtn: {
    backgroundColor: trueColor,
    width: 50,
    paddingVertical: 8,
  },
  noBtn: {
    width: 50,
    paddingVertical: 8,
    backgroundColor: falseColor,
  },
});
