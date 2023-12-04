import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AdminLoginModal from '../components/modal/AdminLoginModal';

export default function Other() {
  const [adminLoginModal, setAdminLoginModal] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <Text>other</Text>
      <Text onPress={() => setAdminLoginModal(true)}>관리자 로그인</Text>
      {adminLoginModal && (
        <AdminLoginModal handleCloseModal={() => setAdminLoginModal(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
