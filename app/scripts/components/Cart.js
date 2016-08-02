import React from 'react';
import CartItem from './CartItem';

import store from '../store';

const Cart = React.createClass({
  getInitialState: function() {
    console.log(this.props);
    return store.cartModel;
  },
  componentDidMount: function() {
    store.cartModel.on('change update', () => {
      console.log(store.cartModel.changedAttributes());
      this.setState(store.cartModel);
    });
  },
  render: function() {
    let itemsArr = this.state.get('items');
    let items = itemsArr.map((item, i) => {
      return <CartItem key={i} id={item.id} item={item.item} cost={item.cost}/>;
    });
    return (
      <div>
        <h1>Your Cart</h1>
        <ul id="cart-item-list">
          {items}
        </ul>
        <span>{store.cartModel.get('total')}</span>
      </div>
    );
  }
});

export default Cart;
