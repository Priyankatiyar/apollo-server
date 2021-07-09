/* eslint-disable */
export default {
  getMyProfile: async (parent, args, context) => {
    console.log('ppppppppppppppppppppppppp', context);
    const { dataSources: { userAPI } } = context;
    const response = await userAPI.getMe();
    console.log("-------", response);
    return response.data;
  },
};
