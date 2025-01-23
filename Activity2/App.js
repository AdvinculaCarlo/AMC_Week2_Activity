import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInANest = () => {
  const [titleText, setTitleText] = useState("Carlo");
  const bodyText = 'Hello';

  const onPressTitle = () => {
    setTitleText("Advincula"
     + '\n' + 'I`am a student from Global Reciprocal Colleges from the course of Bachelor of Science in Information Technology');
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}
          style={{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
        <Text style={styles.baseText}
          style={{
          textAlign: 'center',
          }}>
          <Text style={styles.titleText} onPress={onPressTitle}>
            {titleText}
            {'\n'}
            {'\n'}
          </Text>
          <Text numberOfLines={5}>{bodyText}</Text>
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TextInANest;