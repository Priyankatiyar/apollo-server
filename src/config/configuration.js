import * as dotenv from 'dotenv';

const envVars = dotenv.config().parsed;

const config = {
  PORT: envVars.PORT,
  serviceURL: envVars.SERVICE_URL,
};

export default config;
