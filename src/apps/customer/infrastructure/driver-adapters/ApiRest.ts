import { Router,Request, Response } from "express";

export const register = (routerApi: Router): void => {
  //const coursesGetController: CoursesGetController = new CoursesGetController();
  //app.get("/api/courses", coursesGetController.run.bind(coursesGetController));
  routerApi.get("/customer", (req: Request, res: Response) => {
    return res.status(200).send("ok")
  })
};
