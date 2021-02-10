/* eslint-disable import/extensions */
import user from '../../service/user.js';

export default {
  getAllTrainees: async (parent, args, context) => {
    const { payload: { skip, limit, sort } } = args;
    const { dataSources: { traineeAPI } } = context;
    const response = await traineeAPI.getAll({ skip, limit, sort });
    return response;
  },
  getTrainee: (parent, args) => {
    const { id } = args;
    return user.getUser(id);
  },
};
