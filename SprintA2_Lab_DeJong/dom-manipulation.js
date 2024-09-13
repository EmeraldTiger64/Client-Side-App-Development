function renderPage() {
    // Selects each of the elements on the web-page.
    const paragraph = document.querySelector(".para");
    const list = document.querySelector(".list");
    const image = document.querySelector(".image");
    const imageSection = document.querySelector(".imageSection");

    // Changes the text of the paragraph.
    paragraph.textContent = "This is what JavaScript made me say."

    // Appends a button to the end of the section for the image.
    let createButton = document.createElement("button");
    createButton.textContent = "Show/Hide Image";
    createButton.addEventListener("click", () => {
        if (image.style.display === "none") {
            image.style.display = "block";}
        else {
            image.style.display = "none";
        }
    });
    
    // Attach Button to the section.
    imageSection.append(createButton);

    // Adds the event listeners for changing the background of the list.
    list.addEventListener("mouseover", () => {
        list.style.backgroundColor = "blue";
    });
    list.addEventListener("mouseout", () => {
        list.style.backgroundColor = "";
    });
}


// Renders the page contents upon the page being loaded.
document.addEventListener("DOMContentLoaded", renderPage);