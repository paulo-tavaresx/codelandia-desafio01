import Image from 'next/image'
import Like from '../../public/like.svg'

interface PostProps {
  date: string
  title: string
  description: string
}

export const Post = ({ date, title, description }: PostProps) => {
  return (
    <article className="bg-white rounded-md p-6 text-neutral-500 shadow-lg">
      <div className=" flex justify-between items-center mb-7 md:mb-5">
        <time className="text-sm md:text-base">{date}</time>

        <Image src={Like} alt="like" />
      </div>

      <h2 className="text-[#1A202C] mb-2 md:text-2xl text-lg leading-normal">
        {title}
      </h2>
      <p className="text-sm leading-7 md:text-lg md:leading-8">{description}</p>
    </article>
  )
}
