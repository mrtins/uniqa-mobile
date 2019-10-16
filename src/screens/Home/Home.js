import tron from 'reactotron-react-native';
import React, { useState } from 'react';

import { View, Text, Button } from 'react-native';

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Hello World!  {count}</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />
    </View>
  );
}

export default Home;