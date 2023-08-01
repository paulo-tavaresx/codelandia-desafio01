import { useState } from 'react'
import { Post } from './Post'
import { postsData } from '@/utils/postsData'

interface PostsWrapperProps {
  search: string
}

export const PostsWrapper = ({ search }: PostsWrapperProps) => {
  const [PostData] = useState(postsData)

  const PostsFiltered = PostData.filter(post => {
    return (
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase())
    )
  })
  return (
    <section className="flex flex-col max-w-4xl gap-6 md:gap-12">
      {PostsFiltered.map(({ title, description, date }, index) => (
        <Post
          key={`${title}-${index}`}
          date={date}
          title={title}
          description={description}
        />
      ))}
    </section>
  )
}
