const app = "I don't do much."

function bumpCounter (){
  var counter = 0
  function addBump (){
    counter ++
  }
  function getBumps (){
    return counter
  }

  return {addBump,getBumps}
}

function createAnimal (animalType){
  return function (device){
    var animal = {}
    animal.animalType = animalType
    animal.deadlyDevice = device
    return animal
    }
}

var sharkCreator = createAnimal("Shark")
var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam")
var sharkWithFrickinCannon = sharkCreator("Cannon")
