import React from 'react';

const CartItem = React.createClass({
  render: function() {
    console.log(this.props);
    return (
      <li>{this.props.item}...${this.props.cost}</li>
    );
  }
});

export default CartItem;
