import logoLight from '../assets/logo-light.svg'
import { AiFillHeart } from 'react-icons/ai'

function Footer() {

    return (
        <footer className="bg-blue-600 pt-9">
            <div className="container mx-auto px-4 md:flex md:flex-row-reverse md:justify-between">
                <div className="grid grid-cols-2 gap-x-8 lg:grid-cols-4 xl:gap-x-20">
                    <div>
                        <h3 className="text-[#5A7184] font-bold">Product</h3>
                        <ul className="flex flex-col gap-3 text-[#959EAD] mt-5 mb-7">
                            <li>Landingpage</li>
                            <li>Features</li>
                            <li>Documentation</li>
                            <li>Referral Program</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[#5A7184] font-bold">Services</h3>
                        <ul className="flex flex-col gap-3 text-[#959EAD] mt-5 mb-7">
                            <li>Documentation</li>
                            <li>Design</li>
                            <li>Themes</li>
                            <li>Illustrations</li>
                            <li>UI Kit</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[#5A7184] font-bold">Company</h3>
                        <ul className="flex flex-col gap-3 text-[#959EAD] mt-5 mb-7">
                            <li>About</li>
                            <li>Terms</li>
                            <li>Privacy Policy</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[#5A7184] font-bold">More</h3>
                        <ul className="flex flex-col gap-3 text-[#959EAD] mt-5 mb-7">
                            <li>Documentation</li>
                            <li>License</li>
                            <li>Changelog</li>
                        </ul>
                    </div>
                </div>
                <div className='text-center pb-7 md:text-left'>
                    <img src={logoLight} alt="logo" className='inline-block'/>
                    <p className='text-[#5A7184] mt-6'>Build a modern and creative website with crealand</p>
                </div>
            </div>
            <div className='flex flex-col items-center py-12'>
                <div className='bg-blue-400 p-2 rounded-full'><AiFillHeart size={25} className='text-white'/></div>
                <p className='text-[#5A7184] italic font-semibold mt-4'>Copyright © 2023. Badr with love.</p>
            </div>
        </footer>
    )
}

export default Footer