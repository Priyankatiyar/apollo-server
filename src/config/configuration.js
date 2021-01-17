import * as dotenv from 'dotenv';

const envVars = dotenv.config().parsed;

const config = {
  PORT: envVars.PORT,
};

export default config;
