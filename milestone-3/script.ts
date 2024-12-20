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

  // Create the resume content
  resumeContent.innerHTML = `
    <h1 class="resume-heading">${name}</h1>
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

form.addEventListener("submit", generateResume);
