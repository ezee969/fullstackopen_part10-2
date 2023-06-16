import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import NumberItem from './NumberItem';
import Lenguage from './Lenguage';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
  numbersContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  infoItemContainer: {
    marginBottom: 10,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 10,
        }}
      >
        <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
        <View style={{ paddingLeft: 20 }}>
          <View style={styles.infoItemContainer}>
            <Text fontWeight={'bold'} fontSize={'subheading'}>
              {item.fullName}
            </Text>
          </View>
          <View style={styles.infoItemContainer}>
            <Text>{item.description}</Text>
          </View>
          <View style={styles.infoItemContainer}>
            <Lenguage lenguage={item.language} />
          </View>
        </View>
      </View>
      <View style={styles.numbersContainer}>
        <NumberItem number={item.stargazersCount} statName={'Stars'} />
        <NumberItem number={item.forksCount} statName={'Forks'} />
        <NumberItem number={item.reviewCount} statName={'Reviews'} />
        <NumberItem number={item.ratingAverage} statName={'Rating'} />
      </View>
    </View>
  );
};

export default RepositoryItem;
