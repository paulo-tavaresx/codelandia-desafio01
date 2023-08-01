import Image from 'next/image'
import Link from 'next/link'
import Search from '../../public/search.svg'
import { Dispatch, SetStateAction, useState } from 'react'

type Props = {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}

export const Header = ({ search, setSearch }: Props) => {
  return (
    <header className="px-5 py-12 md:py-10 md:bg-gradient-linear-md bg-gradient-linear-mobile">
      <div className="flex mx-auto md:text-2xl justify-between max-w-4xl text-lg mb-10 md:mb-[4.5rem]">
        <Link className="" href={'#home'}>
          <h1>Codelândia</h1>
        </Link>
        <h1>blog</h1>
      </div>
      <form className="max-w-4xl mx-auto text-sm">
        <label className="w-full flex gap-3 md:gap-4 px-2 md:p-4 py-3 rounded bg-[#ffffff33] items-center">
          <div className="w-5  md:w-8">
            <Image src={Search} alt="search" />
          </div>

          <input
            className="w-full bg-transparent text-[#ffffff80] md:text-lg outline-none"
            placeholder="Pesquisar no blog"
            type="search"
            value={search}
            onChange={ev => setSearch(ev.currentTarget.value)}
          />
        </label>
      </form>
    </header>
  )
}
