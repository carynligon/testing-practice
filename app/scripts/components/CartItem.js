import React from 'react';

import store from '../store';

const CartItem = React.createClass({
  removeItem: function() {
    store.cartModel.removeItem(this.props.id);
  },
  render: function() {
    console.log(this.props);
    return (
      <li id={this.props.id} onClick={this.removeItem}>{this.props.item}...${this.props.cost}</li>
    );
  }
});

export default CartItem;
