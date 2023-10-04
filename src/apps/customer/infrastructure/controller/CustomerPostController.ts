import { Customer } from "../../domain/model/Customer";
import { TypedRequest, TypedResponse } from "../../../../infrastructure/driver-adapters/express/model/TypedRequestBody";
import { ResponseBuilder } from "../../../../infrastructure/driver-adapters/express/helper/ResponseBuilder";
import CustomerSaveUseCase from "../../applications/CustomerSaveUseCase";


export class CustomerPostController {
  constructor(private readonly caseUser: CustomerSaveUseCase) { }
  run(req: TypedRequest<Customer>, res: TypedResponse): void {

    this.caseUser.run(req.body).then(data => {
      res.status(201).json(new ResponseBuilder()
        .setMessage("Customer saved successfully")
        .setData(data).toJSON());
    }).catch(error => {
      res.status(500).json(new ResponseBuilder()
        .error("Something's wrong", error).toJSON());

    })

  }
}