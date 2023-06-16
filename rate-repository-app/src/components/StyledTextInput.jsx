import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  error: {
    borderColor: 'red',
  },
});

const StyledTextInput = ({ style = {}, error, ...props }) => {
  const inputStyle = [styles.textInput, style, error && styles.error];

  return <TextInput style={inputStyle} {...props} />;
};

export default StyledTextInput;
