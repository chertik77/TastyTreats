import { HeroInfo } from './HeroInfo'

// import { HeroSwiper } from './HeroSwiper'

export const Hero = async () => {
  return (
    <section className='mb-[80px] mt-[91px] tablet:mt-[93px]'>
      <div
        className='flex flex-col gap-12 tablet:gap-16 desktop:mt-[100px] desktop:flex-row
          desktop:items-center desktop:gap-8'>
        <HeroInfo />
        {/* <HeroSwiper /> */}
      </div>
    </section>
  )
}
