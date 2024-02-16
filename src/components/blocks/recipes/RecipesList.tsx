import type { Recipe } from 'api/methods-types'
import { Rating } from 'components/ui/Rating'

type RecipesListProps = {
  filterQuery: string
  recipes: Recipe
}

export const RecipesList = ({ filterQuery, recipes }: RecipesListProps) => {
  console.log(filterQuery)
  return (
    <>
      <ul className='flex flex-col gap-6 tablet:flex-row tablet:flex-wrap tablet:gap-4'>
        {filterQuery
          ? recipes.results
              .filter(({ title }) => title === filterQuery.toLowerCase())
              .map(({ _id, description, preview, rating, title }) => (
                <li
                  className='relative size-[335px] rounded-lg px-4 pb-4 pt-[214px] desktop:h-[287px]
                    desktop:w-[250px] desktop:pt-[163px] tablet:h-[264px] tablet:w-[240px]
                    tablet:pt-[143px]'
                  key={_id}
                  style={{
                    background: `linear-gradient(1deg, rgba(5, 5, 5, 0.60) 4.82%, rgba(5, 5, 5, 0.00) 108.72%), url(${preview}), lightgray -91.79px -9.338px / 138.4% 120.558% no-repeat`
                  }}>
                  <button className='absolute right-4 top-4' type='button'>
                    <i className='pi pi-heart text-[22px] text-lighter opacity-50 dark:text-light'></i>
                  </button>
                  <div>
                    <h3 className='mb-2 text-fs-14-lh-128-fw-600 text-light'>
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
                    <button className='btn-recipe' type='button'>
                      See recipe
                    </button>
                  </div>
                </li>
              ))
          : recipes.results.map(
              ({ _id, description, preview, rating, title }) => (
                <li
                  className='relative size-[335px] rounded-lg px-4 pb-4 pt-[214px] desktop:h-[287px]
                    desktop:w-[250px] desktop:pt-[163px] tablet:h-[264px] tablet:w-[240px]
                    tablet:pt-[143px]'
                  key={_id}
                  style={{
                    background: `linear-gradient(1deg, rgba(5, 5, 5, 0.60) 4.82%, rgba(5, 5, 5, 0.00) 108.72%), url(${preview}), lightgray -91.79px -9.338px / 138.4% 120.558% no-repeat`
                  }}>
                  <button className='absolute right-4 top-4' type='button'>
                    <i className='pi pi-heart text-[22px] text-lighter opacity-50 dark:text-light'></i>
                  </button>
                  <div>
                    <h3 className='mb-2 text-fs-14-lh-128-fw-600 text-light'>
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
                    <button className='btn-recipe' type='button'>
                      See recipe
                    </button>
                  </div>
                </li>
              )
            )}
      </ul>
    </>
  )
}
