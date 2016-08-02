import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import CartItem from '../../app/scripts/components/CartItem';

describe('<CartItem/> component', function() {
  let cartItem = shallow(<CartItem />);
  it('should exist', () => {
    expect(cartItem).to.exist;
  });
  it('should have an item prop', () => {
    expect(cartItem.find(li)).to.have.length(4);
  });
});
