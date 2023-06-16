import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 4,
    borderRadius: 5,
    backgroundColor: '#3b82f6',
    alignSelf: 'flex-start',
  },
  text: {
    color: theme.colors.titlePrimary,
  },
});
const Lenguage = ({ lenguage }) => {
  return (
    <View style={styles.container}>
      <Text fontSize={'subheading'} style={styles.text}>
        {lenguage}
      </Text>
    </View>
  );
};

export default Lenguage;
