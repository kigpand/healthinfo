import {useEffect, useRef} from 'react';
import {Animated, Button, View} from 'react-native';

type Props = {
  closeView: () => void;
};

export default function NewDataModalTitle({closeView}: Props) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // 어떤 값으로 변경할지 - 필수
      duration: 1000, // 애니메이션에 걸리는 시간(밀리세컨드) - 기본값 500
      // delay: 0, // 딜레이 이후 애니메이션 시작 - 기본값 0
      useNativeDriver: true, // 네이티브 드라이버 사용 여부 - 필수
      // isInteraction: true, // 사용자 인터랙션에 의해 시작한 애니메이션인지 지정 - 기본값 true
      // easing: Easing.inOut(Easing.ease), // 애니메이션 속서 변경 함수 - 기본값 Easing.inOut(Easing.ease)
    }).start();
  }, [fadeAnim]);
  return (
    <Animated.View style={{opacity: fadeAnim}}>
      <Button title="FadeIn" onPress={closeView} />
    </Animated.View>
  );
}
