import React from 'react';
import Leaf from './components/Leaf';
import Home from './components/Home';
import Cart from './components/Cart';
import Search from './components/Search';
import Wishlist from './components/Wishlist';

const LeafIcon = props => <Leaf {...props} />;
const HomeIcon = props => <Home {...props} />;
const CartIcon = props => <Cart {...props} />;
const SearchIcon = props => <Search {...props} />;
const WishlistIcon = props => <Wishlist {...props} />;

export default class SVGManager {
  static MANIFEST = {
    LEAF: 'LEAF',
    HOME: 'HOME',
    CART: 'CART',
    SEARCH: 'SEARCH',
    WISHLIST: 'WISHLIST',
  };

  static ICONS = {
    LEAF: LeafIcon,
    HOME: HomeIcon,
    CART: CartIcon,
    SEARCH: SearchIcon,
    WISHLIST: WishlistIcon,
  };

  static getIconFactory(type) {
      console.log('type', type)
    if (!SVGManager.ICONS[type]) {
      console.log('There is no icon: ', type);
    }
    return SVGManager.ICONS[type] || null;
  }
}
