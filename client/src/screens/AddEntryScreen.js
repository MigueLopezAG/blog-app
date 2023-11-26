import React from 'react';
import { View, Alert } from 'react-native';
import EntryForm from '../components/EntryForm';
import { addEntry } from '../services/blogService';

const AddEntryScreen = ({ navigation }) => {
  const handleAddEntry = async (entry) => {
    const saveEntry = await addEntry(entry);
    if(saveEntry){
      Alert.alert(saveEntry.message)
      navigation.navigate('Home');
    }
  };

  return (
    <View>
      <EntryForm onSubmit={handleAddEntry} />
    </View>
  );
};

export default AddEntryScreen;
