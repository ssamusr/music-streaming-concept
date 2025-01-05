import { SearchIcon } from '~/assets/icons/SearchIcon'

export const SearchInput = () => {
  return (
    <form className='relative flex h-20 w-full items-center focus-within:text-light'>
      <span className='absolute left-6 text-light/25 transition-all'>
        <SearchIcon className='h-6 w-6' />
      </span>
      <input
        type='text'
        placeholder='Buscar artistas...'
        className='w-full bg-transparent py-2 pl-16 pr-6 text-light placeholder-light/25 outline-none focus:border-b focus:border-light/50'
      />
    </form>
  )
}
