import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';

import schema from './schema';
import { Todo } from './models';

export const createApp = () => {
  const app = express();

  app.use(express.json()); // for parsing application/json
  app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

  app.get('/', (req, res) => {
    res.json({ hello: 'express' });
  });

  const root = {
    hello: () => {
      return 'Hello world!';
    },
    todo: ({ id }: { id: number }) => {
      return Todo.getOneOr404(id);
    },
    todos: () => {
      return Todo.getAll();
    },
    addTodo: ({ todo }: { todo: Todo }) => {
      const newTodo = Todo.create(todo);
      return newTodo;
    },
  };

  // get으로 하면 안된다!?
  app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  }));

  return app;
};

export default createApp();