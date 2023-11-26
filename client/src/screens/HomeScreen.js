import React, {useState, useEffect} from 'react';
import { View, Alert } from 'react-native';
import { useSelector, useDispatch  } from 'react-redux';
import EntryList from '../components/EntryList';
import { useNetInfo } from "@react-native-community/netinfo";
import { getEntries } from '../services/blogService';
import { saveReduxEntries } from '../Redux/Entries/entriesAction';

const HomeScreen = ({ navigation }) => {

  const dispatch = useDispatch();

  const storedEntries = useSelector((state) => state.entries);

  const { isConnected } = useNetInfo();
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const obtainEntries = async () =>{
      if (isConnected || isConnected === null) {
        const entriesResponse = await getEntries();
        setEntries(entriesResponse);
        dispatch(saveReduxEntries(entriesResponse));
      } else {
        Alert.alert("Se perdio la conexion a internet");
        setEntries(storedEntries);
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
