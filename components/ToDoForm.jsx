/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, TextInput, Pressable, Text} from 'react-native';
import { useState } from 'react';


function ToDoForm({ addTask }) {

  const [taskText, setTaskText] = useState('');

  handleAddTask = () => {
    addTask(taskText);
    setTaskText('');
  };

  return (
    <SafeAreaView>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={setTaskText}
          value={taskText}
        />
      <Pressable onPress={handleAddTask} style={styles.button}>
        <Text>Add Task</Text>
      </Pressable>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#99c5e8',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

export default ToDoForm;
