import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Center, NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View } from 'react-native';
export const Example = () => {
  return <Button onPress={() => console.log("hello world")}>PRIMARY</Button>
}

export default function App() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Example />
      </Center>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
