import { Router } from "express";
import { body } from "express-validator";

import ApiRestModel from "../../../../infrastructure/driver-adapters/express/model/ApiRestModel";
import { route } from "../../../../infrastructure/driver-adapters/express/helper/ValidateRequest";
import { CustomerPostController } from "../controller/CustomerPostController";
import CustomerRepository from "../repository/CustomerRepository";
import CustomerSaveUseCase from "../../applications/CustomerSaveUseCase";


class ApiRestCustomer implements ApiRestModel {
  register(routerApi: Router): void {
    const customerRepository:CustomerRepository = new CustomerRepository()

    // implementacion de api save Customer
    const customerSaveUseCase:CustomerSaveUseCase = new CustomerSaveUseCase(customerRepository)
    const customerPostController: CustomerPostController = new CustomerPostController(customerSaveUseCase);
    routerApi.post("/customer",  
      [
        body("name").exists(),
        body('email').exists().trim().isEmail(),
      ],
      route(customerPostController.run.bind(customerPostController))
    )


  }
}
export default new ApiRestCustomer()