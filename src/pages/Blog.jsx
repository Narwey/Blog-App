import card from '../assets/card.jpg'

function Blog() {
    return (
        <section className="container mx-auto px-4 lg:px-24">
            <div className='flex flex-col lg:flex-row lg:items-start lg:gap-8 mt-10'>
                <div className='flex-1'>
                    <span className='font-roboto text-[#808080] flex gap-3 mb-4'>Home <span>/</span> Blog <span>/</span> Article title</span>
                    <div>
                        <img src={card} alt="Article image" className='w-full rounded-xl' />
                        <span className='block my-4 uppercase tracking-widest font-roboto text-blue-400'>education</span>
                    </div>
                    <h1 className='text-[#0D2436] text-2xl md:text-3xl lg:text-4xl leading-7 font-roboto font-semibold mb-6'>Help children get better education</h1>
                    <p className='text-[#183B56] leading-8 mb-4 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ea sit tenetur rem in sint quibusdam architecto nostrum nobis neque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi provident explicabo ea qui, inventore perspiciatis. Iusto ipsum doloribus architecto distinctio.</p>
                    <p className='text-[#183B56] leading-8 mb-4 font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deserunt unde iusto recusandae assumenda animi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum error deserunt, corrupti eum porro numquam?</p>
                    <p className='text-[#183B56] leading-8 mb-4 font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit vel totam molestiae mollitia earum dolorum amet deserunt quibusdam eos nobis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quos tempore ut, voluptatem, sapiente corrupti laboriosam autem laudantium libero dicta culpa incidunt nihil!</p>
                    <div className='relative mb-16 mt-9'>
                        <textarea placeholder='Leave your comment here...' className='block w-full h-44 border border-blue-400 rounded-md pt-3 px-4 pb-14 scroll-pb-14 resize-none outline-none'></textarea>
                        <button className='text-white bg-blue-400 px-8 py-2 rounded-md absolute bottom-4 right-4'>Send</button>
                    </div>
                </div>
                <div className='px-5 py-7 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-9 lg:max-w-xs xl:max-w-sm'>
                    <h2 className='text-[#0D2436] font-roboto font-semibold text-3xl mb-7'>Latest Article</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1'>
                        <div className='flex gap-5 py-4'>
                            <div className='w-[80px] h-[80px] flex-none'>
                                <img className='h-full object-cover rounded-2xl' src={card} alt="" />
                            </div>
                            <div>
                                <h3 className='text-[#0D2436] font-roboto font-semibold leading-7 text-lg mb-1'>Help children get better education</h3>
                                <span className='text-gray'>Jun 27, 2022</span>
                            </div>
                        </div>
                        <div className='flex gap-5 py-4'>
                            <div className='w-[80px] h-[80px] flex-none'>
                                <img className='h-full object-cover rounded-2xl' src={card} alt="" />
                            </div>
                            <div>
                                <h3 className='text-[#0D2436] font-roboto font-semibold leading-7 text-lg mb-1'>Help children get better education</h3>
                                <span className='text-gray'>Jun 27, 2022</span>
                            </div>
                        </div>
                        <div className='flex gap-5 py-4'>
                            <div className='w-[80px] h-[80px] flex-none'>
                                <img className='h-full object-cover rounded-2xl' src={card} alt="" />
                            </div>
                            <div>
                                <h3 className='text-[#0D2436] font-roboto font-semibold leading-7 text-lg mb-1'>Help children get better education</h3>
                                <span className='text-gray'>Jun 27, 2022</span>
                            </div>
                        </div>
                        <div className='flex gap-5 py-4'>
                            <div className='w-[80px] h-[80px] flex-none'>
                                <img className='h-full object-cover rounded-2xl' src={card} alt="" />
                            </div>
                            <div>
                                <h3 className='text-[#0D2436] font-roboto font-semibold leading-7 text-lg mb-1'>Help children get better education</h3>
                                <span className='text-gray'>Jun 27, 2022</span>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h2 className='text-black font-roboto text-2xl font-semibold mb-3'>Tags</h2>
                        <div className='flex flex-wrap gap-x-3 gap-y-2'>
                            <button className='text-white bg-blue-400 px-4 py-2 rounded-xl'>Medical</button>
                            <button className='text-white bg-blue-400 px-4 py-2 rounded-xl'>Lifestyle</button>
                            <button className='text-white bg-blue-400 px-4 py-2 rounded-xl'>Learn</button>
                            <button className='text-white bg-blue-400 px-4 py-2 rounded-xl'>Healthy</button>
                            <button className='text-white bg-blue-400 px-4 py-2 rounded-xl'>Food</button>
                            <button className='text-white bg-blue-400 px-4 py-2 rounded-xl'>Diet</button>
                            <button className='text-white bg-blue-400 px-4 py-2 rounded-xl'>Education</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog