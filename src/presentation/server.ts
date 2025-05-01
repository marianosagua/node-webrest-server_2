import express, { Router } from "express";
import path from "path";

interface Options {
  port: number;
  public_path?: string;
  routes: Router;
}

const compression = require("compression"); // Middleware para comprimir la respuesta HTTP

export class Server {
  private app = express();
  private readonly port: number;
  private readonly publicPath: string;
  private readonly routes: Router;

  constructor(options: Options) {
    const { port, public_path = "public", routes } = options;
    this.port = port;
    this.publicPath = public_path;
    this.routes = routes;
  } // Constructor de la clase Server que recibe opciones como el puerto, la ruta pública y las rutas de la API

  async start() {
    // Configuración de la aplicación Express
    this.app.use(express.json()); // Maneja datos JSON en solicitudes
    this.app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded
    this.app.use(compression()); // Aumenta la velocidad de respuesta de la peticion
    this.app.use(express.static(this.publicPath)); // Sirve archivos estáticos desde la carpeta public
    this.app.use(this.routes); // Rutas de la API
    this.app.use("*", (req, res) => {
      const indexPath = path.join(
        __dirname + `../../../${this.publicPath}/index.html`
      ); // Ruta del archivo index.html

      res.sendFile(indexPath); // Envía el archivo index.html como respuesta
    }); // Sirve el index.html para cualquier otra ruta

    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    }); // Inicia el servidor en el puerto especificado
  }
}
