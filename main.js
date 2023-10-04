const mask = document.querySelector(".mask");
const inputs = document.querySelector("input");
inputs.focus();

function calcola() {
  let numero = Number(inputs.value);
  let array_solution = [1, 1, 2];
  let nuovo_numero;

  while (mask.childElementCount > 1) {
    mask.lastChild.remove();
  }
  do {
    let lunghezza = array_solution.length;
    if (array_solution[lunghezza - 1] <= numero) {
      nuovo_numero =
        array_solution[lunghezza - 1] + array_solution[lunghezza - 2];
      if (nuovo_numero <= numero) {
        array_solution.push(nuovo_numero);
      }
    }
  } while (numero > 2 && nuovo_numero <= numero);

  for (j = 0; j < array_solution.length; j++) {
    output = document.createElement("p");
    output.append(array_solution[j]);
    mask.appendChild(output);
  }
}
inputs.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    calcola();
  }
});