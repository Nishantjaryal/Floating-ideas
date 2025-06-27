"use client"

import React, { useEffect, useRef, useState } from "react";
import Card from "./card";
import { motion } from "framer-motion";
import { FaNotesMedical } from "react-icons/fa";

const foreground = () => {

  const KEY = 'ytr7c4rt7yytvpw5y5'
  const ref = useRef(null);
  const Dummydata = ["Draggable Cards, Simple & Flexible to use"];

  const [signal, setsignal] = useState(false)
  const [data_arr, setdata_arr] = useState([]);


  useEffect(() => {           
    const rawData = window.localStorage.getItem(KEY)
    const ProcessedData = JSON.parse(rawData);
    if ( ProcessedData && ProcessedData.length !== 0) {
      setdata_arr(ProcessedData ? ProcessedData : Dummydata)
    }
  }, [])


  useEffect(() => {
    window.localStorage.setItem(KEY,JSON.stringify(data_arr))
  }, [signal])
  

  
  const [message, setmessage] = useState("");
  const addData = (e) => {
    e.preventDefault();

    if (message !== "") {
      try 
      {
        setdata_arr([...data_arr, message ]);
        setsignal((prev)=>!prev)
        console.log("Successfully Added")
        setmessage("");
      } 
      catch (error) 
      {
        console.log(error.message);
      }
    } 
    else {
      console.log("please type something"); // replace confiration with react toastify
    }
  };


  const deleteNote = (index) => {
    try {
        const copyData = [...data_arr];
        copyData.splice(index, 1);
        setdata_arr(copyData);
        setsignal((prev)=>!prev)
        console.log("Successfully deleted");
    } catch (error) 
    {
        console.log(error.message);
    }
    
  };

  return (
    <div
      ref={ref}
      className="box-border p-4 w-full h-full fixed top-0 flex flex-wrap gap-6 z-[3] scroll-smooth"
    >

        <motion.div
        drag
        dragConstraints={ref}
        whileDrag={{ scale: 1.2 }}
        className="w-60 h-72 rounded-[35px] m-5 bg-zinc-900/90 absolute bottom-0 right-5 text-white px-5 py-6 overflow-hidden flex flex-col flex-shrink-0"
      >
        <FaNotesMedical />
        <textarea
          value={message}
          onChange={(e) => setmessage(e.target.value)}
          rows={7}
          placeholder="Take a note"
          className="resize-none bg-transparent outline-none mt-3 text-sm"
        ></textarea>
        <button
          onClick={addData}
          className="absolute bottom-0 left-0 font-semibold bg-blue-600 w-full h-20 text-center cursor-pointer"
        >
          Set Note
        </button>
      </motion.div>
      <Card data={data_arr} parentsFunc={deleteNote} reference={ref} />

        </div>
     
  );
};

export default foreground;
