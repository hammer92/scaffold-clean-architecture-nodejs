import { ModelDynamoDB } from "../../../../infrastructure/driver-adapters/dynamodb/helper/ModelDynamoDB";

export interface ICustomer{
   customerId?:string,
   name:string,
   email:string,
}
export class CustomerDynamoDB implements ModelDynamoDB<ICustomer> {
  tableName?: string ="customer";
  item: ICustomer ;
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
  constructor(item:ICustomer){
    this.item = item
  }
  
}