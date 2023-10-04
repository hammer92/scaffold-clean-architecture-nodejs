import { Application, Request, Response, Router } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan"
import FrameworkApiConfig from "../config/FrameworkApiConfig";
import { internalServerError, notFound } from "./ErrorMiddleware";
import { ResponseBuilder } from "./ResponseBuilder";
import ApiRestModel from "../model/ApiRestModel";

export default abstract class TemplateAdapterExpress {
  private readonly _frameworkApi: FrameworkApiConfig;
  private readonly _app: Application;
  private readonly _router: Router;

  protected constructor() {
    this._frameworkApi = new FrameworkApiConfig()
    this._app = this._frameworkApi.frameworkApi()
    this._router = this._frameworkApi.routerApi()
    this.setUp()
  }

  public abstract setRoutes(): void;
  async registerRouter(routePath: string) {
    const route: ApiRestModel = await import(routePath).then(imp => imp.default)
    route.register(this._router);
  }
  public setUp(): void {
    this._app.set('port', process.env.PORT || 3000);
    this._app.set('api-version', process.env.API_VERSION || "1.0");
    this.setMiddleware();
    this.setRoutes();
    this.catchErrors();
  }

  private setMiddleware(): void {
    this._app.use(cors());
    this._app.use(bodyParser.json());
    this._app.use(bodyParser.urlencoded({ extended: true }));

    this._app.use(morgan('tiny'));

    this._app.use(`/api/${this._app.get('api-version')}`, this._router);

    this._router.get("/status", (req: Request, res: Response) => {
      return res.status(200).send(
        new ResponseBuilder()
          .setMessage("Express Run")
          .setMeta({
            PORT: this._app.get('port'),
            API_VERSION: this._app.get('api-version'),
            NODE_ENV: this._app.get('port'),
          }).toJSON()
      );
    });
  }

  private catchErrors(): void {
    this._app.use(notFound);
    this._app.use(internalServerError);
  }

  run(): void {
    this._frameworkApi.linten(this._app)
  }
}
