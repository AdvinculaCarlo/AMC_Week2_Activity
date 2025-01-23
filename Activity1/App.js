import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.dIIUWk4ivfyoZzFcDvqa_QHaH6?w=173&h=184&c=7&r=0&o=5&pid=1.7',
          }}
          style={{width: 200, height: 200, justifyContent: 'center', alignItems: 'center'}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
};

export default App;