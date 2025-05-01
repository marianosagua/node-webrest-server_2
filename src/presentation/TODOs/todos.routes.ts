import { Router } from "express";
import { TodosController } from "./controller";
import { TodoDataSourceImpl, TodoRepositoryImpl } from "../../infrastructure";

export class TodoRoutes {
  static routes(): Router {
    const router = Router(); // Crea una nueva instancia de Router de Express

    const dataSource = new TodoDataSourceImpl(); // Crea una nueva instancia de la fuente de datos
    const todoRepository = new TodoRepositoryImpl(dataSource); // Crea una nueva instancia del repositorio de tareas
    const todoController = new TodosController(todoRepository); // Crea una nueva instancia del controlador de tareas

    router.get("/", todoController.getTodos);
    router.get("/:id", todoController.getTodoById);
    router.post("/", todoController.createTodo);
    router.put("/:id", todoController.updateTodo);
    router.delete("/:id", todoController.deleteTodo);

    return router;
  } // Devuelve el router con las rutas configuradas
}
