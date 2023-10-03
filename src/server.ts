 import DynamoDBTemplateAdapter from "./infrastructure/driver-adapters/dynamodb/DynamoDBTemplateAdapter"
 import {Customer} from "./infrastructure/driver-adapters/dynamodb/model/Customer"
async function hello() {
  const item = new Customer({
    customerId:new Date().toISOString(),
    email:"hammer92@hotmail.es",
    name: "jamer Pinto"
  })
  const db = new DynamoDBTemplateAdapter();
  const resulto =  await db.save(item);
  console.log("🚀 ~ file: server.ts:11 ~ hello ~ resulto:", resulto)
}

hello()