import TemplateAdapterOperations from "../../../../infrastructure/driver-adapters/dynamodb/helper/TemplateAdapterOperations";
import { ICustomer, CustomerDynamoDB } from "../../domain/model/CustomerDynamoDB";

export default class DynamoDBTemplateAdapter extends 
TemplateAdapterOperations<ICustomer, CustomerDynamoDB> {
}
