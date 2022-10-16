import React, { useState } from 'react';

import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'rozen', key: '1' },
    { name: 'ganjhi', key: '2' },
    { name: 'sanim', key: '3' },
    { name: 'tanjim', key: '4' },
    { name: 'maya', key: '5' },
    { name: 'minha', key: '6' },
    { name: 'warnaz', key: '7' },
    { name: 'Wakil', key: '8' },

  ]);
  return (
    <View style={styles.container}>
      <FlatList

        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>

        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'green',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  }
});
