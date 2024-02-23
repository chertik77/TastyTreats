import { HeroOrderNowModalBtn } from './HeroOrderNowModalBtn'

export const HeroInfo = () => (
  <div>
    <h1
      className='mb-[14px] text-fs-26-lh-120-fw-600 uppercase tablet:mb-4 tablet:w-[446px]
        tablet:text-fs-36-lh-120-fw-600'>
      Learn to Cook <i className='font-normal text-brand'>Tasty Treats&apos;</i>{' '}
      Customizable Masterclass
    </h1>
    <p
      className='mb-[28px] text-fs-14-lh-128-fw-400 tablet:mb-8 tablet:w-[408px]
        tablet:text-fs-16-lh-150-fw-400'>
      TastyTreats - Customize Your Meal with Ingredient Options and Step-by-Step
      Video Guides.
    </p>
    <HeroOrderNowModalBtn />
  </div>
)
