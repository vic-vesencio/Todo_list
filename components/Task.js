import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Task = ({props}) => {
   return(
      <View>
         <Text>{props.taskName}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   text:{
      fontSize: 10
   }
});
export default Task;