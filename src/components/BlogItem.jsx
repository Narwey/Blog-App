import image from '../assets/card.jpg'
import profile from '../assets/profile.jpg'

function BlogItem() {
    return (
        <div className='shadow-lg rounded-lg'>
            <img src={image} alt="blog image" className='w-full' />
            <div className='px-4 py-3'>
                <h3 className='font-roboto text-blue-500 text-2xl font-semibold mt-3'>Future of Work</h3>
                <p className='mt-3 mb-4 leading-7 text-blue-500'>Majority of people will work in jobs that don't exist today.</p>

                <div className='flex justify-between mb-2 items-center'>
                    <div className='flex gap-3'>
                        <div className='w-10 rounded-full'>
                            <img className='rounded-full' src={profile} alt="" />
                        </div>
                        <div>
                            <h4 className='text-blue-500 italic font-semibold'>Badr Elyatim</h4>
                            <p className='text-gray text-sm'>Verified Writer</p>
                        </div>
                    </div>
                    <p className='text-gray italic font-semibold'>02 May</p>
                </div>
            </div>
        </div>
    )
}

export default BlogItem