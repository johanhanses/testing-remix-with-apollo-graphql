import gql from 'graphql-tag'
import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    createdAt: String!
  }

  type Query {
    posts: [Post]!
  }
`

export const schema = makeExecutableSchema({ typeDefs, resolvers })
