import * as React from 'react';
import {View, Text} from 'react-native';
import SVGManager from '../SVGManager';
import styles from './styles';

function Logo() {
  return (
    <View style={styles.container}>
      {SVGManager.getIconFactory(SVGManager.MANIFEST.LEAF)({})}
    </View>
  );
}

export default Logo;
