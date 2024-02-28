import { RECIPE_SERVICE } from '@/services'

import { Modal, Rating } from '../ui'

type ModalProps = {
  isModalOpen: boolean
  toggleModal: () => void
  recipeId: string
}

export const RecipeModal = async ({
  isModalOpen,
  toggleModal,
  recipeId
}: ModalProps) => {
  const {
    youtube,
    thumb,
    title,
    rating,
    time,
    ingredients,
    description,
    tags,
    instructions
  } = await RECIPE_SERVICE.getRecipeById(recipeId)

  return (
    <Modal
      onHide={toggleModal}
      visible={isModalOpen}
      content={
        <>
          <button
            className='absolute right-[14px] top-[14px] leading-[0] tablet:right-4 tablet:top-4'
            onClick={toggleModal}>
            <i className='pi pi-times text-[18px] tablet:text-[1.5rem]'></i>
          </button>
          <a
            href={youtube}
            className='relative mb-5 mt-2'
            target='_blank'>
            <div
              className='size-[295px] rounded-lg'
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(5, 5, 5, 0.40) 0%, rgba(5, 5, 5, 0.40) 100%), url(${thumb})`
              }}></div>
            <svg
              className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
              xmlns='http://www.w3.org/2000/svg'
              width='38'
              height='38'
              viewBox='0 0 38 38'
              fill='none'>
              <path
                d='M35.6883 10.165C35.5002 9.41361 35.1172 8.72511 34.5778 8.1691C34.0385 7.61309 33.362 7.20925 32.6166 6.99837C29.8933 6.33337 19 6.33337 19 6.33337C19 6.33337 8.10663 6.33337 5.3833 7.06171C4.63794 7.27258 3.96143 7.67642 3.4221 8.23243C2.88277 8.78845 2.49972 9.47694 2.31164 10.2284C1.81323 12.9922 1.56943 15.7959 1.5833 18.6042C1.56554 21.4337 1.80935 24.2588 2.31164 27.0434C2.51899 27.7715 2.91062 28.4338 3.4487 28.9663C3.98677 29.4988 4.6531 29.8836 5.3833 30.0834C8.10663 30.8117 19 30.8117 19 30.8117C19 30.8117 29.8933 30.8117 32.6166 30.0834C33.362 29.8725 34.0385 29.4687 34.5778 28.9127C35.1172 28.3566 35.5002 27.6681 35.6883 26.9167C36.1829 24.1737 36.4266 21.3914 36.4166 18.6042C36.4344 15.7747 36.1906 12.9496 35.6883 10.165Z'
                stroke='#F8F8F8'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M15.4375 23.7816L24.5417 18.6041L15.4375 13.4266V23.7816Z'
                stroke='#F8F8F8'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </a>
          <h3 className='mb-[14px] text-fs-18-lh-133-fw-600'>
            {title.toUpperCase()}
          </h3>
          <div className='mb-[33px] flex gap-4'>
            <div className='flex items-center gap-[6px]'>
              <p className='mt-[3px] text-fs-14-lh-normal-fw-500 text-white/50'>
                {rating.toFixed(1)}
              </p>
              <Rating rating={rating} />
            </div>
            <p className='mt-[3px] text-fs-14-lh-normal-fw-500 text-white/50'>
              {time + ' min'}
            </p>
          </div>
          <ul className='mb-10 space-y-[14px]'>
            {ingredients.map(({ _id, name, measure }) => (
              <li
                key={_id}
                className='relative flex justify-between after:absolute after:-bottom-2 
                after:h-[1px] after:w-full after:bg-white/10'>
                <p className='text-fs-14-lh-128-fw-400'>{name}</p>
                <p className='text-fs-14-lh-128-fw-400 text-white/50'>
                  {measure}
                </p>
              </li>
            ))}
          </ul>
          <ul className='mb-6 flex flex-wrap gap-2'>
            {tags.map((tag, i) => (
              <li
                key={i}
                className='rounded-[35px] border border-white/20 px-4 py-2 text-fs-12-lh-normal-fw-500'>
                #{tag}
              </li>
            ))}
          </ul>
          <p className='mb-10 text-fs-14-lh-128-fw-400 text-white/80'>
            {description}
            {instructions}
          </p>
          <div className='space-x-[14px]'>
            <button className='btn-favorites'>Add to favorite</button>
            <button className='btn-order'>Give a rating</button>
          </div>
        </>
      }
      className='min-h-dvh w-[335px] overflow-y-scroll rounded-[15px] bg-white px-5 pb-5 pt-10 dark:bg-dark'
    />
  )
}
