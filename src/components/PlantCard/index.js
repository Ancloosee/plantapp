import * as React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

function PlantCard({styles: externalStyles, item}) {
    console.log('item', item)
  return (
    <View style={{...styles.container, ...externalStyles}}>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={item.image}
        />
      </View>
      <View>
          <View style={styles.titleWrapper}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.priceWrapper}>
                  <Text style={styles.price}>{item.price}</Text>
              </View>
          </View>
          <Text style={styles.description}> {item.description}</Text>
      </View>
    </View>
  );
}

export default PlantCard;
