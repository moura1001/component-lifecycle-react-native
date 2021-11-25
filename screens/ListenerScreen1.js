import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { listener } from '../utils/listeners';

export default function ListenerScreen1() {
  const [updateCount, setUpdateCount] = useState(0);

  useEffect(() => {
    const unsubscribe = listener(() => {
      setUpdateCount(currentCount => currentCount + 1);
    });

    return () => {
      unsubscribe();
    };
  }, []);

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