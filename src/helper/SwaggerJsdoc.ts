import swaggerJsdoc from 'swagger-jsdoc';
import fs from "fs"
import yaml from "js-yaml"
import { log } from './ProxyLogger';

const options = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['./src/apps/**/infrastructure/driver-adapters/ApiRest.ts'],
};

const swaggerSpec = swaggerJsdoc(options);
log.debug(options, swaggerSpec)

// Convertir JSON a YAML
const yamlData = yaml.dump(swaggerSpec);
// Escribir el YAML en un archivo
fs.writeFileSync('swagger.yaml', yamlData);

log.info('Archivo YAML de documentación generado: swagger.yaml');