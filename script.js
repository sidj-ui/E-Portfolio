document.getElementById('cv-download').addEventListener('click', function(e) {
    alert("Functionality check: Initiating CV Download...");
});

const detailsBtn = document.getElementById('details-btn');
const projectDetails = document.getElementById('project-details');

detailsBtn.addEventListener('click', () => {
    if (projectDetails.classList.contains('hidden')) {
        projectDetails.classList.remove('hidden');
        detailsBtn.textContent = "Hide Details";
    } else {
        projectDetails.classList.add('hidden');
        detailsBtn.textContent = "View More Details";
    }
});

const contactForm = document.getElementById('contact-form');
const statusMsg = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('full-name').value;
    
    if (name.length < 3) {
        statusMsg.textContent = "Please enter a valid name (min 3 characters).";
        statusMsg.style.color = "red";
    } else {
        statusMsg.textContent = `Success! Thank you, ${name}. Message sent.`;
        statusMsg.style.color = "#b56eff";
        contactForm.reset();
    }
});