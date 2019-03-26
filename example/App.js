/* eslint-disable no-useless-concat, no-unused-vars */
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import useLinking from '@rnhooks/linking';

const URL = 'https://github.com/react-native-hooks/linking';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

function App() {
  const [url, openUrl, error] = useLinking();
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>@rnhooks/linking</Text>
      <Text style={styles.instructions}>Linking URL</Text>
      <Text style={styles.instructions}>{url || error}</Text>
      <Button title="Update" onPress={() => openUrl(URL)} />
    </View>
  );
}

export default App;
