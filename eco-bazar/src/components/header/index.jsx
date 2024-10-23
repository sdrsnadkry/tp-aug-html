import { DropDown, MapIcon } from '@/assets/icons'
import Image from 'next/image'
import React from 'react'


const Header = () => {
  return (
    <div>
      <Image src={MapIcon} alt='map' />
      <Image src={DropDown} alt='map' />
    </div>
  )
}

export default Header