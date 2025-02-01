import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='flex items-center gap-6'>
      <ul className='flex space-x-6 items-center'>
        <li>
          <Link href={'/'}>
            <b>Home</b>
          </Link>
        </li>
        <li>
          <Link href={'/shop'}>
            <b>Shop</b>
          </Link>
        </li>
        <li>
          <Link href={'/about'}>
            <b>About</b>
          </Link>
        </li>
        <li>
          <Link href={'/contact'}>
            <b>Contact</b>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
