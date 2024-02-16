'use client'

import type { PopularRecipe } from 'api/methods-types'

import Image from 'next/image'

export const PopularRecipesList = ({
  popularRecipes
}: {
  popularRecipes: PopularRecipe[]
}) => {
  return (
    <ul>
      {popularRecipes?.map(({ _id, description, preview, title }) => (
        <li
          className='mb-6 last-of-type:mb-0 max-tablet:even:hidden tablet:mb-4'
          key={_id}>
          <button className='flex gap-4 desktop:gap-4 tablet:gap-2'>
            <Image
              alt={title}
              className='rounded-lg desktop:size-16 tablet:size-12'
              height={64}
              src={preview}
              width={64}
            />
            <div className='text-left'>
              <h2 className='mb-2 text-fs-14-lh-128-fw-600 uppercase tablet:line-clamp-1'>
                {title}
              </h2>
              <p
                className='line-clamp-2 text-fs-12-lh-133-fw-400 tablet:line-clamp-3
                  tablet:text-fs-10-lh-14-fw-400'>
                {description}
              </p>
            </div>
          </button>
        </li>
      ))}
    </ul>
  )
}
