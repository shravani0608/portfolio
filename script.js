fetch("http://localhost:5000/api/profile")
.then(res => res.json())
.then(data => {

  document.getElementById("name").innerText = data.name;

  data.skills.forEach(skill => {
    let li = document.createElement("li");
    li.innerText = skill;
    document.getElementById("skills").appendChild(li);
  });

  data.projects.forEach(p => {
    document.getElementById("projects").innerHTML +=
      `<p>${p.title}</p>`;
  });
});


// Contact form
document.getElementById("contactForm").addEventListener("submit", e => {

  e.preventDefault();

  fetch("http://localhost:5000/api/contact", {
    method: "POST",
    headers: { "Content-Type":"application/json" },

    body: JSON.stringify({
      name: nameInput.value,
      email: emailInput.value,
      message: msgInput.value
    })
  });

  alert("Message Sent!");
});
