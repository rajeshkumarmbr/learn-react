import React from 'react'

function Header() {
  return (
    <header className='bg-sky-400 text-white '>
        <nav className="h-[10vh] w-screen sticky flex justify-between items-center">
            <div className="w-1/4 ml-12">
                <h1 className='text-4xl font-bold'>Logo</h1>
            </div>

            <div className="flex mr-8 w-2/4 justify-between ">
                <ul className=''>
                    <li><a href="#">Home</a></li>
                </ul>
                <ul>
                    <li><a href="#">About Us</a></li>
                </ul>
                <ul>
                    <li><a href="#">Service</a></li>
                </ul>
                <ul>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </nav>
   </header>
  )
}

export default Header