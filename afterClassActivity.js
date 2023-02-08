// 1) Defining forEach
let numbers = [ 1, 2, 3 ];
forEach(numbers, function(number){
    console.log(number)                     
})            

function forEach(){
numbers.forEach(function(number){
    console.log(number)                     
})            
}

// 2) Defining "Object Method"

const tacoTruck = {
    revenue: 300,
    expenses: 100,
    profit: profit
}

const lemonadeStand = {
    revenue: 50,
    expenses: 15,
    profit: profit
}

function profit(){
    return this.revenue - this.expenses
    console.log(this.profit)
}

tacoTruck.profit()              
lemonadeStand.profit()                           
  

let rectangle = {
    width: 100,
    height: 100, 
    area: function(){
        return this.width * 100
    }
}

console.log(rectangle.area())

let dog = {
    sound: 'Arrrf!',
    playSound: function(){
        console.log(this.sound)
    }
}

let cat = {
    sound: 'Meoowww!',
    playSound: dog.playSound
}

dog.playSound();
cat.playSound();

// 3) Using this with forEach


let myNumbers = [ 1, 2, 3 ]
myNumbers.forEach = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i])
    }
}
myNumbers.forEach(function(element){
    console.log("test3", element)
})

// 4) Assigning forEach to the Array.prototype


Array.prototype.forEach = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i])
    }
}

// let myNumbers = [ 1, 2, 3 ]
myNumbers.forEach(function(element){
    console.log(element)
})
