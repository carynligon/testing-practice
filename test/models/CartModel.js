import { expect } from 'chai';
import CartModel from '../../app/scripts/models/CartModel';

describe('Cart Model', function() {
  it('should exist', () => {
    expect(CartModel).to.exist;
  });
});
