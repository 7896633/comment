import React from 'react'
import SidebarLink from './SidebarLink'

import { AiFillHome, AiOutlineInbox, AiOutlineUser } from "react-icons/ai"
import { BiHash } from "react-icons/bi"
import { BsBell, BsBookmark, BsThreeDots, BsTwitter } from "react-icons/bs"
import { HiOutlineClipboardList, HiOutlineDotsCircleHorizontal } from "react-icons/hi"
import { signOut, useSession } from 'next-auth/react'

const Sidebar = () => {

    const {data: session} = useSession()

    return (
        <div className='hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full border-r border-gray-400 pr-0 xl:pr-8'>
            <div className='text-xl text-blue-400 hoverEffect p-0 xl:ml-24'>
                LOGO
            </div>
            <div className='space-y-2 mt-4 mb-2.5 xl:ml-24'>
                <SidebarLink text="主页" Icon={AiFillHome} />
                <SidebarLink text="探索" Icon={BiHash} />
                <SidebarLink text="消息" Icon={BsBell} />
                <SidebarLink text="邮箱" Icon={AiOutlineInbox} />
                <SidebarLink text="收藏" Icon={BsBookmark} />
                <SidebarLink text="列表" Icon={HiOutlineClipboardList} />
                <SidebarLink text="资料" Icon={AiOutlineUser} />
                <SidebarLink text="更多" Icon={HiOutlineDotsCircleHorizontal} />
            </div>




            {/*点击退出*/}
            <div
                className="text-[#d9d9d9] flex items-center justify-center mt-auto hoverEffect xl:ml-auto xl:-mr-5 px-4 py-2"
                onClick={signOut}
            >
                <img
                    src={session?.user?.image}
                    alt=""
                    className="h-10 w-10 rounded-full xl:mr-2.5"
                />
                <div className="hidden xl:inline leading-5">
                    <h4 className="font-bold">{session?.user?.name}</h4>
                    <p className="text-[#6e767d]">@{session?.user?.tag}</p>
                </div>
                <BsThreeDots className="h-5 hidden xl:inline ml-10" />
            </div>

        </div>
    )
}

export default Sidebar