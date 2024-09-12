// Set up the Project class.
class Project {
    constructor(
        id,
        name,
        image,
        text, 
    ) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.text = text;
    }
}

// Creates an object for the DVC Website project.
const dvc = new Project(
    "dvc",
    "Diamond Vehicle Corporation (DVC) Website:",
    "../assets/dvcHomePage.png",
    "During my second year at William Penn University, I had to create a very basic website for one of my classes. I decided upon creating a website for a fictional\
    automotive company called Diamond Vehicle Corporation. This was a basic introduction to the HTML and CSS languages and is something that I am genuinely proud\
    of having done. While the website looks like a website from the late 90s, it was a good introduction to web design and programming. As for DVC, it exists in a\
    story project that I had been working on with friends at the time, that is currently a dead project, but the website's files that I still have are a great\
    reminder of the project. My professor in that class was genuinely impressed with the project and how generally clean the website was, despite it's primative looks.\
    As for the information that is contained on the site, it is some basic lore that I could remember at the time about the company as it relates to the project. The only\
    page with content is the main page that is pictured, but the nav par at the top does work with a very basic page behind each that states that those pages are empty right now."
);

// Creates an object for the Center Punch project.
const centerPunch = new Project(
    "centerPunch",
    "Lathed Center Punch:",
    "../assets/centerPunch.png",
    "During my first year at William Penn University I was going for a mechanical engineering degree, and as a part of that degree I needed to take a\
    metalworking class. Throughout this class we had a variety of metal-working labs that we had to do each week, and one of my prouder projects from that time in the\
    metals shop was a center punch that I had to turn out on one of the lathes, before moving onto sanding, buffing, and polishing it. Throughout that process, we also\
    had to heat-treat the punch, then buff and polish it again, before finally tempering the punch end of the part and buffing and polishing again. The whole thing was\
    a process, but I learned a ton throughout the process and would absolutely love to do it again someday. However, I ended up switching my degree from mechanical enginnering\
    to software engineering my second year at William Penn."
);

// Creates an object for the Trip Estimator project.
const tripEstimator = new Project(
    "tripEstimator",
    "Trip Cost Estimator Website:",
    "../assets/tripEstimatorPage.png",
    "During my second year at William Penn while finishing up my web programming class, we had to design a very basic website that utilized some form of JavaScript on\
    the server-side. This was my first experience with creating basic forms and messing with JavaScript as well as my first experience delving into the different nuances of server-side\
    vs client-side web development. For this final project of the semester, I decided to create a web-based automotive trip estimator. To use this website, you would input the miles you\
    plan to travel, the fuel mileage of your car, average fuel prices, the average cost of an oil change, and the average tire price. Using the JavaScript, the website will do the math using\
    the most typical intervals for oil and tire changes, and will estimate the overall cost of a trip in terms of the amount of fuel used as well as the wear on the tires and oil based on the\
    miles that the user plans to travel. While not overly-complex and certainly not considering every wear cost on a vehicle, the website is simple and was a great way to fully serve as a gauge\
    for how well I was grasping basic HTML, CSS, and JavaScript."
);

// Creates an array of my projects to add to the web-page.
let projectsArray = [dvc, centerPunch, tripEstimator];

// Appends each project item to the main.
function renderProjects() {
    const main = document.querySelector(".academicProjects");

    projectsArray.forEach((project) => {
        let projectArticle = document.createElement("article");
        projectArticle.classList.add("project");
        projectArticle.setAttribute("id", project.id);

        projectArticle.innerHTML = `
            <h2 class="project__name">${project.name}</h2>
            <img class="project__image" src=${project.image}>
            <p class="project__text">${project.text}</p>
        `;

        main.append(projectArticle);
    });
};

// Renders the projects list upon the page being loaded.
document.addEventListener("DOMContentLoaded", renderProjects);