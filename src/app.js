import Express from "express";
import {errorHandlerMiddleware} from "./middlewares/errorHandler.js";
import carritoRouter from "./routes/carrito.routes.js";
import productosRouter from "./routes/productos.routes.js";

const app = Express();
app.use(Express.json());


app.get("/", (_, res) => {
    res.json("hola")
})

app.use("/productos", productosRouter);
app.use("/carrito", carritoRouter);
app.use(errorHandlerMiddleware);

export default app;