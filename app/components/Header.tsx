import { Link } from 'react-router'
import { SearchInput } from './SearchInput'

export const Header = () => {
  return (
    <header className='mb-5 flex h-20 w-full items-center gap-5 pl-5 pr-16'>
      {/* LOGO */}
      <div className='flex w-14 justify-center'>
        <Link to='/'>
          <img
            src='app/assets/images/logo.png'
            alt='Logo'
            className='h-8 w-8'
          />
        </Link>
      </div>
      {/* SEARCH INPUT */}
      <div className='w-full'>
        <SearchInput />
      </div>
    </header>
  )
}
