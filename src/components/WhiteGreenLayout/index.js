import * as React from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './styles';

function WhiteGreetLayout({children}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection} />
      <View style={styles.bottomSection} />
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
}

export default WhiteGreetLayout;
