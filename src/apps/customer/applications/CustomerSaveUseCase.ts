import { Customer } from "../domain/model/Customer";
import CustomerRepository from "../infrastructure/repository/CustomerRepository";

export default class CustomerSaveUseCase{
  constructor(protected repository:CustomerRepository){
  }
  run(customer: Customer): Promise<Customer> {
    return this.repository.save(customer)
  }
}