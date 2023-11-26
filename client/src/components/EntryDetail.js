import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { entryDetailStyles } from '../styles/entryDetailStyles';

const EntryDetail = ({ entry }) => {
  return (
    <ScrollView style={entryDetailStyles.container}>
      <View style={entryDetailStyles.entryContainer}>
        <Text style={entryDetailStyles.title}>{entry.title}</Text>
        <Text style={entryDetailStyles.author}>{entry.author}</Text>
        <Text style={entryDetailStyles.date}>{entry.createdAt && entry.createdAt.substring(0,10)}</Text>
        <Text style={entryDetailStyles.content}>{entry.content}</Text>
      </View>
    </ScrollView>
  );
};

export default EntryDetail;
