function Cat() {
    this.stomach = []
}

Cat.prototype.eat = function (mouse) {
    this.stomach.push(mouse)

    return this
}

function Mouse(name) {
    this.name = name
}

var tom = new Cat()
var mickey = new Mouse()

mickey.name = 'jerry'

tom.eat(mickey)

console.log(tom)