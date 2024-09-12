// Form Location
let form = document.querySelector(".survey");

// Create form
let cform = document.createElement("form");
cform.classList.add("contactSurvey");
cform.id = "contactForm";
cform.innerHTML = `
    <fieldset id="busiInfo">
        <legend>Business Information</legend>
        <div class="formRow">
            <label for="company">Company</label>
            <input name="company" id="company" type="text" required />
        </div>
        <div class="formRow">
            <label for="firstName">First Name*</label>
            <input name="firstName" id="firstName" type="text" required />
        </div>
        <div class="formRow">
            <label for="lastName">Last Name*</label>
            <input name="lastName" id="lastName" type="text" required />
        </div>
        <div class="formRow">
            <label for="street">Street address</label>
            <input name="custStreet" id="street" type="text" required />
        </div>
        <div class="formRow">
            <label for="city">City</label>
            <input name="city" id="city" type="text" value="-city-" required />
        </div>
        <div class="formRow">
            <label for="state">State</label>
            <input name="state" id="state" type="text" value="--" required />
        </div>
        <div class="formRow">
            <label for="zip">Postal code</label>
            <input name="zip" id="zip" type="text" placeholder="nnnnn (-nnnn)" pattern="^\d{5}(-\d{4})?$" required />
        </div>
        <div class="formRow">
            <label for="phone">Phone number</label>
            <input name="phone" id="phone" type="tel" placeholder="(nnn) nnn-nnnn" pattern="^\d{10}$|^(\(\d{3}\)\s*)?\d{3}[\s-]?\d{4}$" required />
        </div>
        <div class="formRow">
            <label for="mail">E-mail*</label>
            <input name="email" id="mail" type="email" required />
        </div>
        <label for="commBox">Let us know if you have any comments.</label>
        <textarea name="custExp" id="commBox"></textarea>
    </fieldset>
    <div id="buttons">
        <input type="submit" value="Submit" />
    </div>
`;

// Appends the form to the About.html page.
form.append(cform);