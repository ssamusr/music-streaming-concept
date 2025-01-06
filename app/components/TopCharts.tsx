import { HeartIcon } from '~/assets/icons/HeartIcon'

export const TopCharts = () => {
  return (
    <article className='flex items-center justify-between rounded-3xl bg-dark-alt p-4'>
      <div className='flex flex-row gap-4'>
        <div className='aspect-square h-16 w-16 overflow-hidden rounded-lg'>
          <img
            src='/app/assets/images/music-1.jpeg'
            alt='Music1'
            className='h-full w-full rounded-lg object-cover'
          />
        </div>
        <div className='flex flex-col justify-center'>
          <h3 className='text-base text-white'>Golden age of 80s</h3>
          <p className='text-sm text-light/25'>Sean swadder</p>
          <p className='text-sm text-white'>2:34:45</p>
        </div>
      </div>
      <div className='group flex cursor-pointer rounded-full border border-light/25 p-3'>
        <HeartIcon className='group-hover:scale-110' />
      </div>
    </article>
  )
}
