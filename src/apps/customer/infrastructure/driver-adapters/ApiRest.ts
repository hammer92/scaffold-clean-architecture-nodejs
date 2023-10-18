import { Router } from "express";
import { body } from "express-validator";

import ApiRestModel from "../../../../infrastructure/driver-adapters/express/model/ApiRestModel";
import { route } from "../../../../infrastructure/driver-adapters/express/helper/ValidateRequest";
import { CustomerPostController } from "../controller/CustomerPostController";
import CustomerRepository from "../repository/CustomerRepository";
import CustomerSaveUseCase from "../../applications/CustomerSaveUseCase";


class ApiRestCustomer implements ApiRestModel {
  register(routerApi: Router): void {
    const customerRepository: CustomerRepository = new CustomerRepository()

    // implementacion de api save Customer
    const customerSaveUseCase: CustomerSaveUseCase = new CustomerSaveUseCase(customerRepository)
    const customerPostController: CustomerPostController = new CustomerPostController(customerSaveUseCase);
    
    /**
     * @swagger
     * /pokemons:
     *   get:
     *     summary: Obtener una lista de pokemons.
     *     description: Retorna una lista de pokemons.
     *     responses:
     *       200:
     *         description: Lista de pokemons.
     */
    routerApi.post("/customer",
      [
        body("name").exists(),
        body('email').exists().trim().isEmail(),
      ],
      route(customerPostController.run.bind(customerPostController))
    )

    /**
     * @swagger
     * /demo:
     *   post:
     *     summary: Obtener una lista de pokemons.
     *     description: Retorna una lista de pokemons.
     *     responses:
     *       201:
     *         description: crear de pokemons.
     */
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