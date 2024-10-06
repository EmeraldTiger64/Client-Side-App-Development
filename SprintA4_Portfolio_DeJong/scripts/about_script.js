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

const biography01 = new AboutMe(
    "biography01",
    "Biography Part 1",
    "I have had a number of jobs in retail over the years, as well as having worked in a factory for a period of time. I grew up on a farm and found\
    working on vehicles to be a fun hobby for myself. Furthermore, I have developed a love for working with computers and want to begin developing my\
    own video games. Finally, my future plans involve continuing to hone my skills and potentially learning to develop my own video games, or possibly\
    open up my own automotive shop to take advantage of my natural abilities to understand automobiles and the various systems they contain."
);

const testimonial01 = new AboutMe(
    "testimonial01",
    "Testimonial 1",
    "Emerald is an amazing achiever and someone whom everyone should look up to. She is an inspiration for all young people. <br>\
    ~ Rico Levi Oliver"
);

const testimonial02 = new AboutMe(
    "testimonial02",
    "Testimonial 2",
    "Emerald is a great friend to all of her friends, and she holds her friends as close as family. She is dedicated to those she sees as family. <br>\
    ~ Neo Lynn Tiger"
);

// Creates an array of my projects to add to the web-page.
let aboutMeArray = [aboutMe01];
let biography = [biography01];
let testimonials = [testimonial01, testimonial02];

// Appends each AboutMe to the main.
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
// Appends each biography section item to the main.
function renderBiographys() {
    const mainBio = document.querySelector("#biography");

    biography.forEach((aboutMe) => {
        let bio = document.createElement("article");
        bio.classList.add("biography");
        bio.setAttribute("id", aboutMe.id);

        bio.innerHTML = `
            <p>${aboutMe.text}</p>
        `;

        mainBio.append(bio);
    });
};
// Appends each testimonial item to the main.
function renderTestimonials() {
    const mainTesti = document.querySelector("#testimonials");

    testimonials.forEach((aboutMe) => {
        let testimonial = document.createElement("article");
        testimonial.classList.add("testimonials");
        testimonial.setAttribute("id", aboutMe.id);

        testimonial.innerHTML = `
            <p>${aboutMe.text}</p>
        `;

        mainTesti.append(testimonial);
    });
};

// Renders the projects list upon the page being loaded.
document.addEventListener("DOMContentLoaded", renderAbout);
document.addEventListener("DOMContentLoaded", renderBiographys);
document.addEventListener("DOMContentLoaded", renderTestimonials);