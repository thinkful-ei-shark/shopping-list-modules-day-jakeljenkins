import item from './item.js';
const items = [];
let hideCheckedItems = false;

const findById = function (itemId) {
    return items.find(item => item.id === itemId);
}
const addItem = function (itemName) {
    try {
        item.validateName(itemName)
        let createdItem = item.create(itemName);
        items.push(createdItem);
    } catch (error) {
        console.log("cannot add item:" + error.message);
    }
}
const findAndToggleChecked = function (itemId) {
    const foundItem = items.find(item => item.id === itemId);
    foundItem.checked = !foundItem.checked;
}
const toggleCheckedFilter = function(){
    this.hideCheckedItems = !this.hideCheckedItems;
    //console.log(hideCheckedItems);
}
/*const toggleCheckedItemsFilter = function () {
    store.hideCheckedItems = !store.hideCheckedItems;
  };*/
const findAndUpdateName = function (id, newName) {
    try {
        item.validateName(newName);
        findById(id).name = newName;
    } catch (error) {
        console.log("Cannot update name:" + error.message)
    }
}
const findAndDelete = function (itemId) {
     let item = items.findIndex(item => item === findById);
    //let item = items.filter(item => item === itemId);
    items.splice(item);
    console.log(item)
}

export default {
    items,
    hideCheckedItems,
    toggleCheckedFilter,
    findAndDelete,
    findAndToggleChecked,
    findAndUpdateName,
    findById,
    addItem
}