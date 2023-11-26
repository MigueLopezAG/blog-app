import React, {useState, useEffect} from 'react';
import { View, Alert } from 'react-native';
//import { useSelector, useDispatch  } from 'react-redux';
import EntryList from '../components/EntryList';
import { useNetInfo } from "@react-native-community/netinfo";
import { getEntries } from '../services/blogService';

const HomeScreen = ({ navigation }) => {

  //const dispatch = useDispatch();

  //const storedEntries = useSelector((state) => state.entries);
  //console.log("storedEntries", storedEntries)

  const { isConnected } = useNetInfo();
  console.log(" isCOnnected", isConnected)
  const [entries, setEntries] = useState([{ id: 1, title: 'Título 1', author: 'Autor 1', date: '2023-11-13', content: 'Contenido largo...' }]);

  useEffect(() => {
    const obtainEntries = async () =>{
      if (isConnected || isConnected === null) {
        const entriesResponse = await getEntries();
        setEntries(entriesResponse);
        //dispatch(saveReduxEntries(entriesResponse));
      } else {
        Alert.alert("Se perdio la conexion a internet");
      }
    }
    obtainEntries();
  }, [isConnected]);

  const handleEntryPress = (entry) => {
    navigation.navigate('Detalle', { entry });
  };

  return (
    <View>
      <EntryList entries={entries} onPress={handleEntryPress} navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
