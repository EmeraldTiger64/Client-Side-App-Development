// ~~ Part 1 ~~
// Creates an array of colors.
let colors = ["Green", "Blue", "Purple", "Red"];

// Adds a color to the end of the array.
colors.push("Magenta");
// Adds a color to the beginning of the array.
colors.unshift("Yellow");

// Prints the contents of the array to the console log.
console.log(colors.join(", "));

// ~~ Part 2: ~~
// Creates a zooAnimal object with basic properties.
const zooAnimal = {
    species: "Panda",
    name: "Bonsai",
    habitat: "Bamboo Forest",
}

// Adds an extra property for the zooAnimals' diet.
zooAnimal.diet = "Bamboo";

// Outputs the zooAnimal to the browser console.
console.log(zooAnimal);

// ~~ Part 3: ~~
// Creates an array of zooAnimal objects.
let zoo = [{species: "Dingo", name: "Dixie", habitat: "Savannah", diet: "Meat"},
    {species: "Dingo", name: "Duke", habitat: "Savannah", diet: "Meat"},
    {species: "Shark", name: "Rose", habitat: "Ocean", diet: "Meat"},
    {species: "Giraffe", name: "Marty", habitat: "Savannah", diet: "Plants"}];

// Iterates over the zoo array to output each animal item to the console.
zoo.forEach(function (item) {
    console.log(item);
})

// ~~ Part 4 ~~
// Finds an animal in the zoo array and logs the result.
zoo.forEach(function (item) {
    if(item.name == "Rose") {
        console.log(item);
        return;
    }
})

// Removes the first animal from the zoo array and logs the updated array.
zoo.shift()
zoo.forEach(function (item) {
    console.log(item);
})