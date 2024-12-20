"use strict";
// Get the form and resume elements
const form = document.getElementById('resume-form');
const resumeContent = document.getElementById('resumeContent');
// Function to generate the resume
function generateResume(event) {
    event.preventDefault();
    //Get form values
    const name = document.getElementById('name').value;
    const fatherName = document.getElementById('father-name').value;
    const age = document.querySelector('.age').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;
    const experience = document.getElementById('experience').value;
    // Create the resume content
    resumeContent.innerHTML = `
    <h2 class="resume-heading">${name}</h2>
    <h3 class="label-heading">Personal Information</h3>
    <p class="personal-info"><strong>Name:</strong> ${name}</p>    
    <p class="personal-info"><strong>Father Name:</strong> ${fatherName}</p>
    <p class="personal-info"><strong>Age:</strong> ${age}</p>
    <p class="personal-info"><strong>Contact:</strong> ${contact}</p>
    <p class="personal-info"><strong>Email:</strong> ${email}</p>
    <p class="personal-info"><strong>Address:</strong> ${address}</p>
    <h3 class="label-heading">Education</h3>    
    <p><strong>Education:</strong> ${education}</p>
    <h3 class="label-heading">Skills</h3>    
    <p><strong>Skills:</strong> ${skills}</p>
    <h3 class="label-heading">Experience</h3>     
    <p><strong>Experience:</strong> ${experience}</p>
    `;
}
// Event listener for form submission
form.addEventListener('submit', generateResume);
