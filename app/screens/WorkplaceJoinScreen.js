import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function WorkplaceJoinScreen({ navigation }) {
  const [code, setCode] = useState('');

  const handleJoin = () => {
    if (code.trim() === '') {
      alert('코드를 입력해주세요.');
      return;
    }
    alert(`근무지 코드 "${code}"로 가입 요청을 보냈습니다.`);
    navigation.navigate('WorkplaceSelect');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back-outline"
          size={26}
          color="#333"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerText}>근무지 가입</Text>
        <View style={{ width: 26 }} />
      </View>

      <TextInput
        placeholder="코드 입력"
        value={code}
        onChangeText={setCode}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleJoin}>
        <Text style={styles.buttonText}>가입요청</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8FA', paddingHorizontal: 20, paddingTop: 80 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  headerText: { fontSize: 20, fontWeight: '700', color: '#333' },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
