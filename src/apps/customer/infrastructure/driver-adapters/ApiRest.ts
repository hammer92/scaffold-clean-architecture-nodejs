import { Router,Request, Response } from "express";
import ApiRestModel from "../../../../infrastructure/driver-adapters/express/model/ApiRestModel";
import { ResponseBuilder } from "../../../../infrastructure/driver-adapters/express/helper/ResponseBuilder";

class ApiRestCustomer implements ApiRestModel{
  register(routerApi: Router): void {
      //const coursesGetController: CoursesGetController = new CoursesGetController();
  //app.get("/api/courses", coursesGetController.run.bind(coursesGetController));
    routerApi.get("/customer", (req: Request, res: Response) => {
      return res.status(200).json(new ResponseBuilder().setData({demo:"string"}).toJSON())
    })
  }
}
export default new ApiRestCustomer()