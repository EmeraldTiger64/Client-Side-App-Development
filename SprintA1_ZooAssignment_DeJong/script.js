// Set up the ZooAnimal class.
class ZooAnimal {
    constructor(
        id,
        name, 
        age, 
        sex, 
        species, 
        habitat, 
        diet,
        fedStatus
    ) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.species = species;
        this.habitat = habitat;
        this.diet = diet;
        this.fedStatus = fedStatus;
    }
}

// Creates three starting animals for the zoo.
const carl = new ZooAnimal(1, "Carl", "25", "Male", "Llama", "Desert", "Herbivore", false);
const dixie = new ZooAnimal(2, "Dixie", "10", "Female", "Dingo", "Highlands", "Carnivore", false);
const daryl = new ZooAnimal(3, "Daryl", "8", "Male",  "Dingo", "Highlands", "Carnivore", false);

// Create an array of instances for the Zoo, and populates it with pre-created ZooAnimals.
let zooArray = [carl, dixie, daryl];

// Function for feeding the animals.
const feedAnimal = function (event, button, newArg) {
    console.log(event);

    // Find the current animal object in zooArray.
    let animalObject = zooArray.find(
        ({ id }) => id == button.parentElement.id
    );

    // Set the animal's fed status to fed. No un-feeding animals in my zoo.
    animalObject.fedStatus = true;

    // Set visible property status text.
    let status = button.parentElement.querySelector(".animal__fedStatus span");
    status.innerText = "Yes"

    console.log(newArg);
}

// Function to handle the animal created by the form.
function submitForm (event) {
    event.preventDefault(); // Prevent default form submission.

    // Gets the form values from the webpage.
    const name = document.getElementById("animName").value;
    const age = document.getElementById("animAge").value;
    const sex = document.getElementById("animSex").value;
    const species = document.getElementById("animSpecies").value;
    const habitat = document.getElementById("animHabitat").value;
    const diet = document.getElementById("animDiet").value;

    // Creates an instance of a new animal.
    const newAnimal = new ZooAnimal((zooArray.length + 1), name, age, sex, species, habitat, diet, false);

    // Add the new animal to the array and re-render the animals.
    zooArray.push(newAnimal);
    console.log(zooArray);
    renderAnimals();

    document.getElementById("newAnimalForm").reset();
}

// Append each zooAnimal item to the main.
function renderAnimals() {
    const main = document.querySelector(".animalList");
    main.innerHTML = ""; // Clears the main before adding new animals.

    zooArray.forEach((animal) => {
        let animalArticle = document.createElement("article");
        animalArticle.classList.add("animal");
        animalArticle.setAttribute("id", animal.id);

        animalArticle.innerHTML = `
            <h1 class="animal__name">${animal.name}</h1>
            <ul class="animal__features">
                <li class="feature animal__age">Age:<span>
                    ${animal.age}
                </span></li>
                <li class="feature animal__sex">Sex:<span>
                    ${animal.sex}
                </span></li>
                <li class="feature animal__species">Species:<span>
                    ${animal.species}
                </span></li>
                <li class="feature animal__habitat">Habitat:<span>
                    ${animal.habitat}
                </span></li>
                <li class="feature animal__diet">Diet:<span>
                    ${animal.diet}
                </span></li>
                <li class="feature animal__fedStatus">Has Been Fed: <span>
                    ${animal.fedStatus ? "Yes" : "No"}
                </span></li>
            </ul>
            <button class="feedAnimal_toggle">Feed Animal</button>
        `;

        let button = animalArticle.querySelector(".feedAnimal_toggle");
        let newArg = "The animal has been fed!";

        // Add event listener.
        button.addEventListener("click", (event) => {
            feedAnimal(event, button, newArg);
        });

        main.append(animalArticle);
        console.log(animalArticle);
    });
};

// Creates an event handler to add functionality to the "Add Animal" button for the form.
document.addEventListener("submit", (event) => {
    submitForm(event);
});

// Renders the animals list upon the page being loaded.
document.addEventListener("DOMContentLoaded", renderAnimals);