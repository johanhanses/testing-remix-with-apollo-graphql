import { useLoaderData } from '@remix-run/react'
import gql from 'graphql-tag'
import { graphqlClient } from '~/graphql/client'
import type { PostResponse } from '~/graphql/resolvers'

export const loader = async () => {
  const res = await graphqlClient.query<PostResponse>({
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

  return res.data
}

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>()

  return (
    <div className="container">
      {posts.map((post) => (
        <article key={post.id}>
          <p className="date">{post.createdAt}</p>
          <p>{post.title}</p>
        </article>
      ))}
    </div>
  )
}
