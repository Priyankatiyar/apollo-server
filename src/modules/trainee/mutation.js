/* eslint-disable import/extensions */
import pubsub from '../pubsub.js';
import constant from '../../libs/constant.js';

export default {
  createTrainee: async (parent, args, context) => {
    const {
      user: {
        name, email, role, password,
      },
    } = args;
    const { dataSources: { traineeAPI } } = context;
    const response = await traineeAPI.createRecord({
      name, email, password, role,
    });
    console.log('Create Response--', response.data);
    pubsub.publish(constant.subscriptions.TRAINEE_ADDED, { traineeAdded: response.data });
    return response.data;
  },
  updateTrainee: async (parent, args, context) => {
    const {
      payload: {
        role, name, email, id,
      },
    } = args;
    const { dataSources: { traineeAPI } } = context;
    const updateData = {
      id, role, name, email,
    };
    const response = await traineeAPI.updateRecord({ ...updateData });
    console.log('Update responeeee--', response);
    pubsub.publish(constant.subscriptions.TRAINEE_UPDATED, { traineeUpdated: response.data });
    return response.data;
  },
  deleteTrainee: async (parent, args, context) => {
    const { payload: { originalId } } = args;
    const { dataSources: { traineeAPI } } = context;
    const deletedId = await traineeAPI.deleteRecord(originalId);
    console.log('delete--', deletedId);
    pubsub.publish(constant.subscriptions.TRAINEE_DELETED, { traineeDeleted: deletedId });
    return deletedId.message;
  },

};
