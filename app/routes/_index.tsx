import type { ApolloQueryResult } from '@apollo/client'
import { useLoaderData } from '@remix-run/react'
import gql from 'graphql-tag'
import { graphqlClient } from '~/graphql/client'
import type { PostResponse } from '~/graphql/resolvers'

export const loader = async () => {
  const res = await graphqlClient.query({
    query: gql`
      query getPosts {
        posts {
          id
          title
          createdAt
        }
      }
    `,
  })

  return res as ApolloQueryResult<PostResponse>
}

export default function Posts() {
  const { data, _loading } = useLoaderData<typeof loader>()
  const { posts } = data
  console.log(posts)

  return (
    <div className="container">
      {posts.map((post: Post) => (
        <article key={post.id}>
          <p className="date">{post.createdAt}</p>
          <p>{post.title}</p>
        </article>
      ))}
    </div>
  )
}
