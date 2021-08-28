import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

//custom components
import Tasks from './components/Task';

//context
import AppContext from './context/AppContext';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [inputVal, setInputVal] = useState('');

  const addTask = (taskName) =>{
    let newTasks = [...tasks];
    newTasks.push({taskName: taskName});
    setTasks(newTasks);
  }

  return (
    <AppContext.Provider value={{tasks, setTasks}}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>ur tasks:</Text>
        </View>
        <View style={styles.tasksContainer}>
          {tasks.length !== 0 ?
            tasks.map((task,index)=>{
              return(
                <Tasks key={index} props={{taskName: task.taskName, index: index}}></Tasks>
              )
            })
          :
            <Text> No tasks yet </Text>
          }
        </View>
        <View style={styles.inputContainer}>
          <TextInput value={inputVal} style={styles.input}
          onChangeText={text=>{
            setInputVal(text);
          }}
          />
          <TouchableOpacity style={styles.button}
            onPress={()=>{
              if(inputVal !== '') addTask(inputVal);
            }}
          />
        </View>
        <StatusBar />
      </View>
    </AppContext.Provider>
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
