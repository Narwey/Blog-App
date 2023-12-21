import BlogItem from "./BlogItem"
import { AiOutlineArrowRight } from 'react-icons/ai'

function BlogList() {
    return (
        <div>
            <div className="container mx-auto px-4 py-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
            </div>
            <div className="flex justify-center">
                <button className="text-blue-400 border-[2px] font-semibold mb-4 border-blue-400 py-2 px-5 rounded-lg flex items-center gap-2">More articles <AiOutlineArrowRight /></button>
            </div>
        </div>
    )
}

export default BlogList