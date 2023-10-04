import { Customer } from "../model/Customer";

export interface ICustomerRepository {

  save(customer:Customer):Promise<Customer>;

}