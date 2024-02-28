import { RecipeModal } from '@/components/features/RecipeModal'

import { useModal } from '@/hooks'

export const RecipesModalBtn = () => {
  const { isModalOpen, toggleModal } = useModal()

  return (
    <>
      <button
        className='btn-recipe'
        onClick={toggleModal}
        type='button'>
        See recipe
      </button>
      <RecipeModal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
      />
    </>
  )
}
