class Traveler {
    constructor(nome,food = 1,health = true) {
     this._nome   = nome,
     this._food   = food,
     this._health = health
    }
    get nome(){
        return this._nome
    }
    set food(food){
        return this._food
    }
    set health(health){
        return this._health
    }
    hunt() {
        return this._food += 2
    }
    eat() {
        if (this._food > 0) {
            return this._food = this._food - 1
        }
        else if (this._food === 0) {
            return this._health = false
        }

    }
}

class Hunter extends Traveler{
    constructor(name,health,food = 2){
        super(name,health)
        this._food = food
    }
    get name(){
        return this._name
    }
    set food(food){
        return this._food
    }
    set health(health){
        return this._health
    }

    hunt(){
        return this._food+=5
    }
    eat(){
        if(this._food>=2){
            return this._food-=2
        }
        else{
          return  this._food = 0, this._health = false
        }
    }
    giveFood(treveler,numOfFoodUnits){
        if(numOfFoodUnits <= this._food){
            return this._food -=numOfFoodUnits, treveler._food+= 4;
            
        }

    }
}

class Doctor extends Traveler{
    constructor(name,food,health){
        super(name,food,health)
    }
    get name(){
        return this._name
    }
    set food(food){
        return this._food 
    }
    set health(health){
        return this._health
    }
    heal(Traveler){  
       return  Traveler._health = true
    }
    hunt() {
        return this._food += 2
    }
    eat() {
        if (this._food > 0) {
            return this._food = this._food - 1
        }
        else if (this._food === 0) {
            return this._health = false
        }
    }
}

class Wagon {
    constructor(capacity, passageiros) {
        this._capacity = capacity
        this._passageiros = []
   
    }
    set capacity(capacity){
        return this._capacity
    }
    set passageiros(passageiros){
        return this._passageiros
    }
    getAvailableSeatCount() {
        return this._capacity - this._passageiros.length
    }
    join(name) {
        if (this.getAvailableSeatCount() > 0) {
            return this._passageiros.push(name)
        }
        else {
            return `Não há espaço na carroça:(`
        }
    }
    shouldQuarantine() {
        let arrayOfHealth = []
        for (let i = 0; i < this._passageiros.length; i++) {
            arrayOfHealth.push(this._passageiros[i]._health)
        }
        if (arrayOfHealth.includes(false)) {
         return true
        }
           else{return false
          }
    }
    totalFood() {
        let comidaTotal = 0
        for (let i = 0; i < this._passageiros.length; i++) {
            comidaTotal += Number(this._passageiros[i]._food)
        }
        return comidaTotal
    }
}
