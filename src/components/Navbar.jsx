import {IconThreeDots, IconCamera, IconSearch, IconKalilinux} from './icons/icons';

const fontColor = '#69767F';

const Navbar = () => {
    return (
        <nav className="bg-nav"> 
            <div className='flex justify-between mb-2 p-3'>
                <h1 className="text-nav-font text-2xl">WhatsApp</h1>
                <div className='flex'>
                    <IconCamera fill={fontColor}/>
                    <IconSearch fill={fontColor} className='ml-7'/>
                    <IconThreeDots fill={fontColor} className='ml-7'/>
                </div>
            </div>
            <div className='p-2 flex'>
                <div className='w-1/12'>
                    <IconKalilinux fill={fontColor}/>
                </div>
                <div className='flex w-11/12 justify-around'>
                    <h1 className='text-nav-font text-lg'>Chats</h1>
                    <h1 className='text-nav-font text-lg'>Status</h1>
                    <h1 className='text-nav-font text-lg'>Calls</h1>
                </div>
            </div>
        </nav>
    )
}



export default Navbar;