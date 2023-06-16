import { Platform } from 'react-native';

const theme = {
  colors: {
    titlePrimary: '#ffffff',
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    appBarBackground: '#24292e',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    title: 18,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;
