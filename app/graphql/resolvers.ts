import type { IResolvers } from '@graphql-tools/utils'

export type Post = {
  id: string
  title: string
  createdAt: string
}

export type PostResponse = {
  posts: Post[]
}

export const resolvers: IResolvers = {
  Query: {
    posts: async (): Promise<Post[]> => {
      return [
        {
          id: '1',
          title: 'Mutation-like immutability in JavaScript using immer.js',
          createdAt: '20 Nov',
        },
        {
          id: '2',
          title: 'How to set up Firebase Authentication in React',
          createdAt: '21 Nov',
        },
      ]
    },
  },
}
