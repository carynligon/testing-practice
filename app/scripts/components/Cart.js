import React from 'react';
import CartItem from './CartItem';

import store from '../store';

const Cart = React.createClass({
  getInitialState: function() {
    console.log(this.props);
    return store.cartModel;
  },
  componentDidMount: function() {
    store.cartModel.on('change remove add', () => {
      this.setState(store.cartModel);
    });
  },
  render: function() {
    console.log(this.state);
    let itemsArr = this.state.get('items');
    let items = itemsArr.map((item, i) => {
      return <CartItem key={i} item={item.item} cost={item.cost}/>;
    });
    return (
      <div>
        <h1>Your Cart</h1>
        <ul id="cart-item-list">
          {items}
        </ul>
      </div>
    );
  }
});

export default Cart;
