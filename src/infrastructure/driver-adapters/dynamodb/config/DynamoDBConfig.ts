import { UpdateItemCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";interface ParamsDynamoDBConfig{
  accessKey?:string,
  secretKey?:string,
  endpoint?:string
}

export default class DynamoDBConfig {

    amazonDynamoDB(params?:ParamsDynamoDBConfig): DynamoDBClient {
        console.log("🚀 ~ file: DynamoDBConfig.ts:11 ~ DynamoDBConfig ~ amazonDynamoDB ~ params:", params)
        return new DynamoDBClient({ region: 'us-east-1',
       ...params
      });
  }

}
