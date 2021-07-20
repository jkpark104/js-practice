function Animal(type, name, sound) {
  this.type = type
  this.name = name
  this.sound = sound
}

Animal.prototype.say = function() {
  console.log(this.sound)
}

function Dog(name, sound) {
  Animal.call(this, '개', name, sound)
}

function Cat(name, sound) {
  Animal.call(this, '고양이', name, sound)
}

Dog.prototype = Animal.prototype
Cat.prototype = Animal.prototype

