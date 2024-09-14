import React, { useContext } from 'react'
import { NewContext } from './AllFolders';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FolderIcon from '@mui/icons-material/Folder';
import ReplyIcon from '@mui/icons-material/Reply';
import PostAddIcon from '@mui/icons-material/PostAdd';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

function Hierarchy() {
    const {alldocs,setAlldocs,curFolderName, setcurFolderName,trash,setTrash,trashDocs,setTrashDocs, hierarchy,setHierarchy,select,setSelect,add,setAdd,file,setFile,folder,setFolder}=useContext(NewContext)
    
  if(trash==false)
    return (
      
    <div className='h-32'>
      
      <div className=' my-2 text-gray-600 flex flex-col gap-y-1 mb-4'>
        <div className='text-black text-sm  flex flex-row font-sans font-bold  my-1 overflow-hidden text-ellipsis '> 
          Directory:: <span className='ms-1 bg-yellow-100 px-2 rounded-md font-normal w-64 me-5 text-center'>{hierarchy}</span>
          
          <span className='flex flex-row gap-x-1'>viewing:::
        {folder && <div className='w-10 text-center bg-yellow-100 px-2 rounded-md font-normal'>Folder</div>}
        {file==true && <div className='w-10 text-center bg-yellow-100 px-2 rounded-md font-normal'>file</div>}
        {trash==true && <div className='w-10 text-center bg-yellow-100 px-2 rounded-md font-normal'>trash</div>}
        </span>
        </div>
        
        <button onClick={()=>{
            
            
              let t=hierarchy.lastIndexOf('>');
              if(t!=-1)setHierarchy(hierarchy.substring(0,t))
            
        }} className=' w-32 text-start rounded-md px-2 border-1 border-gray-200 bg-inherit border-solid hover:cursor-pointer' style={{color:(hierarchy.includes('>'))?"black":"rgb(203 213 225)"}}
        ><ReplyIcon className='my-auto text-lg me-1' />Go Back</button>
        </div>

        <div className=' h-8 font-bold bg-slate-100 max-w-96 text-gray-600  px-2 pt-2 flex flex-row rounded-lg py-1 gap-x-5'>
        <button onClick={()=>{setAdd(0),setTrash(0),setFolder(false),setFile(true)}} className='hover:bg-white w-20  text-xs flex flex-row my-auto gap-x-2 border-0 rounded-md p-1  bg-inherit text-gray-600 hover:cursor-pointer' style={{fontWeight:((file)?"bolder":"normal" ),color:((file)?"rgb(107 114 128)":"rgb(203 213 225)")}}><InsertDriveFileIcon className='text-lg'/> File</button>

        <button onClick={()=>{setAdd(0),setTrash(0),setFile(false),setFolder(true)}} className=' w-20 text-xs flex flex-row my-auto gap-x-2 rounded-md p-1 border-0 bg-inherit text-gray-600 hover:cursor-pointer hover:bg-white' style={{fontWeight:((folder)?"bolder":"normal"),color:((folder)?"rgb(107 114 128)":"rgb(203 213 225)")}}><FolderIcon className='text-lg'/> Folder</button>

    
        <button onClick={()=>{setTrash(0),setFile(false),setFolder(false),setAdd(1)}} className=' hover:bg-white w-20  text-xs flex flex-row my-auto gap-x-2 border-gray-300 rounded-md p-1 border-solid bg-inherit text-gray-600 hover:cursor-pointer font-bold ' ><PostAddIcon className='text-lg'/> New</button>

        <button onClick={()=>{setTrash(0),setFile(false),setFolder(false),setAdd(2)}} className=' hover:bg-white w-20  text-xs flex flex-row my-auto gap-x-2 border-gray-300 rounded-md p-1 border-solid bg-inherit hover:cursor-pointer font-bold ' ><FolderOpenIcon className='text-lg '/> New</button>
        
        </div>
    </div>
      
  )
  else return(
    <div className='h-32'>
      <button onClick={()=>{
            
              setTrash(false);
              setFile(true);
            
            
        }} className='text-black bg-gray-100 mt-8 w-32 text-start rounded-md h-8 px-2 border-1 border-gray-200 bg-inherit border-solid hover:cursor-pointer' 
        ><ReplyIcon className='my-auto text-lg me-1' />Go Back</button>
      <div className='mt-4 mb-1 h-8 font-bold bg-slate-100 text-gray-600 rounded-lg px-2 pt-2'>Trash Can</div></div>
  )
}

export default Hierarchy
