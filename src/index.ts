let lista: string[] = ["Fideos", "Arroz", "Azucar"];
let precio: number[] = [88, 75, 125];
let stock: number[] = [255, 345, 415];

let divElementos = document.getElementById("elementos");
let cargarProductos = () => {
  for (let i: number = 0; i < lista.length; i++) {
    let divProductos = document.createElement("div");
    divProductos.classList.add("divProductos");
    let nombreProducto = document.createElement("p");
    nombreProducto.innerHTML = lista[i];
    let precioProducto = document.createElement("p");
    precioProducto.innerHTML = "$" + precio[i];
    let cantidad = document.createElement("input");
    cantidad.id = "cantidad" + [i];
    cantidad.type = "number";
    cantidad.max = String(stock[i]);
    cantidad.min = "0";
    let btn = document.createElement("button");
    btn.id = "btn" + [i];
    btn.innerText = "Al carrito";
    divElementos?.appendChild(divProductos);

    divProductos.appendChild(nombreProducto);
    divProductos.appendChild(precioProducto);

    divProductos.appendChild(cantidad);
    divProductos.appendChild(btn);
  }
};
let comprarProductos = () => {
  let sumaTotal: number = 0;
  for (let i: number = 0; i < lista.length; i++) {
    let boton = document.getElementById("btn" + [i]);
    boton.addEventListener("click", () => {
      let suma: number = 0;
      let cantidad = document.getElementById("cantidad" + [i]);
      let cantidadSeleccionada = Number(cantidad.value);

      if (cantidadSeleccionada < 1 || cantidadSeleccionada > stock[i]) {
        alert("No tenemos ese stock");
      } else {
        suma = suma + precio[i] * cantidadSeleccionada;
        sumaTotal = sumaTotal + suma;
        console.log(
          "Cantidad: " + cantidadSeleccionada + "  de " + lista[i],
          "el precio  es $" + precio[i]
        );

        console.log("El total de  " + lista[i] + " es de $" + suma);
      }
    });
  }
  let btnComprar = document.getElementById("comprar");
  btnComprar.addEventListener("click", () => {
    console.log("La suma total es de" + sumaTotal);
  });
};
cargarProductos();
comprarProductos();
