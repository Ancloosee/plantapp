import * as React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import WhiteGreetLayout from '../../components/WhiteGreenLayout';
import PlantCard from '../../components/PlantCard';

const MOCK_DATA = [
  {
    image: require('../../assets/images/plant_1.png'),
    title: 'Aloe Vera',
    price: '95$',
    description:
      'Very short - stemmed plant growing to\n' +
      '50-100 cm (25-40 in) tall, spreading\n' +
      'by offsets. Have thick and fleshy leaves\n' +
      'that hold water to sustain the palnt during\n' +
      'a drought.',
  },
  {
    image: require('../../assets/images/plant_2.png'),
    title: 'Aloe Vera',
    price: '95$',
    description:
      'Very short - stemmed plant growing to\n' +
      '50-100 cm (25-40 in) tall, spreading\n' +
      'by offsets. Have thick and fleshy leaves\n' +
      'that hold water to sustain the palnt during\n' +
      'a drought.',
  },
  {
    image: require('../../assets/images/plant_1.png'),
    title: 'Aloe Vera',
    price: '95$',
    description:
      'Very short - stemmed plant growing to\n' +
      '50-100 cm (25-40 in) tall, spreading\n' +
      'by offsets. Have thick and fleshy leaves\n' +
      'that hold water to sustain the palnt during\n' +
      'a drought.',
  },
  {
    image: require('../../assets/images/plant_2.png'),
    title: 'Aloe Vera',
    price: '95$',
    description:
      'Very short - stemmed plant growing to\n' +
      '50-100 cm (25-40 in) tall, spreading\n' +
      'by offsets. Have thick and fleshy leaves\n' +
      'that hold water to sustain the palnt during\n' +
      'a drought.',
  },
  {
    image: require('../../assets/images/plant_1.png'),
    title: 'Aloe Vera',
    price: '95$',
    description:
      'Very short - stemmed plant growing to\n' +
      '50-100 cm (25-40 in) tall, spreading\n' +
      'by offsets. Have thick and fleshy leaves\n' +
      'that hold water to sustain the palnt during\n' +
      'a drought.',
  },
  {
    image: require('../../assets/images/plant_2.png'),
    title: 'Aloe Vera',
    price: '95$',
    description:
      'Very short - stemmed plant growing to\n' +
      '50-100 cm (25-40 in) tall, spreading\n' +
      'by offsets. Have thick and fleshy leaves\n' +
      'that hold water to sustain the palnt during\n' +
      'a drought.',
  },
];

function HomeScreen({navigation}) {
  return (
    <WhiteGreetLayout>
      <FlatList
        style={styles.container}
        data={MOCK_DATA}
        renderItem={({item}) => (
          <PlantCard item={item} styles={styles.cardWrapper} />
        )}
      />
    </WhiteGreetLayout>
  );
}

export default HomeScreen;
