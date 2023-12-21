import hero from '../assets/hero.svg'

function Hero() {
    return (
        <section className="pt-12  bg-[#F9FCFF] lg:pt-24">
            <div className="container mx-auto px-4 flex">
                <div className='lg:w-[47%]'>
                    <h1 className="text-center text-blue-500 font-roboto font-bold text-3xl leading-10 md:text-5xl md:leading-tight lg:text-left">Read the most<br />interesting articles</h1>
                    <p className="text-center text-gray mt-4 mb-12 leading-7 md:px-20 lg:text-left lg:p-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti laudantium doloribus dolore ad eos quae culpa quaerat veniam. Et, praesentium.</p>

                    <div className="relative">
                        <input type="text" placeholder="Search article" className="block w-full py-3 px-5 rounded-lg shadow-md mb-3" />
                        <button className="text-white bg-blue-400 w-full py-3 px-5 rounded-lg font-bold cursor-pointer md:absolute md:top-1/2 md:-translate-y-1/2 md:right-0 md:w-auto md:mr-2 md:py-2">Search</button>
                    </div>
                    <div className="mt-6 md:flex md:items-center md:gap-4">
                        <span className="text-gray text-sm font-semibold italic block mb-3 md:mb-0">Popular Tags : </span>
                        <ul className="flex flex-wrap gap-3 text-sm">
                            <li><Tag name={'Design'} /></li>
                            <li><Tag name={'User Experience'} /></li>
                            <li><Tag name={'User Interfaces'} /></li>
                        </ul>
                    </div>
                </div>
                <div className="hidden lg:block w-[53%] -translate-y-14">
                    <img src={hero} alt="hero image" />
                </div>
            </div>

        </section>
    )
}

function Tag({ name }) {
    return (
        <button className="text-blue-400 font-bold bg-blue-100 py-2 px-2 rounded-md">{name}</button>
    )
}

export default Hero