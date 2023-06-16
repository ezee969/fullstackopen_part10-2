import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import TitleTab from './TitleTab';
import SignInTab from './SignInTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    flexDirection: 'row',
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <TitleTab />
        <SignInTab />
      </ScrollView>
    </View>
  );
};

export default AppBar;
