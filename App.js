import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/*<View>
          <Text>How is your Day</Text>
        </View>//this expected to inherit the parent view style header*/}
        <Text style={styles.textArea}>Welcome to the next step of career with React-Native! A big hello Viswanath.</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  header: {
    backgroundColor: 'blue'
  },
  textArea: {
    padding: 20,
    color: '#fff',
    fontWeight: "bold"
  }
});


//The style of parent div not inherited to the child div. If child is of same component as parent then only the parent style is inherited