import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb"
import DynamoDBConfig from "../config/DynamoDBConfig"
import { ModelDynamoDB } from "./ModelDynamoDB"
import { log } from "../../../../helper/ProxyLogger"

export default abstract class TemplateAdapterOperations<I, E extends ModelDynamoDB<I>> {
  protected dynamodb: DynamoDBClient
  constructor() {
    this.dynamodb = new DynamoDBConfig().amazonDynamoDB()
  }
  protected toEntity(model: E) {
    const data = new Map(Object.entries(model.item!));
    return model.attributeDefinitions.reduce((accumulator, currentValue) => {
      accumulator = {
        [currentValue.AttributeName]: { [currentValue.AttributeType]: data.get(currentValue.AttributeName) },
        ...accumulator
      }
      return accumulator
    }, {})
  }

  async save(model: E): Promise<void> {
    const command = new PutItemCommand({
      TableName: model.tableName,
      Item: this.toEntity(model),
    });
    try {
      await this.dynamodb.send(command);
    } catch (error) {
      log.error(error)
      throw error
    }
  }
}