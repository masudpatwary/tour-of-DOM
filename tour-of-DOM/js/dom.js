const mainContainer = document.getElementById("main_container");
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "new title for places";
section.appendChild(h1);

const ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.innerText = "Sundarbon";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "Bandarbon";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "Katabon";
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);

const dressSection = document.createElement("section");
dressSection.innerHTML = `
<h1>Cloth List</h1>
<ul>
<li>Jamper</li>
<li>T-Shirt</li>
<li>Genji</li>
</ul>
`;
mainContainer.appendChild(dressSection);

const friends = document.createElement("section");
friends.innerHTML = `
<h1>Friend List</h1>
<ul>
<li>Abul</li>
<li>Kabul</li>
<li>Nabu</li>
</ul>
`;
mainContainer.appendChild(friends);

const sectionStyle = document.querySelectorAll("section");
for (const sections of sectionStyle) {
  sections.style.border = "2px solid green";
  sections.style.marginBottom = "15px";
  sections.style.padding = "20px";
  sections.style.borderRadius = "15px";
  sections.style.backgroundColor = "lightgray";
}
