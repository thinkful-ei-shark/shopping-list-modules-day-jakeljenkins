import shoppingList from './shopping-list.js';
import store from './store.js';
import item from './item.js';




const main = function () {
  shoppingList.render();
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);