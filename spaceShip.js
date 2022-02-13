// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`



// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.
class SpaceShip{
    constructor(name, topSpeed){
        this.name = name;
        this.topSpeed = topSpeed;
    }

    accelerate(){
        console.log(`${this.name} moving to ${this.topSpeed}`);
    }
}

const shipOne = new SpaceShip("Blue Origins", 3000);
const shipTwo = new SpaceShip("X-Wing Fighter", 8000);
shipOne.accelerate();
shipTwo.accelerate();