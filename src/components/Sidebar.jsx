import SlideshowIcon from '@mui/icons-material/Slideshow';
import { Link } from 'react-router-dom';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import FlareIcon from '@mui/icons-material/Flare';
const Sidebar = () => {
    return (
        <div className="bg-white">
            <div className="h-12 items-center gap-3 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
                <LocalMoviesIcon />
                <span>Movie App</span>
            </div>
            <div>
                <section className="text-gray-400 mb-2 mt-4 mr-2 ">
                    <p className="text-gray-400 mb-2 mt-4 uppercase">Movies</p>
                    <Link className='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700  hover:bg-[#0091ea] hover:text-[#fff] transition-all' tr to="/">
                        <SlideshowIcon />
                        Movie List
                    </Link>

                </section>
                <section className="text-gray-400 mb-2 mt-4 mr-2 ">
                    <p className="text-gray-400 mb-2 mt-4 uppercase">Other</p>
                    <Link className='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700  hover:bg-[#0091ea] hover:text-[#fff] transition-all' >
                        <FlareIcon />
                        Example 0
                    </Link>
                    <Link className='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700  hover:bg-[#0091ea] hover:text-[#fff] transition-all' >
                        <FlareIcon />
                        Example 1
                    </Link>
                    <Link className='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700  hover:bg-[#0091ea] hover:text-[#fff] transition-all' >
                        <FlareIcon />
                        Example 2
                    </Link>
                    <Link className='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700  hover:bg-[#0091ea] hover:text-[#fff] transition-all' >
                        <FlareIcon />
                        Example 3
                    </Link>
                </section>
                <section className="text-gray-400 mb-2 mt-4 mr-2 ">
                    <p className="text-gray-400 mb-2 mt-4 uppercase">Other</p>
                    <Link className='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700  hover:bg-[#0091ea] hover:text-[#fff] transition-all' >
                        <FlareIcon />
                        Example 4
                    </Link>
                    <Link className='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700  hover:bg-[#0091ea] hover:text-[#fff] transition-all' >
                        <FlareIcon />
                        Example 5
                    </Link>
                    <Link className='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 hover:bg-[#0091ea] hover:text-[#fff] transition-all' >
                        <FlareIcon />
                        Example 6
                    </Link>
                    <Link className='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700  hover:bg-[#0091ea] hover:text-[#fff] transition-all' >
                        <FlareIcon />
                        Example 7
                    </Link>
                </section>
                <section className="text-gray-400 mb-2 mt-4 mr-2 ">
                    <p className="text-gray-400 mb-2 mt-4 uppercase">Other</p>
                    <Link className='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700  hover:bg-[#0091ea] hover:text-[#fff] transition-all' >
                        <FlareIcon />
                        Example 8
                    </Link>
                    <Link className='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700  hover:bg-[#0091ea] hover:text-[#fff] transition-all' >
                        <FlareIcon />
                        Example 9
                    </Link>
                    <Link className='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700  hover:bg-[#0091ea] hover:text-[#fff] transition-all' >
                        <FlareIcon />
                        Example 10
                    </Link>
                    <Link className='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700  hover:bg-[#0091ea] hover:text-[#fff] transition-all' >
                        <FlareIcon />
                        Example 11
                    </Link>
                </section>


            </div>
        </div>
    )
}

export default Sidebar