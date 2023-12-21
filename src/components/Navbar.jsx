import { useState } from 'react'
import logo from '../assets/logo.svg'
import { FiMenu } from 'react-icons/fi'
import { ImCross } from 'react-icons/im'

function Navbar() {
    const [isOpened, setIsOpened] = useState(false)

    function toggleNavbar() {
        document.body.classList.toggle('overflow-hidden')
        setIsOpened((isOpened) => !isOpened)
    }
    return (
        <nav className='bg-[#F9FCFF] relative z-10'>
            <div className='container mx-auto px-4 flex justify-between items-center h-20'>
                <img src={logo} alt="logo" />
                <FiMenu onClick={toggleNavbar} size={25} className='text-blue-500 cursor-pointer lg:hidden' />
                <div className={`${isOpened ? 'translate-x-0' : 'translate-x-full'} text-center fixed top-0 left-0 h-screen w-full flex flex-col bg-blue-300 transition-transform lg:translate-x-0 lg:bg-[#F9FCFF] lg:relative lg:h-auto lg:w-auto`}>
                    <div className='container mx-auto'>
                        <header className='px-4 lg:hidden'>
                            <div className='flex justify-between items-center h-20'>
                                <img src={logo} alt="logo" />
                                <ImCross onClick={toggleNavbar} size={25} className='text-blue-500 cursor-pointer' />
                            </div>
                        </header>
                        <ul className='px-4 h-full flex flex-col mt-16 gap-12 lg:flex-row lg:mt-0 lg:items-center'>
                            <li className=''>Home</li>
                            <li className=''>Articles</li>
                            <li className=''>Pages</li>
                            <li className=''>Pricing</li>
                            <li className=''>Faq</li>
                            <li className=''>
                                <button className='cursor-pointer w-full border font-medium text-blue-500 border-blue-500 rounded-3xl py-2 lg:px-8 lg:text-blue-400 lg:border-blue-400'>Sign in</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar