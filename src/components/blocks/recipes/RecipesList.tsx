'use client'

import type { RecipesStatesProps } from '@/types/recipes.types'

import { Paginator } from 'primereact/paginator'
import { classNames } from 'primereact/utils'

import { Rating } from '@/components/ui/Rating'

import { useRecipesPagination } from '@/hooks/useRecipesPagination'

export const RecipesList = ({ states }: RecipesStatesProps) => {
  const { data, setPage, total, page, pageSize } = useRecipesPagination(states)

  console.log(pageSize)
  return (
    <>
      <ul className='flex flex-col gap-6 tablet:flex-row tablet:flex-wrap tablet:gap-4'>
        {data?.map(({ _id, description, preview, rating, title }) => (
          <li
            className='relative size-[335px] rounded-lg px-4 pb-4 pt-[214px] desktop:h-[287px]
                      desktop:w-[250px] desktop:pt-[163px] tablet:h-[264px] tablet:w-[240px]
                      tablet:pt-[143px]'
            key={_id}
            style={{
              background: `linear-gradient(1deg, rgba(5, 5, 5, 0.60) 4.82%, rgba(5, 5, 5, 0.00) 108.72%), url(${preview}), lightgray -91.79px -9.338px / 138.4% 120.558% no-repeat`
            }}>
            <button
              className='absolute right-4 top-4'
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
              <button
                className='btn-recipe'
                type='button'>
                See recipe
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Paginator
        first={total === 0 ? 0 : (page - 1) * pageSize}
        rows={pageSize}
        alwaysShow={false}
        totalRecords={total}
        pageLinkSize={3}
        onPageChange={e => setPage(e.page + 1)}
        pt={{
          root: { className: 'dark:bg-transparent' },
          firstPageButton: {
            className: 'bg-dark h-11 min-w-11 text-white/50 mr-2'
          },
          prevPageButton: {
            className: 'bg-dark h-11 min-w-11 text-white/50 mr-6'
          },
          pageButton: props => ({
            className: classNames(
              'h-11 min-w-11 border border-dark/50 text-dark dark:text-light dark:border-white/30',
              {
                'bg-brand border-brand dark:border-brand':
                  props?.context?.active
              }
            )
          }),
          pages: { className: 'space-x-[10px]' },
          lastPageButton: {
            className: 'bg-brand h-11 min-w-11 text-dark ml-2'
          },
          nextPageButton: { className: 'bg-brand h-11 min-w-11 text-dark ml-6' }
        }}
      />
    </>
  )
}
