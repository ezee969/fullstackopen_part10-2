import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Title from './Title';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingTop: 25,
    paddingBottom: 15,
  },
});

const TitleTab = () => {
  return (
    <Pressable style={styles.container}>
      <Link to={'/'}>
        <Title>Repositories</Title>
      </Link>
    </Pressable>
  );
};

export default TitleTab;
