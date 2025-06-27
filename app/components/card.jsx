'use client'
import React, { useState } from 'react'
import { FaRegFileLines } from "react-icons/fa6";
import {motion} from 'framer-motion'


const card = ({data,reference,parentsFunc}) => {


  return (
    data.map((task,index)=>{
        return(<motion.div drag dragConstraints={reference} key={index} whileDrag={{scale:1.2}} className="w-60 h-72 rounded-[35px] m-5 bg-zinc-900/90 text-white px-5 py-6 overflow-hidden relative flex flex-col flex-shrink-0">
            <FaRegFileLines />
            <p className='mt-4 text-sm font-[500]'>
                {task}
            </p>
            <div 
            onClick={()=>{
              parentsFunc(index)
            }}
            className={`absolute bottom-0 left-0 pt-7 font-semibold bg-green-600 w-full h-20 text-center cursor-pointer`}>
                Archive 
            </div>
        </motion.div>)
        
    })
  )
}

export default card
