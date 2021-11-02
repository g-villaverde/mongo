import { v4 } from "uuid";

export class Producto {
    constructor(id, timestamp, nombre, descripcion, codigo, foto, precio, stock) {
        this.id = v4();
        this.timestamp = Date.now();
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.codigo = codigo;
        this.foto = foto;
        this.precio = precio;
        this.stock = stock;
    }
}