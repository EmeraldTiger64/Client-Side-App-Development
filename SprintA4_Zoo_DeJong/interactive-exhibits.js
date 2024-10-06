document.addEventListener("DOMContentLoaded", () => {
    // Set up the ZooAnimal class.
    class ZooAnimal {
        constructor(
            id,
            species, 
            name,
            description,
            image,
            extraInfo
        ) {
            this.id = id;
            this.species = species;
            this.name = name;
            this.description = description;
            this.image = image;
            this.extraInfo = extraInfo;
        }
    };

    // Creates the animals.
    const tiger = new ZooAnimal(
        "tigerExhibit",
        "tiger",
        "Tigers",
        "A majestic big cat, the tiger is a strong animal adorned with stripes.",
        "tiger.png",
        "Tigers are carnivores that come in a variety of colors, but they have one major feature that is their memorable stripes."
    );

    const dingo = new ZooAnimal(
        "dingoExhibit",
        "dingo",
        "Dingos",
        "The dingo is a small canine.",
        "dingo.png",
        "Dingos are a small canine commonly found in savhannas."
    );

    const fennec = new ZooAnimal(
        "fennecFoxExhibit",
        "fennecFox",
        "Fennec Foxes",
        "Fennecs are a small fox.",
        "fennec.png",
        "Fennec are a small, carnivoris canine belonging to the fox family. They are most well-known for their large, \
        radar-dish-like ears and they are typically found in deserts."
    );

    const panda = new ZooAnimal(
        "pandaExhibit",
        "panda",
        "Pandas",
        "Pandas are a bear species native to China.",
        "panda.png",
        "Panda bears have thumbs which help them to hold bamboo in place for feeding."
    );

    const wolf = new ZooAnimal(
        "wolfExhibit",
        "wolf",
        "Wolves",
        "Wolves are a general species of canine that come in many sizes and color patterns.",
        "wolf.png",
        "Wolves are carnivores that are a subsection of the canis lupus and are closely-related to dogs and dingos. They are found in many places around the world \
        and come in many shapes, sizes, and fur coat colors and patterns. The most commonly-known form of wolves are grey wolves."
    );

    // Creates instances of the ZooAnimals for the endangered animals array.
    const seaOtter = new ZooAnimal(
        "seaOtterExhibit",
        "seaOtter",
        "Sea Otters",
        "Sea otters are marine mammals that are native to the coasts of northern and eastern North Pacific Ocean.",
        "seaotter.png",
        "Sea otters are a member of the weasel family and have exceptionally thick fur coats that they use for insulation. They can also live exclusively in the ocean, but can walk on land as well."
    );

    const macaw = new ZooAnimal(
        "macawExhibit",
        "macaw",
        "Macaws",
        "Macaws are a species of bird that have many different varieties, and are all considered to be endangered.",
        "macaw.png",
        "Macaws are a subset of parrots and are very beautiful birds. The popular movie, 'Rio' features two blue macaws, one of the subsets of macaws."
    );

    const greenTurtle = new ZooAnimal(
        "greenTurtleExhibit",
        "greenTurtle",
        "Green Turtles",
        "Green turtles are a species of large sea turtles that can exist in tropical and subtropical seas around the world.",
        "greenturtle.png",
        "These turtles are also called black (sea) turtles and tend to migrate long distances between feeding grounds and hatching beaches, like most other types of sea turtles."
    );

    // Creates an array for the animal exhibits.
    const animals = [tiger, dingo, fennec, panda, wolf];
    const endangeredAnimals = [seaOtter, macaw, greenTurtle];

    // Grabs the section the animals and their exhibits will all be appended to.
    const animalExhibit = document.querySelector(".exhibits");
    const endangeredAnimalExhibit = document.querySelector(".endangeredExhibits");

    // Grabs the animal selector from the HTML.
    const animalSelector = document.querySelector("#exhibitSelection");
    const endangeredAnimalSelector = document.querySelector("#endangeredExhibitSelection");

    // Creates an event listener to update the information about the animal that has been selected.
    animalSelector.addEventListener("change", () => {
        const selectedAnimal = animalSelector.value;
        const selectedAnimalData = animals.find(animal => animal.species === selectedAnimal);

        if (selectedAnimalData) {
            animalExhibit.innerHTML = `
            <h3>${selectedAnimalData.name}</h3>
            <img src="${selectedAnimalData.image}" alt="${selectedAnimalData.species} Exhibit" />
            <p>${selectedAnimalData.description}</p>
            <button class="show-more-info">Show/Hide Additional Information</button>
            <p id="${selectedAnimalData.species}Info" style="display: none;">${selectedAnimalData.extraInfo}</p>
        `;
        } else {
            // Tells the user that the must select an animal if they have not already.
            animalExhibit.innerHTML = "Please select an animal."
        }
        
        // Adds an event handler to the more info button for the animal.
        animalExhibit.addEventListener("click", (event) => {
            if (event.target.classList.contains("show-more-info")) {
                const infoElement = event.target.parentElement.querySelector('p[id$="Info"]');
                infoElement.style.display = infoElement.style.display === "none" ? "block" : "none";
            }
        });
    });

    // Creates an event listener to update the information about the endangered animal that has been selected.
    endangeredAnimalSelector.addEventListener("change", () => {
        const selectedEndangeredAnimal = endangeredAnimalSelector.value;
        const selectedEndangeredAnimalData = endangeredAnimals.find(animal => animal.species === selectedEndangeredAnimal);

        if (selectedEndangeredAnimalData) {
            endangeredAnimalExhibit.innerHTML = `
            <h3>${selectedEndangeredAnimalData.name}</h3>
            <img src="${selectedEndangeredAnimalData.image}" alt="${selectedEndangeredAnimalData.species} Exhibit" />
            <p>${selectedEndangeredAnimalData.description}</p>
            <button class="show-more-info">Show/Hide Additional Information</button>
            <p id="${selectedEndangeredAnimalData.species}Info" style="display: none;">${selectedEndangeredAnimalData.extraInfo}</p>
        `;
        } else {
            // Tells the user that the must select an animal if they have not already.
            endangeredAnimalExhibit.innerHTML = "Please select an animal."
        }
        
        // Adds an event handler to the more info button for the animal.
        endangeredAnimalExhibit.addEventListener("click", (event) => {
            if (event.target.classList.contains("show-more-info")) {
                const infoElement = event.target.parentElement.querySelector('p[id$="Info"]');
                infoElement.style.display = infoElement.style.display === "none" ? "block" : "none";
            }
        });
    });

    // Selecting the first animal from the animalSelector element and creating a change event to trigger the updates.
    animalSelector.value = animals[0].species;
    animalSelector.dispatchEvent(new Event("change"));
    
    // Selecting the first animal from the endangeredAnimalSelector element and creating a change event to trigger the updates.
    endangeredAnimalSelector.value = endangeredAnimals[0].species;
    endangeredAnimalSelector.dispatchEvent(new Event("change"));
});