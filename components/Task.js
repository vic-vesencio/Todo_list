import React, {useContext} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//context
import AppContext from '../context/AppContext';

const Task = ({props}) => {
   const newAppCOntext = useContext(AppContext);
   const removeTask = (index) => {
      let newTasks = [...newAppCOntext.tasks];
      newTasks.splice(index, 1);
      newAppCOntext.setTasks(newTasks);
   }

   return(
      <View style={styles.item}>
         <TouchableOpacity style={styles.square}>
         </TouchableOpacity>
         <Text style={styles.text}>{props.taskName}</Text>
         <TouchableOpacity onPress={()=>removeTask(props.index)} style={styles.circle}>
         </TouchableOpacity>
      </View>
   )
}

const styles = StyleSheet.create({
   item:{
      backgroundColor: 'pink',
      padding: 10,
      borderRadius: 10,
      marginTop: 5,
      marginBottom: 5,
      flexDirection: 'row',
      flexWrap: 'wrap'
   },
   text:{
      fontSize: 15,
      marginLeft: 10,
      marginTop: 'auto',
      marginBottom: 'auto'
   },
   square:{
      width: 24,
      height: 24,
      backgroundColor: 'aquamarine',
      opacity: 0.7,
      borderRadius: 5
   },
   circle:{
      width: 20,
      height: 20,
      borderColor: 'blue',
      borderWidth: 2,
      opacity: 0.7,
      borderRadius: 10,
      marginLeft: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto'
   }
});
export default Task;