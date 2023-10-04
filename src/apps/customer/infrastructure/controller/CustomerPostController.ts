import { Customer } from "../../domain/model/Customer";
import { TypedRequest, TypedResponse } from "../../../../infrastructure/driver-adapters/express/model/TypedRequestBody";
import { ResponseBuilder } from "../../../../infrastructure/driver-adapters/express/helper/ResponseBuilder";
import CustomerSaveUseCase from "../../applications/CustomerSaveUseCase";


export class CustomerPostController {
  constructor(private service: CustomerSaveUseCase) { }
  run(req: TypedRequest<Customer>, res: TypedResponse): void {

    this.service.run(req.body).then(data => {
      res.status(200).send(new ResponseBuilder()
        .setMessage("Customer saved successfully")
        .setData(data));
    }).catch(error => {
      res.status(500).send(new ResponseBuilder().error("Something's wrong", error));

    })

  }
}