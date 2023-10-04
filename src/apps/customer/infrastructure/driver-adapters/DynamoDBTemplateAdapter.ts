import TemplateAdapterOperations from "../../../../infrastructure/driver-adapters/dynamodb/helper/TemplateAdapterOperations";
import { Customer } from "../../domain/model/Customer";
import { CustomerDynamoDB } from "../../domain/model/CustomerDynamoDB";

export default class CustomerAdapterDynamoDB extends
  TemplateAdapterOperations<Customer, CustomerDynamoDB> {
}
