'use client'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import axios from 'axios';
import Paper from '@mui/material';

import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
function Cell(props){
    return(
        <Tooltip  title={props.name}>
            <div className=' text-center font-mono tracking-widest text-xs lg:text-sm m-1 h-5 py-2 w-1/2 sm:w-24 sm:m-2 overflow-hidden overflow-y-hidden text-ellipsis ' >
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
        createData('img1', 1,'2004-04-12','https://zfmmdk49fjq8z4ix.public.blob.vercel-storage.com/img1-oE3hPOQOuq7Skd3SuuolModTBe5sBd.jpg'),
        createData('img1', 1,'2004-04-12','https://zfmmdk49fjq8z4ix.public.blob.vercel-storage.com/img1-oE3hPOQOuq7Skd3SuuolModTBe5sBd.jpg'),
        createData('img1', 1,'2004-04-12','https://zfmmdk49fjq8z4ix.public.blob.vercel-storage.com/img1-oE3hPOQOuq7Skd3SuuolModTBe5sBd.jpg'),
        createData('img1', 1,'2004-04-12','https://zfmmdk49fjq8z4ix.public.blob.vercel-storage.com/img1-oE3hPOQOuq7Skd3SuuolModTBe5sBd.jpg'),
        createData('img1', 1,'2004-04-12','https://zfmmdk49fjq8z4ix.public.blob.vercel-storage.com/img1-oE3hPOQOuq7Skd3SuuolModTBe5sBd.jpg'),
        createData('img2', 2,'2002-12-23','https://zfmmdk49fjq8z4ix.public.blob.vercel-storage.com/cat-551554_1280-Rzfas9EqFmlTfEmysFIuReKcXrXHuC.jpg'),
        createData('img2', 2,'2002-12-23','https://zfmmdk49fjq8z4ix.public.blob.vercel-storage.com/cat-551554_1280-Rzfas9EqFmlTfEmysFIuReKcXrXHuC.jpg'),
        createData('img2', 2,'2002-12-23','https://zfmmdk49fjq8z4ix.public.blob.vercel-storage.com/cat-551554_1280-Rzfas9EqFmlTfEmysFIuReKcXrXHuC.jpg'),
        createData('img2', 2,'2002-12-23','https://zfmmdk49fjq8z4ix.public.blob.vercel-storage.com/cat-551554_1280-Rzfas9EqFmlTfEmysFIuReKcXrXHuC.jpg'),
        createData('img2', 2,'2002-12-23','https://zfmmdk49fjq8z4ix.public.blob.vercel-storage.com/cat-551554_1280-Rzfas9EqFmlTfEmysFIuReKcXrXHuC.jpg'),
        
    
    ],
    [
        createData('img1', 1,'2002-12-23','https://zfmmdk49fjq8z4ix.public.blob.vercel-storage.com/img1-oE3hPOQOuq7Skd3SuuolModTBe5sBd.jpg'),
    ]
    
    ])
    const [file, setFile] = useState(null);
    const[ add, setAdd]=useState(false);
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
        setAdd(false)
        

      } else {
        alert('Failed to upload file');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  

    
    //console.log(newrecord.download)
    return (
        <div className='  ' >
            
            

        <div className='flex flex-col xl:flex-row'>
        <div className='flex flex-col border-solid border-cyan-200 border '>
        

        <div className=' p-1 flex flex-col h-96 overflow-y-scroll' style={{width:"50rem"}}>
            <div className='flex flex-row  bg-cyan-700 sticky top-0 '>
            <div className='flex-1'><Cell name="NAME"/></div>
            <div className='w-10 my-auto mx-2'>ID</div>
            <div className=''><Cell name="DATE"/></div>
                <Cell name="OPTIONS" className=""/>
            </div>
    
            { props.curDoc>=0 && rows[props.curDoc] && rows[props.curDoc].length>0 &&
                
                rows[props.curDoc].map((i,ind)=>{
                    
                    return(
                    
                    <div key={ind} className='my-2 hover:animate-pulse flex flex-row bg-black/20 text-white hover:bg-sky-200 hover:text-black hover:font-extrabold hover:cursor-pointer'>
                        
                        <div className='flex-1 '><Cell name={i.name}/></div>
                        <div className='w-10 my-auto mx-2'>{i.id}</div>
                        <div className=''><Cell name={i.date}/></div>
                        <div className='border border-solid border-cyan-200  rounded-md my-2 text-center font-mono tracking-widest text-xs lg:text-sm h-5 py-2 w-1/2 sm:w-24 mx-2 overflow-hidden overflow-y-hidden text-ellipsis '>
                        
                        <a href={`${i.download}?download=1`} download className='text-cyan-600'>
                        <ArrowCircleDownIcon className='animate-bounce'/>
                        </a>

                        <a href={i.download} target='_blank'>
                            <FileOpenIcon className='text-cyan-600 animate-bounce'/>
                        </a>
                        </div>
                        
                    </div>)
                    
                })
            }
            
        </div>

        <div className='py-4 my-4 bg-cyan-700 text-center '>
            Total number of Documents are {rows[props.curDoc]?rows[props.curDoc].length:0}  
        </div>
        </div>

        <div>
        <textarea
            placeholder="Write Notes"
            name="message"
            className="focus:outline-none w-full xl:w-36 focus:ring relative xl:m-5 mt-10 xl:mt-0 h-32 xl:h-80 xl:py-10 xl:px-8  text-sm text-white placeholder-gray-400 bg-cyan-300/40 border-solid border border-cyan-200 rounded outline-none "
            
          />
        
        </div>
        </div>
        <br/>
        
        {!add && <button onClick={()=>setAdd(true)} className=' p-2 hover:bg-cyan-200 bg-cyan-600 hover:cursor-pointer rounded-lg border-0 text-white'>New Entry</button>}
        {add && <form id='frm' className=' border-solid border-cyan-200 border mb-10 flex flex-col w-80'>
                <input className='p-2 m-1 py-1 border-0 font-bold bg-white/70 text-black' placeholder='id-number' type='number' onChange={(e)=>setNewrecord( {...newrecord,id:e.target.value} )}/>
                <input className='p-2 m-1 py-1 border-0 font-bold bg-white/70 text-black' placeholder='Name' type='text' onChange={(e)=>setNewrecord( {...newrecord,name:e.target.value} )}/>
                <input className='p-2 m-1 py-1 border-0 font-bold bg-white/70 text-black'  type="file" onChange={(e)=>setFile(e.target.files[0])}/>
                <input className='p-2 m-1 py-1 border-0 font-bold bg-white/70 text-black' placeholder='date' type="date" onChange={(e)=>setNewrecord( {...newrecord,date:e.target.value} )}/>
                <button type="submit" className='pb-2 w-10 hover:animate-spin hover:bg-cyan-200 bg-cyan-600 hover:cursor-pointer rounded-lg border-0'  onClick={(e)=>{
                e.preventDefault();
                if(newrecord.name && newrecord.date && file && newrecord.id){
                    handleFileUpload();
                }
                else alert("Enter data")
                }}><AddIcon className='pt-2'/></button>
                
            </form>
        }
        </div>
        
    )
}

export default DisplayList