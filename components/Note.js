import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import ElementTitle from './ElementTitle';

const Project = ({route, navigation}) => {

  const { title} = route.params;
  const [note, setNote] = useState({task: "", description: "", steps: "", due: "", watcher: "", sprint: "", status: "Todo"});



  return (
      <View style={styles.container}>
        <View style={styles.item}>
        
            
            <Text style={styles.itemText}>{title}</Text>

    
        </View>
        <ScrollView
                contentContainerStyle={{
                flexGrow: 1
                }}
                keyboardShouldPersistTaps='handled'
            >
            <TextInput style={styles.input} placeholder={'Task'} value={note.task} onChangeText={text => setNote((note) => ({...note, task: text}) )} />
            <TextInput style={styles.input} placeholder={'description'} value={note.description} onChangeText={text => setNote((note) => ({...note, description: text}) )} />
            <TextInput style={styles.input} placeholder={'steps'} value={note.steps} onChangeText={text => setNote((note) => ({...note, steps: text}) )} />
            <TextInput style={styles.input} placeholder={'due'} value={note.due} onChangeText={text => setNote((note) => ({...note, due: text}) )} />
            <TextInput style={styles.input} placeholder={'watcher'} value={note.watcher} onChangeText={text => setNote((note) => ({...note, watcher: text}) )} />
            <TextInput style={styles.input} placeholder={'sprint'} value={note.sprint} onChangeText={text => setNote((note) => ({...note, sprint: text}) )} />
            <TextInput style={styles.input} placeholder={'status'} value={note.status} onChangeText={text => setNote((note) => ({...note, status: text}) )} />
        </ScrollView>
        
      </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: "100%",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
});

export default Project;