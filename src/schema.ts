import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Todo {
    id: Int!
    description: String!
    priority: Int
  }

  input TodoInput {
    description: String!
    priority: Int
  }

  type Query {
    hello: String
    todo(id: Int!): Todo
    todos: [Todo]
  }

  type Mutation {
    addTodo(todo: TodoInput!): Todo
  }

  schema {
    query: Query
    mutation: Mutation
  }
`);

export default schema;