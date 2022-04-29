let lista: string[] = ["Fideos", "Arroz", "Azucar"];
let precio: number[] = [88, 75, 125];
let stock: number[] = [255, 345, 415];

let divElementos = document.getElementById("elementos");
let cargarProductos = () => {
  for (let i: number = 0; i < lista.length; i++) {
    let divProductos = document.createElement("div");
    let nombreProducto = document.createElement("p");
    nombreProducto.innerHTML = lista[i];
    let precioProducto = document.createElement("p");
    precioProducto.innerHTML = "$" + precio[i];
    let cantidad = document.createComment("input");
    cantidad.id = "cantidad" + [i];
    cantidad.type = "number";
    cantidad.max = String(stock[i]);
    cantidad.min = "0";
    divElementos?.appendChild(divProductos);

    divProductos.appendChild(nombreProducto);
    divProductos.appendChild(precioProducto);

    divProductos.appendChild(cantidad);
  }
};
cargarProductos();
