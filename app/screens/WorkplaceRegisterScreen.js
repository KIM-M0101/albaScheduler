import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function WorkplaceRegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back-outline"
          size={26}
          color="#333"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerText}>근무지 등록</Text>
        <View style={{ width: 26 }} />
      </View>

      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.optionCard}>
          <Ionicons name="home-outline" size={36} color="#007AFF" />
          <Text style={styles.optionText}>근무지 생성</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionCard}
          onPress={() => navigation.navigate('WorkplaceJoin')}
        >
          <Ionicons name="mail-outline" size={36} color="#007AFF" />
          <Text style={styles.optionText}>근무지 가입</Text>
        </TouchableOpacity>
      </View>
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
  optionContainer: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 40 },
  optionCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  optionText: { marginTop: 10, fontSize: 16, fontWeight: '600', color: '#333' },
});
