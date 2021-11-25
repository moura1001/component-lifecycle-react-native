import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ListenerScreen2() {
  const [updateCount, setUpdateCount] = useState(0);
  const [listenerName, setListenerName] = useState("cat");

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