import item from './item.js';

// const foo = 'bar';
//

// const store = {
//   items: [],
//   hideCheckedItems: false
// }

const items = [];
let hideCheckedItems = false;

const findById = function(id) {
  return items.find(item => item.id === id);
}

const addItem = function(name) {
  try {
    item.validateName(name);
    const result = item.create(name);
    this.items.push(result);
  } catch(error) {
      console.log(`Cannot add item: ${error.message}`);
  }
};

const findAndToggleChecked = function (id) {
  const result = findById(id);
  result.checked = !result.checked;
};

const findAndUpdateName = function (id, newName) {
  try {
    item.validateName(newName);
    const result = findById(id);
    result.name = newName;
  } catch(error) {
      console.log(`Cannot add item: ${error.message}`);
  }
}

const findAndDelete = function(id) {
  const index = this.items.findIndex(item => item.id == id);
  this.items.splice(index, 1);
}

const toggleCheckedFilter = function() {
  this.hideCheckedItems = !this.hideCheckedItems;
}

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter,
};