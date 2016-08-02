import Backbone from 'backbone';

const CartModel = Backbone.Model.extend({
  defaults: {
    items: [
      {
        id: 1,
        item: 'shirt',
        cost: 25,
      }, {
        id: 2,
        item: 'dress',
        cost: 45,
      }, {
        id: 3,
        item: 'shoes',
        cost: 40,
      }, {
        id: 4,
        item: 'jeans',
        cost: 65,
      },
    ],
    total: 175
  },
  addItem: function(item, cost) {
    this.items.push({
      id: items.length + 1,
      item: item,
      cost: cost
    });
  },
  removeItem: function(id) {
    this.items.splice(id-1, 1);
  }
});

export default CartModel;
