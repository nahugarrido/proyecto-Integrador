console.log("testeo 🚗🚗");

const form = document.querySelector("#formTickets");
const borrar = document.querySelector("#borrar");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = document.querySelector("#cantidad");
  const categoria = document.querySelector("#categoria");
  const alerta = document.querySelector(".alerta");

  if (cantidad.value == "") {
    alerta.innerHTML = "Cantidad no seleccionada";
  } else {
    let descuento;
    if (categoria.value == 1) {
      descuento = 0.8;
    } else if (categoria.value == 2) {
      descuento = 0.5;
    } else if (categoria.value == 3) {
      descuento = 0.15;
    }
    const resultado = parseFloat(cantidad.value) * 200 * descuento;
    alerta.innerHTML = `Total a pagar: $${resultado}`;
    alerta.classList.remove("hidden");
  }
});

borrar.addEventListener("click", (event) => {
  event.preventDefault();

  const cantidad = document.querySelector("#cantidad");
  const nombre = document.querySelector("#nombre");
  const apellido = document.querySelector("#apellido");
  const email = document.querySelector("#email");
  const alerta = document.querySelector(".alerta");

  cantidad.value = "";
  nombre.value = "";
  apellido.value = "";
  email.value = "";
  alerta.innerHTML = `Total a pagar: $`;
});
