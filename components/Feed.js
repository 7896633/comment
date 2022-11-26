import React, { useEffect, useState } from 'react'
import { HiOutlineSparkles } from "react-icons/hi"
import Input from './Input'
import Post from './Post'
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import {motion} from "framer-motion";

const Feed = () => {

    const [posts, setPosts] = useState([])

    useEffect(
        () =>
            // 监听文档获取实时信息
            onSnapshot(
              //  查询   文件夹                           排序      字段 ：时间段           排序方式：降序
                query(collection(db, "posts"), orderBy("timestamp", "desc")),
                (snapshot) => {
                    // 渲染文件
                    setPosts(snapshot.docs);
                }
            ),
        [db]
    )
    return (
        <section className='sm:ml-[81px] xl:ml-[340px] w-[600px] min-h-screen border-r border-gray-400 text-white py-2'>
            <div className='sticky top-0 bg-black flex justify-between font-medium text-[20px] px-4 py-2'>
                Home
                <HiOutlineSparkles />
            </div>

            <Input />
            {posts.map((post) => (
                <motion.div
                key={post.id}
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                >
                    <Post key={post.id} id={post.id} post={post.data()} />
                </motion.div>
            ))}

        </section>
    )
}

export default Feed