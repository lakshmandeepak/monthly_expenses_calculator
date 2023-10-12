script.js
// Function to extract query parameters from the URL
function getQueryParams() {
    const queryParams = {};
    const queryString = window.location.search.substring(1);
    const params = queryString.split('&');
    for (const param of params) {
        const [key, value] = param.split('=');
        queryParams[key] = decodeURIComponent(value);
    }
    return queryParams;
}

// Retrieve query parameters
const queryParams = getQueryParams();

// Populate the profile page with user data from query parameters
const nameContainer = document.getElementById("nameContainer");
const emailContainer = document.getElementById("emailContainer");
const mobileContainer = document.getElementById("mobileContainer");
const genderContainer = document.getElementById("genderContainer");
const dobContainer = document.getElementById("dobContainer");

// Populate the containers with user data from query parameters
if (queryParams.username) {
    nameContainer.textContent = " " + queryParams.username;
}

if (queryParams.email) {
    emailContainer.textContent = " " + queryParams.email;
}

if (queryParams.mobile) {
    mobileContainer.textContent = "  " + queryParams.mobile;
}

if (queryParams.gender) {
    genderContainer.textContent = "  " + queryParams.gender;
}

if (queryParams.dob) {
    dobContainer.textContent = " " + queryParams.dob;
}