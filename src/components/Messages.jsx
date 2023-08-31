import avatar from '../assets/avatar.jpeg';

const name = 'GRUB ISLAMIC 🔯';
const baru = false;
const message = 'Memek lu..';

const Messages = props => {
    return (
        <div className="p-4 flex" {...props}>
            <img src={avatar} alt="avatar" className="rounded-full w-20"/>
            <div className='flex-col self-center ml-5 w-10/12'>
                <h1 className='text-msg-font text-xl'>{name}</h1>
                <p className='text-nav-font py-1 text-sm'>{name} : {message.length >= 25 ? message.slice(0, 23) + '....' : message}</p>
            </div>
            <div className='w-2/12 flex justify-end'>
                <p className={'pt-3 text-sm ' + (baru ? 'text-ijo' : 'text-nav-font')}> 15 : 48</p>
                {/* <div className='flex bg-ijo'>
                    <p className='text-[#f20]'>447</p>
                </div> */}
            </div>
        </div>
    );
}

export default Messages;