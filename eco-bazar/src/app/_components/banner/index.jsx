import React from 'react'

const Header = () => {
  return (
    <div className='container mx-auto grid grid-cols-12'>
      <div className='bg-primary-bright col-span-8 h-[600px]'>Left</div>
      <div className='bg-primary-dark col-span-4'>
        <div className='bg-[red]'>Top</div>
        <div className='bg-[blue]'>Bottom</div>
      </div>
    </div>
  )
}

export default Header