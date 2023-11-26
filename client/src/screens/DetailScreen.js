import React from 'react';
import { View } from 'react-native';
import EntryDetail from '../components/EntryDetail';

const DetailScreen = ({ route }) => {
  const { entry } = route.params;

  return (
    <View>
      <EntryDetail entry={entry} />
    </View>
  );
};

export default DetailScreen;
