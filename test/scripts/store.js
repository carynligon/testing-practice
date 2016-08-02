import { expect } from 'chai';
import store from '../../app/scripts/store';

describe('store module', function() {
  it('should exist', () => {
    expect(store).to.exist;
  });
  it('should have a cartModel property', () => {
    expect(store).to.have.property('cartModel');
    expect(store).to.not.have.property('session');
  });
});

describe('store.cartModel', function() {
  it('should have a total property', () => {
    expect(store.cartModel.get('total')).to.be.a('number');
    expect(store.cartModel.get('total')).to.not.be.an('undefined');
  });
  it('should respond to the addItem function', () => {
    expect(store.cartModel).to.respondTo('addItem');
  });
  it('should respond to the removeItem function', () => {
    expect(store.cartModel).to.respondTo('removeItem');
  });
});
