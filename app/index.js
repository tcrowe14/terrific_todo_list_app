import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import { useState } from 'react';

export default function Page() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);
  
  return (
    <View style={styles.container}>
      <View style={styles.main}>
      <ToDoList tasks={tasks} />
      <ToDoForm />
      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});