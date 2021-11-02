import { Router } from "express";
import {
    getProductos, 
    addProducto,
    updateProducto, 
    deleteProducto
} from "../controllers/productos.controller.js";

const productosRouter = Router();

productosRouter
    .get("/", getProductos)
    .post("/", addProducto)
    .put("/:id", updateProducto)
    .delete("/:id", deleteProducto);

export default productosRouter;