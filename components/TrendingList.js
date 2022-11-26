import Image from 'next/image'
import React from 'react'

const TrendingList = () => {
    return (
        <div className='mt-4 flex items-center'>
            <div>
                <p className='text-gray-500 text-[14px] mb-1'>张三</p>
                <h1 className='font-medium pr-2'>十万个为什么xxxxxxxsssss</h1>
            </div>

            <div>
                <Image className='rounded-[20px]' src="/trending-1.jfif" height={120} width={120}  alt=''/>
            </div>
        </div>
    )
}

export default TrendingList