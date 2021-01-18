/* eslint-disable import/extensions */
import userInstance from '../../service/user.js';
import pubsub from '../pubsub.js';
import constant from '../../libs/constant.js';

export default {
  createTrainee: (parent, args) => {
    const { user } = args;
    const addedUser = userInstance.createUser(user);
    pubsub.publish(constant.subscriptions.TRAINEE_ADDED, { traineeAdded: addedUser });
    return addedUser;
  },
  updateTrainee: (parent, args) => {
    const {
      id, role, name, email,
    } = args;
    const updatedUser = userInstance.updateUser(id, role, name, email);
    pubsub.publish(constant.subscriptions.TRAINEE_UPDATED, { traineeUpdated: updatedUser });
    return updatedUser;
  },
  deleteTrainee: (parent, args) => {
    const { id } = args;
    const deletedId = userInstance.deleteUser(id);
    pubsub.publish(constant.subscriptions.TRAINEE_DELETED, { traineeDeleted: deletedId });
    return deletedId;
  },
};
