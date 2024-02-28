import dynamic from 'next/dynamic'

import { useModal } from '@/hooks'

const RecipeModal = dynamic(() =>
  import('@/components/features/RecipeModal').then(r => r.RecipeModal)
)

export const RecipesModalBtn = ({ recipeId }: { recipeId: string }) => {
  const { isModalOpen, toggleModal } = useModal()

  return (
    <>
      <button
        className='btn-recipe'
        onClick={toggleModal}
        type='button'>
        See recipe
      </button>
      {isModalOpen && (
        <RecipeModal
          recipeId={recipeId}
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
        />
      )}
    </>
  )
}
