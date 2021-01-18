/* eslint-disable no-console */
import Express from 'express';
import { ApolloServer } from 'apollo-server-express';

class Server {
  constructor(config) {
    this.config = config;
    this.app = Express();
  }

  bootstrap() {
    this.setupRouts();
    return this;
  }

  setupRouts() {
    const { app } = this;
    app.get('/', (req, res) => {
      res.send('App is running!!');
    });
    return this;
  }

  async setupApollo(schema) {
    try {
      const { app } = this;
      this.Server = new ApolloServer({
        ...schema,
        healthCheck: () => new Promise((resolve) => {
          resolve('I am Fine.');
        }),
      });
      this.Server.applyMiddleware({ app });
      this.run();
    } catch (err) {
      console.log(err);
    }
  }

  run() {
    const { app, config: { PORT } } = this;
    app.listen(PORT, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
      // eslint-disable-next-line no-console
      console.log(`App is running on port ${PORT}`);
    });
  }
}
export default Server;
