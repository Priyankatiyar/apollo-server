/* eslint-disable import/extensions */
import userInstance from '../../service/user.js';

export default {
  createTrainee: (parent, args) => {
    const { user } = args;
    return userInstance.createUser(user);
  },
  updateTrainee: (parent, args) => {
    const {
      id, role, name, email,
    } = args;
    return userInstance.updateUser(id, role, name, email);
  },
  deleteTrainee: (parent, args) => {
    const { id } = args;
    return userInstance.deleteUser(id);
  },
};
