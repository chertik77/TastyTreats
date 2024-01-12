'use client'

import { PopularRecipe } from 'api/methods-types'
import Image from 'next/image'
import { useQueryState } from 'nuqs'

export const PopularRecipesList = ({ popularRecipes }: { popularRecipes: PopularRecipe[] }) => {
  const [_, setId] = useQueryState('id')

  return (
    <ul>
      {popularRecipes?.map(({ _id, title, description, preview }) => (
        <li key={_id} className='mb-6 last-of-type:mb-0 tablet:mb-4 max-tablet:even:hidden'>
          <button className='flex gap-4 tablet:gap-2 desktop:gap-4' onClick={() => setId(_id)}>
            <Image
              src={preview}
              alt={title}
              width={64}
              height={64}
              className='rounded-lg tablet:h-12 tablet:w-12 desktop:h-16 desktop:w-16'
            />
            <div className='text-left'>
              <h2 className='mb-2 text-fs-14-lh-128-fw-600 uppercase tablet:line-clamp-1'>{title}</h2>
              <p className='line-clamp-2 text-fs-12-lh-133-fw-400 tablet:line-clamp-3 tablet:text-fs-10-lh-14-fw-400'>
                {description}
              </p>
            </div>
          </button>
        </li>
      ))}
    </ul>
  )
}
