import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface HeroCardProps {
  imageUrl: string;
  title: string;
  linkUrl: string;
}

const HeroCard: React.FC<HeroCardProps> = ({ imageUrl, title, linkUrl }) => {
  return (
    <div className='bg-white-200 relative w-full lg:w-[300px] pt-20 rounded-lg h-[180px] flex flex-col items-center justify-center' >
        <Image src={imageUrl} className='absolute -top-18  ' alt="Product" height={200} width={200}/>
        <h3 className='font-bold text-[18px]'>{title}</h3>
        <Link className='text-[13px] text-black/50 font-bold' href={linkUrl}>SHOP </Link>
    </div>
  )
}

export default HeroCard