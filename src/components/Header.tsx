import Link from 'next/link'

type Props = {}

export const Header = (props: Props) => {
  return (
    <header className="px-5 py-12 bg-gradient-linear">
      <div className="flex mx-auto justify-between max-w-4xl text-lg mb-10">
        <Link className="" href={'#home'}>
          <h1>Codelândia</h1>
        </Link>
        <h1>blog</h1>
      </div>
      <form className="max-w-4xl  mx-auto  text-sm">
        <label className="w-full">
          <input
            className="w-full bg-transparent"
            placeholder=""
            type="search"
          />
        </label>
      </form>
    </header>
  )
}
