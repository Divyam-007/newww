
function validateInput() {
    let nameInput = document.getElementById("name").value.trim();
    let errorMessage = document.getElementById("error-message");
    let specialSection = document.getElementById("special-section");

    if (nameInput.toLowerCase() === "divyam sharma") {
        errorMessage.textContent = "Welcome, Divyam Sharma!";
        errorMessage.style.color = "green";
        specialSection.style.display = "block"; // Show section
    } else {
        errorMessage.textContent = "Access Denied!";
        errorMessage.style.color = "red";
        specialSection.style.display = "none"; // Hide section
    }
}