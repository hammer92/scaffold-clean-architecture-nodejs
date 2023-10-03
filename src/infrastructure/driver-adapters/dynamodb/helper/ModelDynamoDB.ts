export interface ModelDynamoDB<E> {
  tableName?:string,
  attributeDefinitions: { AttributeName: string; AttributeType: string; }[]
  item: E
}