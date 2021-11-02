import { Carrito } from "../models/Carrito.js";
import fs from 'fs';

const carrito = new Carrito();

export const getCarrito = (req, res) => {
    return res.status(200).json(carrito);
}

export const getProductoCarrito = (req, res) => {
    return res.json(carrito.productos);
};

export const addCarrito = (req, res) => {
    const {body} = req;

    carrito.productos.push(body);
    let data = JSON.stringify(body);
    fs.writeFile('./src/carrito.json', data, ()=> console.log("producto agregado al carrito"));
    console.log(body);
    return res.status(201).json(body);

}   

export const deleteCarrito = (req, res) => {
    const {id} = req.params;
    const index = carrito.productos.findIndex((producto) => producto.id == id);
    const deleted = carrito.productos.splice(index, 1);

    return res.status(200).json(deleted);
}