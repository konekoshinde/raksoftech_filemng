'use client'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import axios from 'axios';

import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
function Cell(props){
    return(
        <Tooltip  title={props.name}>
            <div className='font-mono tracking-widest text-xs lg:text-sm m-1 h-5 py-2 w-1/2 sm:w-24 sm:m-2 overflow-hidden overflow-y-hidden text-ellipsis '>
            {props.name}
            </div>

        </Tooltip>

    )

}
function createData(name,id, date,download){
    return({name,id,date,download})
}

function DisplayList(props) {
    const [rows,setRows] = useState([
    [
        createData('img1', 1,'2004-04-12','https://zfmmdk49fjq8z4ix.public.blob.vercel-storage.com/img1-oE3hPOQOuq7Skd3SuuolModTBe5sBd.jpg'),
        createData('img2', 2,'2002-12-23','https://zfmmdk49fjq8z4ix.public.blob.vercel-storage.com/cat-551554_1280-Rzfas9EqFmlTfEmysFIuReKcXrXHuC.jpg'),
        
    
    ],
    [
        createData('img1', 1,'2002-12-23','https://zfmmdk49fjq8z4ix.public.blob.vercel-storage.com/img1-oE3hPOQOuq7Skd3SuuolModTBe5sBd.jpg'),
    ]
    
    ])
    const [file, setFile] = useState(null);
    const [newrecord, setNewrecord]=useState({
        "name":"",
        "id":"",
        "date":"",
        "download":""
        
    })
    useEffect(()=>{
        if(newrecord.id && newrecord.date && newrecord.name && newrecord.download){
            console.log(newrecord)
        setRows(
            row=>{
                const cur= [...row]
                const data=createData(newrecord.name,newrecord.id,newrecord.date,newrecord.download)
                
                cur[props.curDoc]=[...cur[props.curDoc],data]
                return cur
            }
        )
        document.getElementById("frm").reset();
    }
    },[newrecord])

    

    if(props.curDoc===rows.length){
        
        setRows(prevArray => [...prevArray, []]);
        
        
    }
    const handleFileUpload = async () => {
       
    if (!file) return;
    
    const formData = new FormData();
    formData.append('file', file);
    
    

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      

      if (response.ok) {
        alert('File uploaded successfully');
        const data=await response.json()
        setNewrecord( {...newrecord,download:data.url} )
        

      } else {
        alert('Failed to upload file');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  

    
    //console.log(newrecord.download)
    return (
        <div className='  flex flex-col xl:flex-row my-3'>
            <div className='flex flex-col'>
            
        <form id='frm' className='my-3'>
                <input className='m-1 py-1 border-0 font-bold  text-black' placeholder='id-number' type='number' onChange={(e)=>setNewrecord( {...newrecord,id:e.target.value} )}/>
                <input className='m-1 py-1 border-0 font-bold  text-black' placeholder='Name' type='text' onChange={(e)=>setNewrecord( {...newrecord,name:e.target.value} )}/>
                <input className='m-1 py-1 border-0 font-bold  text-black'  type="file" onChange={(e)=>setFile(e.target.files[0])}/>
                <input className='m-1 py-1 border-0 font-bold  text-black' placeholder='date' type="date" onChange={(e)=>setNewrecord( {...newrecord,date:e.target.value} )}/>
                <button className='pb-2 bg-cyan-100 hover:cursor-pointer rounded-lg border-0'  onClick={(e)=>{
                e.preventDefault();
                handleFileUpload();
                
                
                }}><AddIcon className='pt-2'/></button>
                
            </form>
           
        

        <div className=' flex flex-col h-96 overflow-y-scroll'>
            <div className='flex flex-row md:gap-x-10 md:px-5 xl:gap-x-28 bg-cyan-500 sticky top-0 '>
                <Cell name="ID" className=""/>
                <Cell name="NAME" className=""/>
                <Cell name="DATE" className=""/>
                <Cell name="OPTIONS" className=""/>
            </div>
    
            { props.curDoc>=0 && rows[props.curDoc] && rows[props.curDoc].length>0 &&
                
                rows[props.curDoc].map((i,ind)=>{
                    
                    return(
                    
                    <div key={ind} className='flex flex-row md:gap-x-10 sm:px-5 xl:gap-x-28' style={{backgroundColor:(ind%2)?"rgb(207 250 254)":"white"}}>
                        
                        <Cell name={i.id}/>
                        <Cell name={i.name}/>
                        <Cell name={i.date}/>
                        <div>
                        
                        <a href={`${i.download}?download=1`} download className='me-4'>
                        <ArrowCircleDownIcon className='text-cyan-500'/>
                        
                        </a>

                        <a href={i.download} target='_blank'>
                            <FileOpenIcon className='text-cyan-500'/>
                        </a>
                        </div>
                        
                    </div>)
                    
                })
            }
            
        </div>

        <div className='py-4 my-4 bg-cyan-500 text-center '>
            Total number of Documents are {rows[props.curDoc]?rows[props.curDoc].length:0}  
        </div>
        </div>

        <div>
        <textarea
            placeholder="Write Notes"
            name="message"
            className="focus:outline-none w-full xl:w-36 focus:ring relative xl:m-5 mt-10 xl:mt-0 h-32 xl:h-80 xl:py-10 xl:px-8  text-sm text-cyan-500 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
            
          />
        
        </div>
        
        </div>
        
    )
}

export default DisplayList