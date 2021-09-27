import React from 'react';
import {StyleSheet} from 'react-native';
import palette from '../../constants/palette';

export default StyleSheet.create({
  container: {
    height: 150,
    width: '100%',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.white,
    shadowColor: palette.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  imageWrapper: {
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  titleWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
  },
  priceWrapper: {
    color: palette.white,
    paddingHorizontal: 5,
    backgroundColor: palette.lightGreen,
    borderRadius: 5,
  },
  price: {
    color: palette.white,
    fontWeight: 'normal',
  },
  description: {
      marginTop: 10,
    fontSize: 12,
  },
});
