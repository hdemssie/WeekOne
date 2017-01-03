// A pet store sells pet and toys ;invontory showes for three sales have common types such as
//(name and price ) however uninque property type for ...1-cats, 2-dog and 1-toys . show invontory 
// class define
var Cat = (function () {
    function Cat(name, price, size) {
        this.name = name;
        this.price = price;
        this.size = size;
    }
    return Cat;
}());
var Dog = (function () {
    function Dog(name, price, size, isPretty) {
        this.name = name;
        this.price = price;
        this.size = size;
        this.isPretty = isPretty;
    }
    return Dog;
}());
var Toy = (function () {
    function Toy(name, price, isExpensive) {
        this.name = name;
        this.price = price;
        this.isExpensive = isExpensive;
    }
    return Toy;
}());
//prodact implementation
var puss = new Cat("puss", 20.00, "tall");
var smokey = new Cat("smokey", 30.00, "short");
var misty = new Cat("misty", 15.00, "tall");
var tigger = new Cat("tigger", 25.00, "tall");
var kitty = new Cat("kitty", 10.00, "short");
var missy = new Cat("missy", 40.00, "tall");
var max = new Dog("max", 70.00, "brown", true);
var boddy = new Dog("boddy", 120.00, "black", false);
var lucy = new Dog("lucy", 150.00, "white", false);
var bella = new Dog("bella", 220.00, "gray", true);
var bratz = new Toy("bratz", 10.00, false);
var spcip = new Toy("spcip", 15.00, true);
var furby = new Toy("furby", 150.00, true);
var inventory = [puss, smokey, misty, tigger, kitty, missy, max, boddy, lucy, bella, bratz, spcip, furby];
//set up Array
function showInventory(inventory) {
    for (var _i = 0, inventory_1 = inventory; _i < inventory_1.length; _i++) {
        var item = inventory_1[_i];
        console.log("Name: " + item.name + " price: " + item.price);
    }
}
//showInventory(inventory);
var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    showInventory(inventory);
});
