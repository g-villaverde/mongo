import {Producto} from "../models/Productos.js";
import { Mongoose } from "mongoose";
import * as model from "../models/persistencia/productos.js"


CRUD()

async function CRUD() {
    try (
        const URL = 'mongodb://localhost:27017/ecommerce'
        let rta = await Mongoose.connect(URL, {
            useNewUrlParser :true,
            useUnifiedTopology: true
        })
        console.log("Base de datos conectada");
    ) catch(err) {
        console.log(err);
    }
}


const productos = [];

let data = fs.readFileSync('./src/productos.json');
let readData = JSON.parse(data);

export const getProductos = (req, res) => {
    return res.status(200).json(readData);
}

export const addProducto = (req, res) => {

    /* if(!config.isAdmin)
        next({route: "hola", method: "POST"});
 */
    const {id, timestamp, nombre, descripcion, codigo, foto, precio, stock} = req.body;

    const newProducto = new Producto(id, timestamp, nombre, descripcion, codigo, foto, precio, stock);
    productos.push(newProducto);
    console.log(newProducto);
    const saveProductoModel = new module.newProducts(newProduct);
		let saveProducto = await saveProductoModel.save();

		res.send(new Response(saveProducto));
    return res.status(201).json(newProducto);

};

export const updateProducto = (req, res) => {
    const {id} = req.params;
    const {nombre, descripcion, codigo, foto, precio, stock} = req.body;

    const producto = producto.find((producto)=> producto.id == id);
    if(!producto) {
        return res.status(404).json({msg: "producto no encontrado"});
    }
    (producto.nombre = nombre),
        (producto.descripcion = descripcion),
        (producto.codigo = codigo),
        (producto.foto = foto),
        (producto.prcio = precio),
        (producto.stock = stock);

    let productoUpdate = await model.productos.updateOne(producto)
     
    res.status(200).json(productoUpdate)

};

export const deleteProducto = (req, res) => {

    const {id} = req.params;

    const producto = productos.find((producto)=> producto.id == id);
    if(!producto) {
        return res.status(404).json({msg: "producto no encontrado"});
    }

    const index = productos.findIndex((producto) => producto.id == id);
    producto.splice(index, 1);

    res.status(200).end();

}

