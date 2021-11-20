function Product () {

}
Product.prototype.getInfo = function () {
    return `
    Name: ${this.name}.
    Category: ${this.category}.
    Type: ${this.type}.
    Price: $${this.price}.
    `;
}
function HomeProducts () {

}

HomeProducts.prototype = Object.create(Product.prototype)
HomeProducts.prototype.category = "Товары для дома"
function Dishes (name, price) {
    this.name = name;
    this.price = price;
}

Dishes.prototype = Object.create(HomeProducts.prototype)
Dishes.prototype.type = "Посуда"
function Furniture(name, price) {
    this.name = name;
    this.price = price;
}

Furniture.prototype = Object.create(HomeProducts.prototype)
Furniture.prototype.type = "Мебель"

let pan = new Dishes("Сковорода", 10);
let table = new Furniture("Стол", 100);

console.log(pan.getInfo())
console.log(table.getInfo())


