import facebook from '../assets/facebook.jpg'

function Cta() {
    return (
        <section className="bg-blue-600 py-12 z-10 relative overflow-hidden">
            <div className='w-full bg-white h-16 absolute top-0 rounded-bl-[100%] rounded-br-[100%]'></div>
            <div className="container mx-auto mt-11 px-4 lg:flex lg:flex-row-reverse lg:items-center lg:gap-32">
                <div className="hidden sm:block relative bg-white p-2 rounded-lg max-w-[370px] m-auto mb-20 mt-10 before:content-[''] before:w-44 before:h-32 before:bg-[#1b3142] before:absolute before:bottom-0 before:-translate-x-1/4 before:translate-y-7 before:-z-10 before:rounded-lg after:content-[''] after:w-44 after:h-32 after:bg-[#fc5a5a] after:absolute after:top-4 after:right-0 after:translate-x-1/4 after:-z-10 after:rounded-lg">
                    <img src={facebook} alt="facebook messenger image" />
                    <div className='p-3'>
                        <h4 className='text-blue-500 text-lg font-semibold font-roboto '>The best articles every week</h4>
                        <p className='mt-2 text-gray '>Our insurance plans offers are priced the same everywhere else.</p>
                    </div>
                </div>
                <div>
                    <p className="text-white font-roboto text-2xl font-semibold mb-4 leading-9 lg:text-3xl lg:leading-10">Get our stories delivered From us to your inbox weekly.</p>
                    <div className='lg:mt-8'>
                        <input type="text" placeholder="Your email" className="block w-full py-3 px-5 rounded-lg mb-4 lg:w-auto lg:inline" />
                        <button className="block py-3 px-5 rounded-lg bg-blue-400 w-full text-white font-semibold lg:w-auto lg:inline lg:ml-3">Get started</button>
                    </div>
                    <p className="text-gray leading-7 mt-5"><span className="text-[#B3BAC5]">Get a response tomorrow</span> if you submit by 9pm today. if we received after 9pm will get a response the following day.</p>
                </div>
            </div>
        </section>
    )
}

export default Cta