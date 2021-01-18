/* eslint-disable import/extensions */
import constant from '../../libs/constant.js';
import pubsub from '../pubsub.js';

export default {
  traineeAdded: {
    subscribe: () => pubsub.asyncIterator([constant.subscriptions.TRAINEE_ADDED]),
  },
  traineeUpdated: {
    subscribe: () => pubsub.asyncIterator([constant.subscriptions.TRAINEE_UPDATED]),
  },
  traineeDeleted: {
    subscribe: () => pubsub.asyncIterator([constant.subscriptions.TRAINEE_DELETED]),
  },
};
