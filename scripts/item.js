const validateName = function (itemName) {
    if (itemName === "") {
        throw new TypeError("Name Must Not Be Blank!")
    }
}
const create = function (itemName) {
   /* let newItem = [];
    newItem.push({ id: cuid(), name: itemName, checked: false });
    */
    return {id: cuid(), name: itemName, checked: false};
};
export default {
    validateName,
    create
};

