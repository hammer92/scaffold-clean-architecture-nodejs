import { UpdateItemCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";interface ParamsDynamoDBConfig{
  accessKey?:string,
  secretKey?:string,
  endpoint?:string
}

export default class DynamoDBConfig {

    amazonDynamoDB(params?:ParamsDynamoDBConfig): DynamoDBClient {
        return new DynamoDBClient({ region: 'us-east-1',
       ...params
      });
  }

}
