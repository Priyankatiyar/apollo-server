/* eslint-disable import/extensions */
import { RESTDataSource } from 'apollo-datasource-rest';
import config from '../config/index.js';

export class TraineeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${config.serviceURL}/api`;
  }

  willSendRequest(request) {
    request.headers.set('authorization', this.context.token);
  }

  getAll({ skip, limit, sort }) {
    return this.get('/trainee', { skip, limit, sort });
  }

  createRecord(payload) {
    return this.post('/trainee', payload);
  }

  updateRecord(payload) {
    return this.put('/trainee', payload);
  }

  deleteRecord(id) {
    return this.delete(`/trainee/${id}`);
  }
}
