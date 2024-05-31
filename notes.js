// 0. Creamos nuestras listas iniciales
const notes = ["Learn React", "Go to Gym", "Play with friends", "Read a book"];

function createNotes(notitas) {
  // 1. Creamos los elementos necesarios vacios
  const div = document.createElement("div");
  const p = document.createElement("p");
  const button = document.createElement("button");

  // 2. Configuramos los elementos: agregamos atributos, content y event listeners
  div.className = "note";
  p.textContent = `${notitas}`;

  button.textContent = "Delete";
  button.addEventListener("click", function deleteNotes() {
    const pos = notes.indexOf(notitas);
    notes.splice(pos, 1);
    render();
  });56

  // 3. Componemos los elementos para la estructura HTML
  div.append(p, button);

  return div
}

const divPrincipal = document.querySelector(".notes-container");

function render () {
  divPrincipal.innerHTML = "";

  for (let i = 0; i < notes.length; i++) {
    const div = createNotes(notes[i]);
    divPrincipal.append(div);
  }
}
 // 4. Creamos notas nuevas
function handleSubmit (event) {
  event.preventDefault();

  const form = event.target;
  const newNote = form.elements["new-note"].value;

  if (newNote ==="") {
    alert("Enter a new note:");
  } else {
  notes.push(newNote);
  form.reset();
  render();
}}

const form =document.querySelector("form");
form.addEventListener("submit", handleSubmit);

render();