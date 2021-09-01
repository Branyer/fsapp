import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Keyboard } from 'react-native';
import ElementTitle from './ElementTitle';

const Project = ({route, navigation}) => {

  const { title} = route.params;
  const [note, setNote] = useState();

  const [noteItems, setNoteItems] = useState([{id: "0", title: "Note 1"}]);

  const handleAddNote = () => {
    Keyboard.dismiss();
    setNoteItems([...noteItems, { id: noteItems.length + 1 , title: note}])
    setNote(null);
  }


  return (
      <View style={styles.container}>

        <ScrollView
                contentContainerStyle={{
                flexGrow: 1
                }}
                keyboardShouldPersistTaps='handled'
            >

        <View style={styles.item}>
        
            
            <Text style={styles.itemText}>{title}</Text>

        
        </View>
        <View style={styles.tasksWrapper}>

        {noteItems.map(item => 

                            
                (
                 <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Note', {title: item.title})}>
                    <ElementTitle  text={item.title} />
                 </TouchableOpacity>
                )

                )}
        </View>
       
            <KeyboardAvoidingView 
                behavior={"height"}
                style={styles.writeTaskWrapper}
            >
                <TextInput style={styles.input} placeholder={'Note'} value={note} onChangeText={text => setNote(text)} />
                <TouchableOpacity onPress={() => handleAddNote()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </ScrollView >
        
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
    width: 200,
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