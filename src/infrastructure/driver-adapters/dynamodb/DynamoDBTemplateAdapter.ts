import TemplateAdapterOperations from "./helper/TemplateAdapterOperations";
import { ICustomer, Customer } from "./model/Customer";

export default class DynamoDBTemplateAdapter extends 
TemplateAdapterOperations<ICustomer, Customer> {
}
