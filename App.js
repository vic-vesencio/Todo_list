import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

//custom components
import Tasks from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>ur tasks:</Text>
      </View>
      <View style={styles.tasksContainer}>
        <Tasks props={{taskName: 'task #1'}}></Tasks>
        <Tasks props={{taskName: 'task #2'}}></Tasks>
        <Tasks props={{taskName: 'task #3'}}></Tasks>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}></TextInput>
        <TouchableOpacity style={styles.button}></TouchableOpacity>
      </View>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aquamarine',
  },
  titleContainer:{
    height: '10vh'
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '5%',
    marginBottom: '1%',
  },
  tasksContainer:{
    height: '75vh',
    marginLeft: '10%',
    marginRight: '10%',
  },
  inputContainer:{
    height: '15vh',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: '10%',
    marginRight: '10%',
  },
  input:{
    paddingVertical: 15,
    height: '50%',
    marginTop: 'auto',
    marginBottom: 'auto',
    borderColor: 'blue',
    borderRadius: 5,
    borderWidth: 2,
    width: '80%',
  },
  button:{
    paddingVertical: 15,
    width: '15%',
    marginLeft: 'auto',
    height: '50%',
    backgroundColor: 'pink',
    marginTop: 'auto',
    marginBottom: 'auto',
    borderColor: 'blue',
    borderRadius: 5,
    borderWidth: 2,
    opacity: 0.7,
    borderRadius: 5
  }
});
