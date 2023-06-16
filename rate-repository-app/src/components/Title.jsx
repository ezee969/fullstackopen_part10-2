import React from 'react';
import theme from '../theme';
import { Text as NativeText, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.titlePrimary,
    fontSize: theme.fontSizes.title,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.bold,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Title = ({ style, ...props }) => {
  const titleStyle = [styles.text, style];

  return <NativeText style={titleStyle} {...props} />;
};

export default Title;
