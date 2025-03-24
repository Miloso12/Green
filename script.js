document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || phone === "" || message === "") {
        alert("All fields are required!");
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address!");
    } else {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
document.getElementById("reviewForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    let name = document.getElementById("name").value;
    let rating = document.getElementById("rating").value;
    let message = document.getElementById("message").value;

    let reviewContainer = document.createElement("div");
    reviewContainer.classList.add("review");

    reviewContainer.innerHTML = `
        <img src="default-user.jpg" alt="${name}">
        <h2>${name}</h2>
        <p>${"⭐".repeat(rating)}</p>
        <p>"${message}"</p>
    `;

    document.getElementById("reviews").appendChild(reviewContainer);

    document.getElementById("reviewForm").reset(); // Clear form fields
});
// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});