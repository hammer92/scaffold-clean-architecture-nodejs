import { ModelDynamoDB } from "../../../../infrastructure/driver-adapters/dynamodb/helper/ModelDynamoDB";
import { Customer } from "./Customer";

export class CustomerDynamoDB implements ModelDynamoDB<Customer> {
  tableName?: string ="customer";
  item: Customer ;
  attributeDefinitions: { AttributeName: string, AttributeType: string }[] = [
    {
      AttributeName: "customerId",
      AttributeType: "S",
    },
    {
      AttributeName: "name",
      AttributeType: "S",
    },
    {
      AttributeName: "email",
      AttributeType: "S",
    },
  ]
  constructor(item:Customer){
    this.item = item
  }
  
}