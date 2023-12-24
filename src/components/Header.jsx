import MenuIcon from '@mui/icons-material/Menu';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import avatar from '../assets/user.jpg';

const Header = () => {
    return (
        <div className="flex justify-between h-14 items-center  py-3 px-5">
            <div>
                <button>
                    <MenuIcon className='text-[#0091ea]' />
                </button>
            </div>
            <div className='flex'>
            <button className='relative text-xl rounded-full p-2 hover:bg-light-gray'>
                    <StorefrontIcon className='text-[#0091ea]' />
                </button>

                <button className='relative text-xl rounded-full p-2 hover:bg-light-gray'>
                    <ChatBubbleOutlineIcon className='text-[#0091ea]' />
                    <span className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" style={{ background: "#03c9d7" }}></span>
                </button>

                <button className='relative text-xl rounded-full p-2 hover:bg-light-gray'>
                    <NotificationsNoneIcon className='text-[#0091ea]' />
                    <span className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" style={{ background: "#fec90f" }}></span>
                </button>

                <section className='flex gap-3 items-center ml-2'>
                    <img
                        className="rounded-full h-8 w-8"
                        src={avatar}
                        alt="user-profile"
                    />
                    <article className=' font-sans text-gray-500 text-[13px]'>
                        <span>Hi' <strong>Arif Küçük</strong></span>
                    </article>
                </section>
            </div>
        </div>
    )
}

export default Header