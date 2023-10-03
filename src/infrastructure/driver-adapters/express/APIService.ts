import { join } from "path";
import { globSync } from 'glob'
import TemplateAdapterExpress from "./helper/TemplateAdapterExpress";
import { log } from "../../../helper/ProxyLogger";

class APIService extends TemplateAdapterExpress {
  constructor() {
    super();
  }

  public setRoutes(): void {
    //this.express.use(`/api/${config.API_VERSION}`, apiUser);
    const routes = globSync('src/apps/**/ApiRest.*');  
    routes.forEach((route) => this.registerRouter(join(process.cwd(),route)));
  }

  
}

export default new APIService();
