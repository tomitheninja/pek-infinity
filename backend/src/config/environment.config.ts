import * as dotenv from 'dotenv';
import * as env from 'env-var';

dotenv.config();

export const FRONTEND_CALLBACK = env
  .get('FRONTEND_CALLBACK')
  .required()
  .asString();
export const JWT_SECRET = env.get('JWT_SECRET').required().asString();
export const AUTHSCH_CLIENT_ID = env
  .get('AUTHSCH_CLIENT_ID')
  .required()
  .asString();
export const AUTHSCH_CLIENT_SECRET = env
  .get('AUTHSCH_CLIENT_SECRET')
  .required()
  .asString();
