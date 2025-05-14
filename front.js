document.addEventListener("DOMContentLoaded", function () {
  const botonesComprar = document.querySelectorAll(".boton-comprar");
  const listaCarrito = document.querySelector(".lista-carrito");

  botonesComprar.forEach(boton => {
    boton.addEventListener("click", () => {
      const nombreProducto = boton.getAttribute("data-nombre");
      const itemCarrito = document.createElement("li");
      itemCarrito.textContent = nombreProducto;
      listaCarrito.appendChild(itemCarrito);
    });
  });
});