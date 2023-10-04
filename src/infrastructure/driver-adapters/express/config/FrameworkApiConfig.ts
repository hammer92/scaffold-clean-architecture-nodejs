import express, { Application, Router } from "express";
import http from "http";
import { log } from "../../../../helper/ProxyLogger";

export default class FrameworkApiConfig {

  frameworkApi(): Application {
    return express();
  }
  routerApi(): Router {
    return express.Router()
  }
  linten(app: Application): void {
    const server = http.createServer(app);
    server.listen(app.get('port'), function () {
      log.info('Express server listening on port ' + app.get('port'));
    });
  }
}