/* eslint-disable import/extensions */
import user from '../../service/user.js';

export default {
  getAllTrainees: () => user.getAllUsers(),
  getTrainee: (parent, args) => {
    const { id } = args;
    return user.getUser(id);
  },
};
