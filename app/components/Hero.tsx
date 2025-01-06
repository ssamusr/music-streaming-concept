import { TopCharts } from './TopCharts'

export const Hero = () => {
  return (
    <section className='grid h-[60vh] w-full grid-cols-5 gap-6'>
      <div className='col-span-3 h-full bg-hero-pattern bg-cover bg-no-repeat'></div>
      <div className='col-span-2 h-full'>
        <h2 className='mb-4 text-2xl font-bold text-white'>Top Charts</h2>
        <div className='grid w-full grid-rows-3 gap-3'>
          <TopCharts />
          <TopCharts />
          <TopCharts />
        </div>
      </div>
    </section>
  )
}
