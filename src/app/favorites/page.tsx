import Image from 'next/image'

const page = () => {
  return (
    <Image
      src='/favorites-img.avif'
      className='mt-10'
      width={1080}
      height={356}
      alt='...'
    />
  )
}

export default page
