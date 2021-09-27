import * as React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Logo from '../../components/Logo';
import styles from './styles';

function LoadingScreen({navigation}) {
  const onPressLogo = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressLogo}>
        <Logo />
      </TouchableOpacity>
    </View>
  );
}

export default LoadingScreen;
