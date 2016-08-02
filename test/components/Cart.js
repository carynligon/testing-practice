import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import Cart from '../../app/scripts/components/Cart';

import store from '../../app/scripts/store';

describe('<Cart/> component', function() {
  let cart = shallow(<Cart />);
  it('should render a div to the DOM', () => {
    expect(cart.is('div')).to.be.true;
    expect(cart.is('input')).to.be.false;
  });

  it('should have an h1 that says "Your Cart"', () => {
    expect(cart.contains(<h1>Your Cart</h1>)).to.equal(true);
    expect(cart.contains(<h1>My Cart</h1>)).to.equal(false);
  });

  it('should have a ul', () => {
    expect(cart.find('ul')).to.have.length(1);
  });
  it('should have correct number li\'s (length of items array in store.cartModel))', () => {
    expect(cart.find('ul').children()).to.have.length(store.cartModel.get('items').length);
  });
});
