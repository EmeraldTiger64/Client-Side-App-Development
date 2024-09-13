document.addEventListener("DOMContentLoaded", () => {
    // Set up the ZooAnimal class.
    class ZooAnimal {
        constructor(
            id,
            species, 
            description,
            image,
            extraInfo
        ) {
            this.id = id;
            this.species = species;
            this.description = description;
            this.image = image;
            this.extraInfo = extraInfo;
        }
    };

    // Creates the animals.
    const tiger = new ZooAnimal(
        "tigerExhibit",
        "Tiger",
        "A majestic big cat, the tiger is a strong animal adorned with stripes.",
        "tiger.png",
        "Tigers are carnivores that come in a variety of colors, but they have one major feature that is their memorable stripes."
    );

    const dingo = new ZooAnimal(
        "dingoExhibit",
        "Dingo",
        "The dingo is a small canine.",
        "dingo.png",
        "Dingos are a small canine commonly found in savhannas."
    );

    const fennec = new ZooAnimal(
        "fennecFoxExhibit",
        "Fennec Fox",
        "Fennecs are a small fox.",
        "fennec.png",
        "Fennec are a small, carnivoris canine belonging to the fox family. They are most well-known for their large, \
        radar-dish-like ears and they are typically found in deserts."
    );

    // Creates an array for the animal exhibits.
    const animals = [tiger, dingo, fennec];

    // Grabs the section the animals and their exhibits will all be appended to.
    const animalExhibits = document.querySelector(".exhibits");

    // Creates the animal exhibit for each animal.
    animals.forEach((animal) => {
        const animalExhibitArticle = document.createElement("article");
        animalExhibitArticle.classList.add("animalExhibit");

        animalExhibitArticle.innerHTML = `
            <h3>${animal.species}</h3>
            <img src="${animal.image}" alt="${animal.species} Exhibit" />
            <p>${animal.description}</p>
            <button>Show/Hide Additional Information</button>
            <p id="${animal.species}Info" style="display: none;">${animal.extraInfo}</p>
        `;

        animalExhibits.addEventListener("click", (event) => {
            if (event.target.tagName === "BUTTON") {
                const infoElement = event.target.closest(".animalExhibit").querySelector('p[id$="Info"]');
                infoElement.style.display = infoElement.style.display === "none" ? "block" : "none";
            }
        });
        
        animalExhibits.append(animalExhibitArticle);
    });
});