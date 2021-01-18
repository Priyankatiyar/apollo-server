/* eslint-disable no-console */
import Express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';

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
      this.httpServer = createServer(app);
      this.Server.installSubscriptionHandlers(this.httpServer);
      this.run();
    } catch (err) {
      console.log(err);
    }
  }

  run() {
    const { config: { PORT } } = this;
    this.httpServer.listen(PORT, (err) => {
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
