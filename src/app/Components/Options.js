import React, { useState } from 'react'
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import AddIcon from '@mui/icons-material/Add';
import PostAddIcon from '@mui/icons-material/PostAdd';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { useContext } from 'react';
import { NewContext } from './AllFolders';
import ContrastIcon from '@mui/icons-material/Contrast';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

function Options() {
    const {open,alldocs,setAlldocs,trash,curFolderName, setcurFolderName,setTrash, hierarchy,setHierarchy,add,setAdd,file,setFile,folder,setFolder}=useContext(NewContext)
    let t=[];
    for(let i=0;i<alldocs.length;i++){
        if(alldocs[i].type==="folder")t.push(alldocs[i].name)
    }
    
    
  return (
    <div>
      <div className=' flex flex-row justify-between h-12 mb-5 mt-2'>
        <h2 className='my-auto max-w-48 overflow-hidden text-ellipsis'>{curFolderName}</h2>
        
        
        <div className=' flex flex-row gap-x-1 h-10 overflow-hidden justify-center' >
            <ContrastIcon className=' h-5 my-auto text-slate-500'/>
            <Autocomplete style={{display:(open)?"none":"block"}} 
            clearOnEscape
            className='border-solid text-slate-700 border-slate-300 rounded-lg hidden md:block'
            options={t}
            onInputChange={(event, newInputValue) => {
                
                let temp= -1;
                for(let i=0;i<alldocs.length;i++){
                    if(alldocs[i].type==="folder" && newInputValue==alldocs[i].name){
                        temp=i;
                        break;
                    }
                }
                if(temp!=-1)setHierarchy(alldocs[temp].path+`>${alldocs[temp].name}`)
            }}
            sx={{width:500, maxWidth:"40vw"}}
            renderInput={(params) => <TextField {...params} 
            
              />}
              />
        </div>
        <NotificationsNoneIcon className='my-auto text-slate-400'/>
        </div>
      <div className='flex flex-row gap-x-4 mb-5'>
      <button className=' hover:cursor-pointer rounded-md text-left p-2 w-20 lg:w-32 xl:w-64  bg-white hover:bg-gray-100 text-xs  lg:font-extrabold border-gray-300 border-solid text-slate-700' onClick={()=>{setAdd(0),setFolder(false),setTrash(false),setFile(true)}} >
        <div className='flex flex-row justify-between mb-2'>
                <BorderAllIcon className='bg-slate-800 text-white  p-1 rounded-md text-sm lg:text-lg'/>
            </div>Home</button>
        

        <button className="bg-white hover:cursor-pointer rounded-md text-left p-2 w-20 lg:w-32 xl:w-64 hover:bg-gray-100 text-xs  lg:font-extrabold border-gray-300 border-solid text-slate-700" onClick={()=>{if(trash==false)setAdd(1),setTrash(false),setFolder(false),setFile(false)}} style={{backgroundColor:(trash)?"rgb(241 245 249)":"", color:(trash)?"white":"black"}}>
        <div className='flex flex-row justify-between mb-2 '>
                <PostAddIcon className=' text-white p-1 rounded-md text-sm lg:text-lg' style={{backgroundColor:(trash)?"rgb(241 245 249)":"rgb(30 41 59)"}}/>
                <AddIcon className=' w-4 text-slate-500 h-5 ' style={{ color:(trash)?"white":"black"}}/>
            </div>
            New project
        </button>

        <button className='bg-white hover:cursor-pointer rounded-md text-left p-2 w-20 lg:w-32 xl:w-64   hover:bg-gray-100 text-xs  lg:font-extrabold border-gray-300 border-solid text-slate-700' onClick={()=>{if(trash==false)setAdd(2),setTrash(false),setFolder(false),setFile(false)}} style={{backgroundColor:(trash)?"rgb(241 245 249)":"", color:(trash)?"white":"black"}}>
            <div className='flex flex-row justify-between mb-2'>
                <FolderOpenIcon className=' text-white p-1 rounded-md text-sm lg:text-lg' style={{backgroundColor:(trash)?"rgb(241 245 249)":"rgb(30 41 59)"}}/>
                <AddIcon className=' w-4 text-slate-500 h-5 ' style={{ color:(trash)?"white":"black"}}/>
            </div>
            
            New Folder
        </button>
        <button className=' hover:cursor-pointer rounded-md text-left p-2 w-20 lg:w-32 xl:w-64  bg-white hover:bg-gray-100 text-xs  lg:font-extrabold border-gray-300 border-solid text-slate-700' onClick={()=>{setAdd(0), setFolder(false),setFile(false),setTrash(true)}}>
        <div className='flex flex-row justify-between mb-2'>
                <RecyclingIcon className='bg-slate-800 text-white  p-1 rounded-md text-sm lg:text-lg'/>
                <AddIcon className=' w-4 text-slate-500 h-5 '/>
            </div>
            Recycle Bin</button>

        
        </div>
    </div>
  )
}

export default Options
