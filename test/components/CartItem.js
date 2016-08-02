import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import CartItem from '../../app/scripts/components/CartItem';
import store from '../../app/scripts/store';

describe('<CartItem/> component', function() {
  let cartItem = shallow(<CartItem />);
  it('should exist', () => {
    expect(cartItem).to.exist;
  });
  it('should have an item prop', () => {
    store.cartModel.on('change update', () => {
      expect(cartItem.find('li')).to.have.length(store.cartModel.get('items').length);
    });
  });
});
