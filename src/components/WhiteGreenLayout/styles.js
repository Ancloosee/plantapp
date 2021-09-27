import React from 'react';
import {StyleSheet} from 'react-native';
import palette from '../../constants/palette';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    height: '30%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: palette.darkGreen,
    width: '100%',
  },
  topSection: {
    height: '90%',
    position: 'absolute',
    top: 0,
    left: -2,
    zIndex: 10,
    backgroundColor: palette.white,
    borderBottomLeftRadius: 180,
    width: '120%',
  },
  content: {
    position: 'absolute',
    top: 50,
    right: 0,
    bottom: 20,
    left: 0,
    zIndex: 15,
  },
});
