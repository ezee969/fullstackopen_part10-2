import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    alignItems: 'center',
  },
});
const NumberItem = ({ number, statName }) => {
  const transformHundreds = (number) => {
    if (number >= 1000) {
      const fixedNumber = (number / 1000).toFixed(1);

      if (fixedNumber.slice(-1) === '0') {
        return `${(number / 1000).toFixed(0)}k`;
      }

      return `${(number / 1000).toFixed(1)}k`;
    }
    return number;
  };

  return (
    <View style={styles.container}>
      <Text fontWeight={'bold'} fontSize={'subheading'}>
        {transformHundreds(number)}
      </Text>
      <Text color={'secondary'}>{statName}</Text>
    </View>
  );
};

export default NumberItem;
