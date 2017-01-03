// A pet store sells pet and toys ;invontory showes for three sales have common types such as
//(name and price ) however uninque property type for ...1-cats, 2-dog and 1-toys . show invontory 


interface IProduct {
    name: string;
    price: number;
}
// class define

class Cat implements IProduct {
    constructor(public name: string, public price: number, public size: string) { }
}

class Dog implements IProduct {
    constructor(public name: string, public price: number, public size: string, public isPretty: boolean) { }
}

class Toy implements IProduct {
    constructor(public name: string, public price: number,  public isExpensive: boolean) { }
}

//prodact implementation

let puss = new Cat(`puss`, 20.00, `tall`);
let smokey = new Cat(`smokey`,30.00, `short`);
let misty = new Cat(`misty`, 15.00, `tall`);
let tigger = new Cat(`tigger`, 25.00, `tall`);
let kitty = new Cat(`kitty`, 10.00, `short`);
let missy = new Cat(`missy`, 40.00, `tall`);

let max = new Dog(`max`, 70.00, `brown`, true);
let boddy = new Dog(`boddy`, 120.00, `black`, false);
let lucy = new Dog(`lucy`, 150.00, `white`, false);
let bella = new Dog(`bella`, 220.00, `gray`, true);

let bratz = new Toy(`bratz`, 10.00, false);
let spcip = new Toy(`spcip`, 15.00, true);
let furby = new Toy(`furby`, 150.00,true);

let inventory: IProduct[] = [puss, smokey, misty, tigger, kitty, missy, max, boddy, lucy, bella, bratz, spcip, furby];

//set up Array

function showInventory(inventory: IProduct[]) {

    for (let item of inventory) {                                // target the value direct rather the index value
        console.log(`Name: ${item.name} price: ${item.price}`);
    }

}
//showInventory(inventory);


let btn = <HTMLButtonElement>document.getElementById(`btn`);


btn.addEventListener(`click`, () => {
    showInventory(inventory);

});

