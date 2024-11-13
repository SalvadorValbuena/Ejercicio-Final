const filtrarProductos = require('../js/productos');

// Escribir los tests debajo

let productos = [
    {
        "id": "abrigo-01",
        "titulo": "Campera 1",
        "imagen": "./img/campera-01.jpg",
        "categoria": "camperas",
        "precio": 1000
    },
    {
        "id": "abrigo-02",
        "titulo": "Campera 2",
        "imagen": "./img/campera-02.jpg",
        "categoria": "camperas",
        "precio": 1000
    },
    {
        "id": "abrigo-03",
        "titulo": "Campera 3",
        "imagen": "./img/campera-03.jpg",
        "categoria": "camperas",
        "precio": 1000
    },
    {
        "id": "abrigo-04",
        "titulo": "Campera 4",
        "imagen": "./img/campera-04.jpg",
        "categoria": "camperas",
        "precio": 1000
    },
    {
        "id": "abrigo-05",
        "titulo": "Campera 5",
        "imagen": "./img/campera-05.jpg",
        "categoria": "camperas",
        "precio": 1000
    },
    {
        "id": "camiseta-01",
        "titulo": "Remera 1",
        "imagen": "./img/remera-01.jpg",
        "categoria": "remeras",
        "precio": 1000
    },
    {
        "id": "camiseta-02",
        "titulo": "Remera 2",
        "imagen": "./img/remera-02.jpg",
        "categoria": "remeras",
        "precio": 1000
    },
    {
        "id": "camiseta-03",
        "titulo": "Remera 3",
        "imagen": "./img/remera-03.jpg",
        "categoria": "remeras",
        "precio": 1000
    },
    {
        "id": "camiseta-04",
        "titulo": "Remera 4",
        "imagen": "./img/remera-04.jpg",
        "categoria": "remeras",
        "precio": 1000
    },
    {
        "id": "camiseta-05",
        "titulo": "Remera 5",
        "imagen": "./img/remera-05.jpg",
        "categoria": "remeras",
        "precio": 1000
    },
    {
        "id": "camiseta-06",
        "titulo": "Remera 6",
        "imagen": "./img/remera-06.jpg",
        "categoria": "remeras",
        "precio": 1000
    },
    {
        "id": "camiseta-07",
        "titulo": "Remera 7",
        "imagen": "./img/remera-07.jpg",
        "categoria": "remeras",
        "precio": 1000
    },
    {
        "id": "camiseta-08",
        "titulo": "Remera 8",
        "imagen": "./img/remera-08.jpg",
        "categoria": "remeras",
        "precio": 1000
    },
    {
        "id": "pantalon-01",
        "titulo": "Pantalón 01",
        "imagen": "./img/pantalon-01.png",
        "categoria": "pantalones",
        "precio": 1000
    },
    {
        "id": "pantalon-02",
        "titulo": "Pantalón 02",
        "imagen": "./img/pantalon-02.png",
        "categoria": "pantalones",
        "precio": 1000
    },
    {
        "id": "pantalon-03",
        "titulo": "Pantalón 03",
        "imagen": "./img/pantalon-03.png",
        "categoria": "pantalones",
        "precio": 1000
    },
    {
        "id": "pantalon-04",
        "titulo": "Pantalón 04",
        "imagen": "./img/pantalon-04.png",
        "categoria": "pantalones",
        "precio": 1000
    },
    {
        "id": "pantalon-05",
        "titulo": "Pantalón 05",
        "imagen": "./img/pantalon-05.png",
        "categoria": "pantalones",
        "precio": 1000
    }
]
let filtroCamperas = [
    {
        "id": "abrigo-01",
        "titulo": "Campera 1",
        "imagen": "./img/campera-01.jpg",
        "categoria": "camperas",
        "precio": 1000
    },
    {
        "id": "abrigo-02",
        "titulo": "Campera 2",
        "imagen": "./img/campera-02.jpg",
        "categoria": "camperas",
        "precio": 1000
    },
    {
        "id": "abrigo-03",
        "titulo": "Campera 3",
        "imagen": "./img/campera-03.jpg",
        "categoria": "camperas",
        "precio": 1000
    },
    {
        "id": "abrigo-04",
        "titulo": "Campera 4",
        "imagen": "./img/campera-04.jpg",
        "categoria": "camperas",
        "precio": 1000
    },
    {
        id: "abrigo-05",
        titulo: "Campera 5",
        imagen: "./img/campera-05.jpg",
        categoria: "camperas",
        precio: 1000
    }
];
let filtroRemeras = [{
    "id": "camiseta-01",
    "titulo": "Remera 1",
    "imagen": "./img/remera-01.jpg",
    "categoria": "remeras",
    "precio": 1000
},
{
    "id": "camiseta-02",
    "titulo": "Remera 2",
    "imagen": "./img/remera-02.jpg",
    "categoria": "remeras",
    "precio": 1000
},
{
    "id": "camiseta-03",
    "titulo": "Remera 3",
    "imagen": "./img/remera-03.jpg",
    "categoria": "remeras",
    "precio": 1000
},
{
    "id": "camiseta-04",
    "titulo": "Remera 4",
    "imagen": "./img/remera-04.jpg",
    "categoria": "remeras",
    "precio": 1000
},
{
    "id": "camiseta-05",
    "titulo": "Remera 5",
    "imagen": "./img/remera-05.jpg",
    "categoria": "remeras",
    "precio": 1000
},
{
    "id": "camiseta-06",
    "titulo": "Remera 6",
    "imagen": "./img/remera-06.jpg",
    "categoria": "remeras",
    "precio": 1000
},
{
    "id": "camiseta-07",
    "titulo": "Remera 7",
    "imagen": "./img/remera-07.jpg",
    "categoria": "remeras",
    "precio": 1000
},
{
    "id": "camiseta-08",
    "titulo": "Remera 8",
    "imagen": "./img/remera-08.jpg",
    "categoria": "remeras",
    "precio": 1000
}];
let filtroPantalones = [{
    "id": "pantalon-01",
    "titulo": "Pantalón 01",
    "imagen": "./img/pantalon-01.png",
    "categoria": "pantalones",
    "precio": 1000
},
{
    "id": "pantalon-02",
    "titulo": "Pantalón 02",
    "imagen": "./img/pantalon-02.png",
    "categoria": "pantalones",
    "precio": 1000
},
{
    "id": "pantalon-03",
    "titulo": "Pantalón 03",
    "imagen": "./img/pantalon-03.png",
    "categoria": "pantalones",
    "precio": 1000
},
{
    "id": "pantalon-04",
    "titulo": "Pantalón 04",
    "imagen": "./img/pantalon-04.png",
    "categoria": "pantalones",
    "precio": 1000
},
{
    "id": "pantalon-05",
    "titulo": "Pantalón 05",
    "imagen": "./img/pantalon-05.png",
    "categoria": "pantalones",
    "precio": 1000
}];


test("Devover los productos de la categoria Camperas", () => {
    expect(filtrarProductos(productos, "camperas")).toEqual(filtroCamperas);
});

test("Devover los productos de la categoria Remera", () => {
    expect(filtrarProductos(productos, "remeras")).toEqual(filtroRemeras);
});

test('Devover los productos de la categoria Pantalones', () => {
    expect(filtrarProductos(productos, 'pantalones')).toEqual(filtroPantalones);
});

test('Filtrado de un producto de una categoria no exitente, debe no encontrarlo y devolver vacio', () => {
    expect(filtrarProductos(productos, 'vaqueros')).toEqual([]);
});

test("Filtrar productos con categoria en mayusculas o minusculas con mayusculas debe devolver vacio", () => {
    expect(filtrarProductos(productos, 'CAMPERAS')).toEqual([]);
    expect(filtrarProductos(productos, 'CaMpeRas')).toEqual([]);
});

test("Filtrar todos los productos si la categoria está vacia, devolver vacio", () => {
    expect(filtrarProductos(productos, '')).toEqual([]);
});

test("Para un array de productos vacio devolver uno vacio", () => {
    expect(filtrarProductos([],'remera')).toEqual([]);
}) 
