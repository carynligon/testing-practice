import Backbone from 'backbone';

const CartModel = Backbone.Model.extend({
  defaults: {
    items: [],
    total: 0
  },
  addItem: function(item, cost) {
    this.get('items').push({
      id: this.get('items').length + 1,
      item: item,
      cost: cost
    })
  },
  removeItem: function(id) {
    this.get('items').splice(id-1,1);
  },
  calcTotal: function() {
    let total = this.get('items').reduce((prev, curr) => {
      return prev.cost + curr.cost;
    });
    this.set('total', total);
  }
});

export default CartModel;
