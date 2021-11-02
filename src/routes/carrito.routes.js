import { Router } from "express";
import{
    getCarrito,
    getProductoCarrito,
    addCarrito,
    deleteCarrito
} from "../controllers/carrito.controller.js";

const carritoRouter = Router();

carritoRouter
    .get("/", getCarrito)
    .get("/", getProductoCarrito)
    .post("/", addCarrito)
    .delete("/:id", deleteCarrito)

export default carritoRouter;