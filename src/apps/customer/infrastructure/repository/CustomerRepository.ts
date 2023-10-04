import { v4 as uuidv4 } from 'uuid';
import { ICustomerRepository } from "../../domain/gateways/CustomerRepository";
import { Customer } from "../../domain/model/Customer";
import { CustomerDynamoDB } from "../../domain/model/CustomerDynamoDB";
import CustomerAdapterDynamoDB from "../driver-adapters/DynamoDBTemplateAdapter";

export default class CustomerRepository implements ICustomerRepository {
  private db: CustomerAdapterDynamoDB;
  constructor() {
    this.db = new CustomerAdapterDynamoDB()
  }
  async save(customer: Customer): Promise<Customer> {
    customer.customerId = uuidv4()
    const model = new CustomerDynamoDB(customer)
    return await this.db.save(model).then(() => customer);
  }
}
