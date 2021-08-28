import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//custom components
import Tasks from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}><b>ur tasks:</b></Text>
      <View style={styles.tasksContainer}>
        <Tasks props={{taskName: 'task #1'}}></Tasks>
        <Tasks props={{taskName: 'task #2'}}></Tasks>
        <Tasks props={{taskName: 'task #3'}}></Tasks>
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
  title:{
    fontSize: 24,
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '5%',
    marginBottom: '1%',
  },
  tasksContainer:{
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '1%',
    marginBottom: '1%',
  }
});
