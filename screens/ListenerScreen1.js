import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ListenerScreen1() {
  const [updateCount, setUpdateCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>The listener has updated {updateCount} time(s).</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});