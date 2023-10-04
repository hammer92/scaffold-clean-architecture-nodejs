# A basic express API following Clean Hexagonal Architecture

## Getting started (< 2mn)

```
git clone git@github.com:hammer92/scaffold-clean-architecture-nodejs.git
cd scaffold-clean-architecture-nodejs
npm install
npm run dev
```

In a browser, open [http://localhost:3000/api/1.0/customer](http://localhost:3000/api/1.0/customer).


### Project anatomy

```
 ┣ deployment
 ┃  ┗ create-table-dynamodb.ini
 ┣ src
 ┃  ┣ apps
 ┃  ┃  ┗ customer
 ┃  ┃     ┣ applications
 ┃  ┃     ┃  ┗ CustomerSaveUseCase.ts
 ┃  ┃     ┣ domain
 ┃  ┃     ┃  ┣ gateways
 ┃  ┃     ┃  ┃  ┗ CustomerRepository.ts
 ┃  ┃     ┃  ┗ model
 ┃  ┃     ┃     ┣ Customer.ts
 ┃  ┃     ┃     ┗ CustomerDynamoDB.ts
 ┃  ┃     ┗ infrastructure
 ┃  ┃        ┣ controller
 ┃  ┃        ┃  ┗ CustomerPostController.ts
 ┃  ┃        ┣ driver-adapters
 ┃  ┃        ┃  ┣ ApiRest.ts
 ┃  ┃        ┃  ┗ DynamoDBTemplateAdapter.ts
 ┃  ┃        ┗ repository
 ┃  ┃           ┗ CustomerRepository.ts
 ┃  ┣ helper
 ┃  ┃  ┗ ProxyLogger.ts
 ┃  ┣ infrastructure
 ┃  ┃  ┗ driver-adapters
 ┃  ┃     ┣ dynamodb
 ┃  ┃     ┃  ┣ config
 ┃  ┃     ┃  ┃  ┗ DynamoDBConfig.ts
 ┃  ┃     ┃  ┗ helper
 ┃  ┃     ┃     ┣ ModelDynamoDB.ts
 ┃  ┃     ┃     ┗ TemplateAdapterOperations.ts
 ┃  ┃     ┗ express
 ┃  ┃        ┣ config
 ┃  ┃        ┃  ┗ FrameworkApiConfig.ts
 ┃  ┃        ┣ helper
 ┃  ┃        ┃  ┣ ErrorMiddleware.ts
 ┃  ┃        ┃  ┣ ResponseBuilder.ts
 ┃  ┃        ┃  ┣ TemplateAdapterExpress.ts
 ┃  ┃        ┃  ┗ ValidateRequest.ts
 ┃  ┃        ┣ model
 ┃  ┃        ┃  ┣ ApiRestModel.ts
 ┃  ┃        ┃  ┗ TypedRequestBody.ts
 ┃  ┃        ┗ APIService.ts
 ┃  ┗ server.ts
 ┣ .env
 ┣ .eslintignore
 ┣ .eslintrc
 ┣ .gitignore
 ┣ package.json
 ┣ README.md
 ┗ tsconfig.json                         → Main application entry point
```
