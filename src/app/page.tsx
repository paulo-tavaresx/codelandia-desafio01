'use client'
import { PostsWrapper } from '../components/PostsWrapper'
import { Header } from '../components/Header'
import { useState } from 'react'

export default function Home() {
  const [searchText, setSearchText] = useState('')
  return (
    <>
      <Header search={searchText} setSearch={setSearchText} />
      <main className="flex px-5 py-12 md:py-24 flex-col items-center justify-between bg-slate-100">
        <PostsWrapper search={searchText} />
      </main>
    </>
  )
}
