'use client'

// import { useLocalStorage } from 'primereact/hooks'
import type { States } from '@/types'

import { Rating } from '@/components/ui'

import { useRecipesPagination } from '@/hooks'

import { RecipesModalBtn } from './RecipesModalBtn'
import { RecipesPagination } from './RecipesPagination'

export const RecipesList = ({ states }: States) => {
  // const [favoriteRecipes, setFavoriteRecipes] = useLocalStorage<
  //   { _id: string; tags: string[] }[]
  // >([], 'favorite-recipes')
  const { data, loading, setPage, total, page, pageSize } =
    useRecipesPagination(states)

  return (
    <div className='mb-20 tablet:mb-[100px]'>
      <ul className='mb-10 grid justify-center gap-6 tablet:mb-16 tablet:grid-cols-2 tablet:gap-4 desktop:grid-cols-3'>
        {loading ? (
          <div className='flex justify-center'>Loading...</div>
        ) : (
          data?.map(({ _id, description, preview, rating, title }) => (
            <li
              className='relative size-[335px] rounded-lg px-4 pb-4
                      pt-[214px] tablet:h-[264px] tablet:w-[240px]
                      tablet:pt-[143px] desktop:h-[287px] desktop:w-[250px] desktop:pt-[163px]'
              key={_id}
              style={{
                background: `linear-gradient(1deg, rgba(5, 5, 5, 0.60) 4.82%, rgba(5, 5, 5, 0.00) 108.72%), url(${preview}), lightgray -91.79px -9.338px / 138.4% 120.558%`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}>
              <button
                className='absolute right-4 top-4'
                // onClick={() => {
                //   if (!favoriteRecipes.map(f => f._id).includes(_id)) {
                //     setFavoriteRecipes(v => [...v, { _id, tags }])
                //   }
                // }}
                type='button'>
                <i className='pi pi-heart text-[22px] text-lighter opacity-50 dark:text-light'></i>
              </button>
              <div>
                <h3 className='mb-2 truncate text-fs-14-lh-128-fw-600 text-light'>
                  {title}
                </h3>
                <p className='line-clamp-2 text-fs-12-lh-133-fw-400 text-light'>
                  {description}
                </p>
              </div>
              <div className='mt-4 flex justify-between'>
                <div className='flex items-center gap-1'>
                  <p className='mb-[-3px] text-fs-14-lh-normal-fw-500 text-light'>
                    {rating.toFixed(1)}
                  </p>
                  <Rating rating={rating} />
                </div>
                <RecipesModalBtn recipeId={_id} />
              </div>
            </li>
          ))
        )}
      </ul>
      <RecipesPagination
        total={total as number}
        setPage={setPage}
        page={page}
        pageSize={pageSize}
      />
    </div>
  )
}
