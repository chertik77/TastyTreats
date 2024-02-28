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
      className='min-h-dvh w-[335px] overflow-y-scroll rounded-[15px] bg-white px-5 pb-5 pt-10 dark:bg-dark tablet:w-[531px]'
      content={
        <>
          <button
            className='absolute right-[14px] top-[14px] leading-[0] tablet:right-4 tablet:top-4'
            onClick={toggleModal}>
            <i className='pi pi-times text-[18px] tablet:text-[24px]'></i>
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
            <i className='pi pi-youtube absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[32px]'></i>
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
            <p className='mt-[4.5px] text-fs-14-lh-normal-fw-500 text-white/50'>
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
    />
  )
}
