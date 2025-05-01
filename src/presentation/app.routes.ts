import { Router } from "express";
import { TodoRoutes } from "./todos/todos.routes";

export class AppRoutes {
  static routes(): Router {
    const router = Router(); // Crea una nueva instancia de Router de Express

    router.use("/api/todos", TodoRoutes.routes()); // Usa las rutas de la API de todos en la ruta /api/todos

    return router;
  } // Devuelve el router con las rutas configuradas
}
