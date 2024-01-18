'use client'

import { Recipe } from 'api/methods-types'
import { Rating } from 'components/ui/Rating'

export const RecipesList = ({ recipes }: { recipes: Recipe }) => {
  return (
    <ul className='tablet: flex flex-col gap-6 tablet:flex-row tablet:flex-wrap tablet:gap-4'>
      {recipes.results.map(({ _id, title, description, preview, rating }) => (
        <li
          key={_id}
          className='relative h-[335px] w-[335px] rounded-lg px-4 pb-4 pt-[214px] tablet:h-[264px] tablet:w-[240px] tablet:pt-[143px] desktop:h-[287px] desktop:w-[250px] desktop:pt-[163px]'
          style={{
            background: `linear-gradient(1deg, rgba(5, 5, 5, 0.60) 4.82%, rgba(5, 5, 5, 0.00) 108.72%), url(${preview}), lightgray -91.79px -9.338px / 138.4% 120.558% no-repeat`
          }}>
          <button type='button' className='absolute right-4 top-4'>
            <i className='pi pi-heart text-[22px] text-lighter opacity-50 dark:text-light'></i>
          </button>
          <div>
            <h3 className='mb-2 text-fs-14-lh-128-fw-600 text-light'>{title}</h3>
            <p className='line-clamp-2 text-fs-12-lh-133-fw-400 text-light'>{description}</p>
          </div>
          <div className='mt-4 flex justify-between'>
            <div className='flex items-center gap-1'>
              <p className='-mb-[3px] text-fs-14-lh-normal-fw-500 text-light'>{rating.toFixed(1)}</p>
              <Rating rating={rating} />
            </div>
            <button type='button' className='btn-recipe'>
              See recipe
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
