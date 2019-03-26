# @rnhooks/linking [![Build Status](https://travis-ci.com/react-native-hooks/linking.svg?branch=master)](https://travis-ci.com/react-native-hooks/linking) [![Maintainability](https://api.codeclimate.com/v1/badges/6bbe140d757ff4365dfe/maintainability)](https://codeclimate.com/github/react-native-hooks/linking/maintainability)

> React Native hook for [Linking](https://facebook.github.io/react-native/docs/linking#docsNav)

### Installation

```bash
yarn add @rnhooks/linking
```

### Usage

```js
import useLinking from '@rnhooks/linking';

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
```

### Output

| Name    | Default     | Type     | Description                                    |
| ------- | ----------- | --------:| ---------------- |
| url     | `null`      | string   | Linking URL      |
| openUrl | `() => {}`  | function | Open Linking URL |
| error   | `null`      | string   | Error            |

