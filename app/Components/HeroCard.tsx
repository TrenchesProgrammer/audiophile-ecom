import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroCard = () => {
  return (
    <div className='bg-white-200 relative w-full lg:w-[300px] pt-20 rounded-lg h-[180px] flex flex-col items-center justify-center' >
        <Image src="/shared/desktop/image-category-thumbnail-headphones.png" className='absolute -top-18  ' alt="Product" height={200} width={200}/>
        <h3 className='font-bold text-[18px]'>HEADPHONES</h3>
        <Link className='text-[13px] text-black/50 font-bold' href="/">SHOP </Link>
    </div>
  )
}

export default HeroCard