// Set up the AboutMe class.
class AboutMe {
    constructor(
        id,
        name,
        text, 
    ) {
        this.id = id;
        this.name = name;
        this.text = text;
    }
}

// Creates an object for the About Me section.
const aboutMe01 = new AboutMe(
    "aboutMe01",
    "About Me:",
    "I am a 23-year-old transgender-female born and raised in the State of Iowa, and currently living in Wisconsin. I tend to be quite shy and\
    reserved, but once I get to know people, I tend to be quite outgoing and a great friend.</br>\
    Growing up, I was fascinated at an early age by automobiles. The various ways in which they worked, what principles allowed them to function,\
    and above all, their design. Some of my favorite automobiles are from the pre-2000s era, such as my 1988 Ford F-150 project. I was raised in a\
    rural portion of south-eastern Iowa by my mom and stepdad, where I learned the value of working hard. Long days with heavy work, and the vehicles\
    that we had were used to aid in making this work easier for us. The utility of trucks is an especially big factor when it comes to farm work. As\
    such, I find my favorite vehicles are largely trucks."
);

// Creates an array of my projects to add to the web-page.
let aboutMeArray = [aboutMe01];

// Appends each project item to the main.
function renderAbout() {
    const main = document.querySelector(".aboutMeMain");

    aboutMeArray.forEach((aboutMe) => {
        let aboutMeArticle = document.createElement("article");
        aboutMeArticle.classList.add("aboutMe");
        aboutMeArticle.setAttribute("id", aboutMe.id);

        aboutMeArticle.innerHTML = `
            <h2>${aboutMe.name}</h2>
            <p>${aboutMe.text}</p>
        `;

        main.append(aboutMeArticle);
    });
};

// Renders the projects list upon the page being loaded.
document.addEventListener("DOMContentLoaded", renderAbout);