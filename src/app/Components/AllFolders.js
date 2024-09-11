import { StarBorder } from '@mui/icons-material';
import React, { useContext, useEffect, useState } from 'react'

import AddContent from './AddContent';
import NewTrash from './NewTrash';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { createContext } from 'react';
import DisplaySubFolders from './DisplaySubFolders';
import DisplaySubFiles from './DisplaySubFiles';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import AddIcon from '@mui/icons-material/Add';
import PostAddIcon from '@mui/icons-material/PostAdd';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import RecyclingIcon from '@mui/icons-material/Recycling';
import ContrastIcon from '@mui/icons-material/Contrast';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ReplyIcon from '@mui/icons-material/Reply';

export const   NewContext=createContext(null);

function AllFolders() {

    const [allfiles,setAllFiles]=useState([]);
    const [curFolder,setCurFolder]=useState([]);
    const [curFiles,setCurFiles]=useState([]);
    const [trashFiles,setTrashFiles]=useState([]);
    const [hierarchy,setHierarchy]=useState("bdhsJA");
    const [select,setSelect]=useState([]);
    const[selectFolder,setSelectFolder]=useState([]);
    const [allfolder,setAllFolder]=useState([])
    
    
    const [add,setAdd]=useState(0);
    const[trash,setTrash]=useState(false);
    const[file,setFile]=useState(true);
    const[folder,setFolder]=useState(false);


    useEffect(()=>{
        setCurFolder([]);
        for(let i=0;i<allfolder.length;i++){
            if(allfolder[i].path==hierarchy){
                setCurFolder([...curFolder,allfolder[i]]);
            }
        }
        setCurFiles([]);
        for(let i=0;i<allfiles.length;i++){
            if(allfiles[i].path==hierarchy){
                setCurFiles([...curFiles, allfiles[i]]);
            }
        }
    },[hierarchy])
    let t=[];
    for(let i=0;i<allfolder.length;i++){
        t.push(allfolder[i].name)
    }
        
    
    

  return (
    <div className='md:px-5 px-2 rounded-lg lg:px-10 border-slate-300 border-1 border-solid'>
        
     
        
        <div className=' flex flex-row justify-between h-12 mb-5 mt-2'>
        <h2 className='font-sans my-auto'>Project files</h2>
        <div className='flex flex-row gap-x-1 h-10 overflow-hidden justify-center'>
            <ContrastIcon className=' h-5 my-auto text-slate-500'/>
            <Autocomplete 
            clearOnEscape
            className='border-solid text-slate-700 border-slate-300 rounded-lg '
            options={t}
            onInputChange={(event, newInputValue) => {
                
                let temp= -1;
                for(let i=0;i<allfolder.length;i++){
                    if(newInputValue==allfolder[i].name){
                        temp=i;
                        break;
                    }
                }
                if(temp!=-1)setHierarchy(allfolder[temp].path+`>${allfolder[temp].name}`)
                    console.log(temp,"tem")
            }}
            sx={{width:500, maxWidth:"40vw"}}
            renderInput={(params) => <TextField {...params} 
            
              />}
              />
        </div>
        <NotificationsNoneIcon className='my-auto text-slate-400'/>
        </div>

        <div className='flex flex-row gap-x-5 mb-5 me-5'>
        <button className=' hover:cursor-pointer rounded-md text-left p-2 w-20 lg:w-32 xl:w-64  bg-white hover:bg-gray-100 text-xs  lg:font-extrabold border-gray-300 border-solid text-slate-700' onClick={()=>{setAdd(0),setTrash(true), setFolder(false),setFile(false)}}>
        <div className='flex flex-row justify-between mb-2'>
                <RecyclingIcon className='bg-slate-800 text-white  p-1 rounded-md text-sm lg:text-lg'/>
                <AddIcon className=' w-4 text-slate-500 h-5 '/>
            </div>
            Recycle Bin</button>
        <button className=" hover:cursor-pointer rounded-md text-left p-2 w-20 lg:w-32 xl:w-64  bg-white hover:bg-gray-100 text-xs  lg:font-extrabold border-gray-300 border-solid text-slate-700" onClick={()=>{setAdd(1),setTrash(false),setFolder(false),setFile(false)}}>
        <div className='flex flex-row justify-between mb-2 '>
                <PostAddIcon className='bg-slate-800 text-white p-1 rounded-md text-sm lg:text-lg'/>
                <AddIcon className=' w-4 text-slate-500 h-5 '/>
            </div>
            New project
        </button>

        <button className=' hover:cursor-pointer rounded-md text-left p-2 w-20 lg:w-32 xl:w-64  bg-white hover:bg-gray-100 text-xs  lg:font-extrabold border-gray-300 border-solid text-slate-700' onClick={()=>{setAdd(2),setTrash(false),setFolder(false),setFile(false)}}>
            <div className='flex flex-row justify-between mb-2'>
                <FolderOpenIcon className='bg-slate-800 text-white p-1 rounded-md text-sm lg:text-lg'/>
                <AddIcon className=' w-4 text-slate-500 h-5 '/>
            </div>
            
            New Folder
        </button>
        <button className=' hover:cursor-pointer rounded-md text-left p-2 w-20 lg:w-32 xl:w-64  bg-white hover:bg-gray-100 text-xs  lg:font-extrabold border-gray-300 border-solid text-slate-700' >
        <div className='flex flex-row justify-between mb-2'>
                <BorderAllIcon className='bg-slate-800 text-white  p-1 rounded-md text-sm lg:text-lg'/>
                <AddIcon className=' w-4 text-slate-500 h-5 '/>
            </div>New Option</button>
        </div>
        <div className='h-8 bg-gray-100 my-2 text-gray-600 flex flex-row gap-x-10 me-5'>
         <button onClick={()=>{
            
            let t=hierarchy.lastIndexOf('>');
            if(t!=-1)setHierarchy(hierarchy.substring(0,t))
        }} className='w-10 border-0 hover:cursor-pointer'
        ><ReplyIcon className='my-auto p-1 bg-gray-200 text-slate-800' /></button>
        <div className='text-sm font-sans font-bold  my-1 max-w-96 overflow-hidden text-ellipsis '>{hierarchy}</div>

        </div>
        
        <button onClick={()=>{setAdd(0),setTrash(0),setFolder(false),setFile(true)}}>File</button>
        <button onClick={()=>{setAdd(0),setTrash(0),setFile(false),setFolder(true)}}>Folder</button>


        
        
        {(select.length>0 || selectFolder.length>0 ) && <button onClick={()=>{
            for(let i=0;i<select.length;i++){
                setTrashFiles([...trashFiles,select[i]])
                setAllFiles(allfiles.filter(it=>it.id!=select[i].id));
                setCurFiles(curFiles.filter(it=>it.id!=select[i].id));   
            }
            for(let i=0;i<selectFolder.length;i++){
                setTrashFiles([...trashFiles,selectFolder[i]]);
                setAllFolder(allfolder.filter(it=>it.id!=selectFolder[i].id));
                setCurFolder(curFolder.filter(it=>it.id!=selectFolder[i].id));
            }
            setSelect([]);
            setSelectFolder([]);
        }}>trash</button>}

        
        

        <input type='checkbox'onChange={(e)=>{
            setSelectFolder([]);
            let checkboxes=document.getElementsByName('selectfile') ;
            if(folder) checkboxes= document.getElementsByName('selectfolder');
            
            for(let i=0, n=checkboxes.length;i<n;i++) {
                checkboxes[i].checked = e.target.checked;
            }
            if(e.target.checked){
                for(let i=0;i<curFolder.length;i++)setSelectFolder([...selectFolder,curFolder[i]]);
            }
        }}/>
        
        <NewContext.Provider value={{allfolder,setAllFolder, allfiles,setAllFiles,curFolder,setCurFolder, curFiles,setCurFiles, trashFiles,setTrashFiles, hierarchy,setHierarchy,select,setSelect,selectFolder,setSelectFolder,add,setAdd,file,setFile,folder,setFolder}}>
        {folder==true && <DisplaySubFolders/>}
        {file==true && <DisplaySubFiles/>}
        
        {add && <AddContent/>}
        {trash==true && <NewTrash/>}
        </NewContext.Provider>
        
        
      
    </div>
  )
}

export default AllFolders
