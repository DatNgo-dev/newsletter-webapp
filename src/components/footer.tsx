import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center bg-blue-900 text-blue-400 mt-auto'>
        <p>&copy; {new Date().getFullYear()} Dat Ngo</p>
    </div>
  )
}

export default Footer