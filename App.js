import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [name, setName] = useState('Viswanath');
  const [age, setAge] = useState(25);

  const [persons,setPersons] = useState([
      {name:'Naveen', age: 29},
      {name:'Sasanka', age: 24},
      {name: "Sarma", age: 24}
    ])

  /*setTimeout(async => {
    setName('Viswanath Sarma');
  },10000);*/

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.header}>
        {/*<View>
          <Text>How is your Day</Text>
        </View>//this expected to inherit the parent view style header*/}
        <Text style={styles.textArea}>Welcome to the next step of career with React-Native! A big hello {name} and Your Age is {age}.</Text>
        {/*Reason for embeding inside View is we can't add the style propert to the button*/}
      </View>
      {persons.map((item,index) => {
        return (
          <View key={index} style={{maxWidth: 200, maxHeight: 200}}>
            <Text style = {styles.lists} onPress = {()=>{setName(item.name)}}>{item.name}</Text>
          </View>
        )
      })}
      <View style={styles.buttonContainer}>
          <Text>Enter Name:</Text>
          <TextInput style={styles.inputTextBox} 
            placeholder={"Enter Your Name"} 
            onChangeText={(val)=>{setName(val)}}/>
          <Text>Enter Age:</Text>
          <TextInput style={styles.inputTextBox} 
            keyboardType="numeric"
            placeholder={"Enter Your Age"} 
            onChangeText={(val)=>{setAge(val)}}/>
          <Button title={'Update Name'} onPress={()=>{setName('Viswanath Sarma Allamraju')}}/>
        </View>
      <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    padding: 25,
    paddingTop: 40,
    paddingHorizontal: 25
  },
  header: {
    backgroundColor: 'blue'
  },
  textArea: {
    padding: 20,
    color: '#fff',
    fontWeight: "bold"
  },
  buttonContainer: {
    padding: 20,
    marginTop: 20,
    marginBottom: 20
  },
  inputTextBox: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 10,
    marginBottom: 20
  },
  lists: {
    backgroundColor: 'pink',
    padding: 25,
    marginTop: 15
  }
});


//The style of parent div not inherited to the child div. If child is of same component as parent then only the parent style is inherited