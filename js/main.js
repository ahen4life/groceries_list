let groceriesList = document.getElementById('myGroceriesList');
let userItem = "";

let addItem = function () {
  userItem = prompt("Ajouter un élément:");
  let newItem = document.createElement('li');
  newItem.id = userItem.toLowerCase();
  newItem.textContent = userItem;
  groceriesList.insertAdjacentElement('beforeend', newItem);
}

// let popItem = function () {
//   userItem = prompt("Supprimer un élément:");
//   userItem = userItem.toLowerCase();
//   groceriesList.removeChild(document.getElementById(userItem));
// }

let popLastItem = function () {
  groceriesList.removeChild(groceriesList.lastChild)
}
