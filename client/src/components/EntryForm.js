import {  Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { entryFormStyles } from '../styles/entryFormStyles';

const EntryForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState({titleError: '', authorError: '', contentError: ''})

  useEffect(() => {
    setErrors({...errors, titleError: ''})
  }, [title])

  useEffect(() => {
    setErrors({...errors, authorError: ''})
  }, [author])

  useEffect(() => {
    setErrors({...errors, contentError: ''})
  }, [content])

  const handlePress = () => {
    const titleError = title === '' ? 'El titulo no puede estar vacío' : '';
    const authorError = author === '' ? 'El titulo no puede estar vacío' : '';
    const contentError = content === '' ? 'El titulo no puede estar vacío' : '';

    setErrors({titleError, authorError, contentError})

    if(!titleError && !authorError && !contentError){
      onSubmit({ title, author, content });
    }
  };
  

  return (
    <KeyboardAwareScrollView contentCotainerStyle={entryFormStyles.container}>
       <View style={{ marginVertical: 100 }}>
          <Text style={entryFormStyles.title}>Agregar Entrada del Blog</Text>
          <View style={{ marginHorizontal: 24, marginBottom: 30 }}>
            <Text style={entryFormStyles.TextInput}>Titulo</Text>
            <TextInput style={entryFormStyles.input} placeholder="Agrega el titulo" value={title} onChangeText={setTitle} />
            {errors.titleError !== '' && <Text style={{ color: 'red' }}>{errors.titleError}</Text>}
          </View>
          <View style={{ marginHorizontal: 24, marginBottom: 30 }}>
            <Text style={entryFormStyles.TextInput}>Autor</Text>
            <TextInput style={entryFormStyles.input} placeholder="Agrega el autor" value={author} onChangeText={setAuthor} />
            {errors.authorError !== '' && <Text style={{ color: 'red' }}>{errors.authorError}</Text>}
          </View>
          <View style={{ marginHorizontal: 24, marginBottom: 30 }}>
            <Text style={entryFormStyles.TextInput}>Contenido</Text>
          <TextInput style={entryFormStyles.input} placeholder="Agrega tu contenido" value={content} onChangeText={setContent} />
          {errors.contentError !== '' && <Text style={{ color: 'red' }}>{errors.contentError}</Text>}
          </View>
          <TouchableOpacity onPress={handlePress} style={entryFormStyles.buttonStyle}>
            <Text style={entryFormStyles.buttonText}>Guardar</Text>
          </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default EntryForm;
