/* eslint-disable import/extensions */
import { RESTDataSource } from 'apollo-datasource-rest';
import config from '../config/index.js';

export class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${config.serviceURL}/api/user`;
  }

  willSendRequest(request) {
    request.headers.set('authorization', this.context.token);
  }

  getMe() {
    return this.get('/me');
  }

  loginUser(payload) {
    console.log('pylod is : ', payload);
    return this.post('/login', payload);
  }
}
