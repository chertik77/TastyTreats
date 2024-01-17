'use client'

import { Recipe } from 'api/methods-types'
import { Rating } from 'components/ui/Rating'

export const RecipesList = ({ recipes }: { recipes: Recipe }) => {
  return (
    <ul className='flex flex-col gap-6'>
      {recipes.results.map(({ _id, title, description, preview, rating }) => (
        <li
          key={_id}
          className='relative h-[335px] w-[335px] rounded-lg tablet:h-[264px] tablet:w-[240px]'
          style={{
            background: `linear-gradient(1deg, rgba(5, 5, 5, 0.60) 4.82%, rgba(5, 5, 5, 0.00) 108.72%), url(${preview}), lightgray -91.79px -9.338px / 138.4% 120.558% no-repeat`
          }}>
          <button type='button'>
            <i className='pi pi-heart absolute right-4 top-4 text-[22px] text-lighter opacity-50 dark:text-light'></i>
          </button>
          <div className='absolute left-4 right-4 top-[214px] tablet:top-[143px]'>
            <h3 className='mb-2 text-fs-14-lh-128-fw-600 text-light'>{title}</h3>
            <p className='line-clamp-2 text-fs-12-lh-133-fw-400 text-light'>{description}</p>
          </div>
          <div className='absolute bottom-[22px] left-4 flex items-center gap-2 tablet:gap-0.5'>
            <p className='-mb-[2px] text-fs-14-lh-normal-fw-500 text-light'>{rating.toFixed(1)}</p>
            <Rating rating={rating} />
          </div>
          <button type='button' className='btn-recipe absolute bottom-4 right-4'>
            See recipe
          </button>
        </li>
      ))}
    </ul>
  )
}
