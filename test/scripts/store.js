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
    store.cartModel.addItem('soap', 2);
    store.cartModel.addItem('milk', 3);
    store.cartModel.addItem('socks', 6);
    expect(store.cartModel.get('items')).to.have.length(store.cartModel.get('items').length);
  });
  it('should respond to the removeItem function', () => {
    expect(store.cartModel).to.respondTo('removeItem');
    store.cartModel.addItem('soap', 2);
    store.cartModel.addItem('milk', 3);
    store.cartModel.addItem('socks', 6);
    store.cartModel.on('change update', () => {
      expect(store.cartModel.get('items')).to.have.length(store.cartModel.get('items').length);
    });
    store.cartModel.removeItem(2);
    store.cartModel.on('change update', () => {
      expect(store.cartModel.get('items')).to.not.contain('socks');
      expect(store.cartModel.get('items')).to.not.contain('milk');
    });
  });
  it('should respond to the calcTotal function', () => {
    store.cartModel.addItem('soap', 2);
    store.cartModel.addItem('milk', 3);
    store.cartModel.addItem('socks', 6);
    store.cartModel.on('change update', () => {
      expect(store.cartModel.get('total')).to.equal(11);
    });
    expect(store.cartModel).to.respondTo('calcTotal');
  })
});
