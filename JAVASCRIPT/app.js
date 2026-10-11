
const productos = [
    {
        id: 1,
        nombre: "Remera 'La Maravilla'",
        categoria: "remeras",
        precio: 25000,
        imagen: "./SRC/remera1.webp"
    },
    {
        id: 2,
        nombre: "Gorra Snapback Flow Factory",
        categoria: "gorras",
        precio: 18000,
        imagen: "./SRC/gorra.webp"
    },
    {
        id: 3,
        nombre: "Remera Arcangel Trenzas",
        categoria: "remeras",
        precio: 45000,
        imagen: "./SRC/remera2.jpg"
    },
    {
        id: 4,
        nombre: "Portada Album 'SR.SANTOS'",
        categoria: "accesorios",
        precio: 28000,
        imagen: "./SRC/album.jpg"
    },
    {
        id: 5,
        nombre: "Cadena Merch Oficial",
        categoria: "accesorios",
        precio: 15000,
        imagen: "./SRC/cadena.png"
    },
    {
        id: 6,
        nombre: "Gorra Trucker Arcángel",
        categoria: "gorras",
        precio: 16500,
        imagen: "./SRC/gorra2.webp"
    },
    {
        id: 7,
        nombre: "Remera Oversize 'Concierto Argentina'",
        categoria: "remeras",
        precio: 42000,
        imagen: "./SRC/remera2.avif"
    },
    {
        id: 8,
        nombre: "Overol Tour Mundial",
        categoria: "accesorios",
        precio: 8000,
        imagen: "./SRC/overol.avif"
    }
];


const contenedorProductos = document.getElementById("contenedor-productos");


const btnTodos = document.getElementById("btn-todos");
const btnRemeras = document.getElementById("btn-remeras");
const btnGorras = document.getElementById("btn-gorras");
const btnAccesorios = document.getElementById("btn-accesorios");

const botonesFiltro = [btnTodos, btnRemeras, btnGorras, btnAccesorios];

// Función para mostrar los productos en el HTML
function mostrarProductos(arrayDeProductos) {
    contenedorProductos.innerHTML = ""; 

    if (arrayDeProductos.length === 0) {
        contenedorProductos.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #777;">No hay productos en esta categoría.</p>`;
        return;
    }

    arrayDeProductos.forEach(producto => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("product-card");

        tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="product-img">
            <div class="product-info">
                <span class="product-category">${producto.categoria}</span>
                <h3 class="product-title">${producto.nombre}</h3>
                <p class="product-price">$${producto.precio.toLocaleString()}</p>
            </div>
        `;
        contenedorProductos.appendChild(tarjeta);
    });
}


function actualizarBotonActivo(botonSeleccionado) {
    botonesFiltro.forEach(btn => btn.classList.remove("active"));
    botonSeleccionado.classList.add("active");
}


btnTodos.addEventListener("click", (e) => {
    actualizarBotonActivo(e.target);
    mostrarProductos(productos); 
});

btnRemeras.addEventListener("click", (e) => {
    actualizarBotonActivo(e.target);
    const filtrados = productos.filter(prod => prod.categoria === "remeras");
    mostrarProductos(filtrados);
});

btnGorras.addEventListener("click", (e) => {
    actualizarBotonActivo(e.target);
    const filtrados = productos.filter(prod => prod.categoria === "gorras");
    mostrarProductos(filtrados);
});

btnAccesorios.addEventListener("click", (e) => {
    actualizarBotonActivo(e.target);
    const filtrados = productos.filter(prod => prod.categoria === "accesorios");
    mostrarProductos(filtrados);
});


document.addEventListener("DOMContentLoaded", () => {
    mostrarProductos(productos);
});