import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function WorkplaceSelectScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>근무지</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('WorkplaceRegister')}
      >
        <Text style={styles.plus}>＋</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F7F8FA' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  addButton: {
    backgroundColor: '#fff',
    width: 100,
    height: 100,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  plus: { fontSize: 50, color: '#555' },
});
