/* eslint-disable import/extensions */
import user from '../../service/user.js';

export default {
  getAllTrainees: async (parent, args, context) => {
    const { dataSources: { traineeAPI } } = context;
    const response = await traineeAPI.getAll({ });
    console.log('getAll response---', response.data);

    return response.data;
  },
  getTrainee: (parent, args) => {
    const { id } = args;
    return user.getUser(id);
  },
};
