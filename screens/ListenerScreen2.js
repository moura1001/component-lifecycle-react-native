import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { listener2 } from '../utils/listeners';

export default function ListenerScreen2() {
  const [updateCount, setUpdateCount] = useState(0);
  const [listenerName, setListenerName] = useState("cat");

  useEffect(() => {
    setUpdateCount(0);

    const unsubscribe = listener2(listenerName, () => {
      setUpdateCount(currentCount => currentCount + 1);
    });

    return () => {
      unsubscribe();
    };
  }, [listenerName]);

  return (
    <View style={styles.container}>
      <Text>The listener has updated {updateCount} time(s).</Text>
      <Text>Currently listening to the {listenerName} listener.</Text>

      <Button
        title="Change Listener Name"
        onPress={() => {
          setListenerName((value) => {
            if (value === "cat") {
              return setListenerName("dog");
            }

            return setListenerName("cat");
          });
        }}
      />
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