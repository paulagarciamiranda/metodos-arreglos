const tareaInput = document.getElementById("nuevaTarea");
const btnAgregarTarea = document.getElementById("agregarTarea");
const listaTareas = document.getElementById("listaTareas");
const contador = document.getElementById("cuenta-tareas");
const contadorCompletadas = document.getElementById("cuenta-completadas");

const tareas = [
  { id: 1, nombre: "Meditar", completado: false },
  { id: 2, nombre: "Estudiar", completado: false },
  { id: 3, nombre: "Hacer ejercicio", completado: false },
];

let siguienteId = tareas.length > 0 ? Math.max(...tareas.map(t => t.id)) + 1 : 1;

function renderTareas() {
  let html = "";
  for (let tarea of tareas) {
    const tachado = tarea.completado ? "tachado" : "";
    html += `<li class="${tachado}">${tarea.id} ${tarea.nombre} <input type="checkbox" ${
      tarea.completado ? "checked" : ""
    } onclick="completado(${tarea.id})"> <button onclick="borrar(${
      tarea.id
    })"> Eliminar </button> </li>`;
  }
  listaTareas.innerHTML = html;
  renderContadores()
  
}

function completado(id) {
  const index = tareas.findIndex((tarea) => tarea.id === id);
  if (index !== -1) {
    tareas[index].completado = !tareas[index].completado;
  }
  renderTareas();
}

function renderContadores(){
    const totalTareas = tareas.length;
    const tareasListas = tareas.filter(tarea => tarea.completado).length;
    contadorCompletadas.textContent = `Realizadas: ${tareasListas}`;
    contador.textContent = `Total: ${tareas.length}`;
}

btnAgregarTarea.addEventListener("click", () => {
  const nuevaTarea = tareaInput.value;
  tareas.push({ id: siguienteId, nombre: nuevaTarea, completado: false });
  tareaInput.value = "";
  renderTareas();
});

function borrar(id) {
  const index = tareas.findIndex((ele) => ele.id == id);
  tareas.splice(index, 1);
  renderTareas();
}
renderTareas()
