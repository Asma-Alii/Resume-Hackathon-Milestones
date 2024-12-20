"use strict";
const form = document.getElementById("resume-form");
const resumeContent = document.getElementById("resumeContent");
function generateResume(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const fatherName = document.getElementById("father-name").value;
    const age = document.querySelector(".age").value;
    const contact = document.getElementById("contact")
        .value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address")
        .value;
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills")
        .value;
    const experience = document.getElementById("experience").value;
    resumeContent.innerHTML = `
    <h1 class="resume-heading" contenteditable="true">${name}</h1>
    <h3 class="label-heading">Personal Information</h3>
    <p class="personal-info" <strong> Name:</strong> <span contenteditable="true">${name} </span></p>    
    <p class="personal-info" <strong>Father Name:</strong> <span contenteditable="true"> ${fatherName} </span> </p>
    <p class="personal-info" <strong>Age:</strong> <span contenteditable="true"> ${age} </span> </p>
    <p class="personal-info" <strong>Contact:</strong> <span contenteditable="true">${contact} </span> </p>
    <p class="personal-info" <strong>Email:</strong> <span contenteditable="true"> ${email} </span> </p>
    <p class="personal-info" <strong>Address:</strong> <span contenteditable="true"> ${address} </span> </p>
    <h3 class="label-heading">Education</h3>    
    <p class="education-info" <strong>Education:</strong> <span contenteditable="true"> ${education} </span> </p>
    <h3 class="label-heading">Skills</h3>    
    <p class="skills-info" <strong>Skills:</strong> <span contenteditable="true"> ${skills} </span> </p>
    <h3 class="label-heading">Experience</h3>     
    <p class="experience-info" <strong>Experience:</strong> <span contenteditable="true"> ${experience} </span> </p>
   
  `;
}
form.addEventListener("submit", generateResume);
