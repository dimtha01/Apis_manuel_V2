import express from "express";
import morgan from "morgan";
import cors from "cors"; // Importa el paquete cors


const app = express();

// Middlewares
app.use(cors()); 
app.use(morgan("dev"));
app.use(express.json());

app.use("/", ()=>{messeje: ""});


// Middleware para manejar rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;