const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeContent = document.getElementById(
  "resumeContent"
) as HTMLDivElement;

function generateResume(event: Event) {
  event.preventDefault();

  const name = (document.getElementById("name") as HTMLInputElement).value;
  const fatherName = (
    document.getElementById("father-name") as HTMLInputElement
  ).value;
  const age = (document.querySelector(".age") as HTMLInputElement).value;
  const contact = (document.getElementById("contact") as HTMLInputElement)
    .value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const address = (document.getElementById("address") as HTMLInputElement)
    .value;
  const education = (
    document.getElementById("education") as HTMLTextAreaElement
  ).value;
  const skills = (document.getElementById("skills") as HTMLTextAreaElement)
    .value;
  const experience = (
    document.getElementById("experience") as HTMLTextAreaElement
  ).value;


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
