import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native';
import { entryListStyles } from '../styles/entryListStyles';
import { useNetInfo } from "@react-native-community/netinfo";

const EntryList = ({ entries, onPress, navigation }) => {

  const { isConnected } = useNetInfo();
  const [searchText, setSearchText] = useState('');

  const filteredEntries = entries.filter((entry) => {
    return (
      entry.title.toLowerCase().includes(searchText.toLowerCase()) ||
      entry.author.toLowerCase().includes(searchText.toLowerCase()) ||
      entry.content.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const renderItem = ({ item }) => (
    <View style={entryListStyles.itemContainer} onStartShouldSetResponder={()=>{onPress(item)}}>
      <Text style={entryListStyles.title} >{item.title}</Text>
      <Text style={entryListStyles.author}>{item.author}</Text>
      <Text style={entryListStyles.date}>{item.createdAt && item.createdAt.substring(0, 10)}</Text>
      <Text style={entryListStyles.content}>{item.content}</Text>
    </View>
  );

  const goToAddEntry = () => {
    if(isConnected){
      navigation.navigate('Agregar Entrada');
    } else {
      Alert.alert("No se puede agregar entradas al blog sin conexion a internet")
    }
  }

  return (
    <View>
      <TouchableOpacity onPress={goToAddEntry} style={entryListStyles.buttonStyle}>
        <Text style={entryListStyles.buttonText}>Agregar Entrada</Text>
      </TouchableOpacity>

      <View style={{ marginHorizontal: 10, marginBottom: 30 }}>
        <TextInput 
          style={entryListStyles.searchInput}
          placeholder="Buscar por título, autor o fecha"
          value={searchText}
          onChangeText={(text) => setSearchText(text)} 
        />
      </View>

      <FlatList
        data={filteredEntries}
        keyExtractor={(item) => item.title}
        renderItem={renderItem}
      />
    </View>
  );
};

export default EntryList;
