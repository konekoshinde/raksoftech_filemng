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
      
    <div className=' lg:h-32 mb-2 lg:mb-0'>
      
      <div className=' my-2 text-gray-600 flex flex-col gap-y-2 lg:gap-y-1 mb-4'>
        <div className='text-black text-sm  flex flex-col lg:flex-row font-sans font-bold  lg:my-1 overflow-hidden text-ellipsis '> 
          Directory:: <span className='lg:ms-1 bg-yellow-100 lg:px-2 rounded-md font-normal w-full lg:w-64 me-5 mb-2 lg:mb-0 overflow-hidden text-ellipsis'>{hierarchy}</span>
          
          <span className='flex flex-row gap-x-1'>viewing:::
        {folder && <div className='w-10 text-center lg:bg-yellow-100 px-2 rounded-md font-normal'>Folder</div>}
        {file==true && <div className='w-10 text-center lg:bg-yellow-100 px-2 rounded-md font-normal'>file</div>}
        
        </span>
        </div>
        
        <button onClick={()=>{
            
            
              let t=hierarchy.lastIndexOf('>');
              if(t!=-1)setHierarchy(hierarchy.substring(0,t))
            
        }} className=' w-32 text-start rounded-md px-2 border-1 border-gray-200 bg-inherit border-solid hover:cursor-pointer' style={{color:(hierarchy.includes('>'))?"black":"rgb(203 213 225)"}}
        ><ReplyIcon className='my-auto text-lg me-1' />Go Back</button>
        </div>
        <div className='flex flex-col-reverse  lg:flex-row  gap-y-2 justify-between'>

        

        <div className=' font-bold bg-slate-50  max-w-96 text-gray-600  px-2 py-1 flex flex-row rounded-lg gap-x-2 lg:gap-x-5'>
        <button onClick={()=>{setAdd(0),setTrash(0),setFolder(false),setFile(true)}} className='hover:bg-white w-20  text-xs flex flex-row my-auto gap-x-2 border-0 rounded-md p-1  bg-inherit text-gray-600 hover:cursor-pointer' style={{fontWeight:((file)?"bolder":"normal" ),color:((file)?"rgb(107 114 128)":"rgb(203 213 225)")}}><InsertDriveFileIcon className='text-sm'/> File</button>

        <button onClick={()=>{setAdd(0),setTrash(0),setFile(false),setFolder(true)}} className=' w-20 text-xs flex flex-row my-auto gap-x-2 rounded-md p-1 border-0 bg-inherit text-gray-600 hover:cursor-pointer hover:bg-white' style={{fontWeight:((folder)?"bolder":"normal"),color:((folder)?"rgb(107 114 128)":"rgb(203 213 225)")}}><FolderIcon className='text-sm'/> Folder</button>

    
        <button onClick={()=>{setTrash(0),setFile(false),setFolder(false),setAdd(1)}} className=' hover:bg-white w-20  text-xs flex flex-row my-auto gap-x-2 border-gray-300 rounded-md p-1 border-solid bg-inherit text-gray-600 hover:cursor-pointer font-bold ' ><PostAddIcon className='text-sm'/> New</button>

        <button onClick={()=>{setTrash(0),setFile(false),setFolder(false),setAdd(2)}} className=' hover:bg-white w-20  text-xs flex flex-row my-auto gap-x-2 border-gray-300 rounded-md p-1 border-solid bg-inherit hover:cursor-pointer font-bold ' ><FolderOpenIcon className='text-sm '/> New</button>

        </div>
        <div className='h-6 flex flex-row gap-x-2 my-auto'>
          <input type='text' disabled placeholder='search' className='px-2 bg-white rounded-md'/>
          <button className='bg-white lg:w-20  text-xs  border-gray-300 rounded-md border-solid  hover:cursor-pointer font-bold' disabled>Filters</button>
          </div>
        </div>
    </div>
      
  )
  else return(
       
    <div className=' lg:h-32 mb-2 lg:mb-0'>
      
      <div className=' my-2 text-gray-600 flex flex-col gap-y-2 lg:gap-y-1 mb-4'>
        <div className='text-black text-sm  flex flex-col lg:flex-row font-sans font-bold  lg:my-1 overflow-hidden text-ellipsis '> 
          Directory:: <span className='lg:ms-1 bg-yellow-100 lg:px-2 rounded-md font-normal w-full lg:w-64 me-5 mb-2 lg:mb-0 overflow-hidden text-ellipsis'>{hierarchy}</span>
          
          <span className='flex flex-row gap-x-1'>viewing:::
        <div className='w-10 text-center lg:bg-yellow-100 px-2 rounded-md font-normal'>trash</div>
        
        </span>
        </div>
        
        <button onClick={()=>{
            setTrash(false);
            setFile(true);
            
        }} className=' w-32 text-start rounded-md px-2 border-1 border-gray-200 bg-inherit border-solid hover:cursor-pointer' 
        ><ReplyIcon className='my-auto text-lg me-1' />Go Back</button>
        </div>
        <div className='flex flex-col-reverse  lg:flex-row  gap-y-2 justify-between'>

        

        <div className=' font-bold bg-slate-50  w-96 text-gray-600  px-2 py-1 flex flex-row rounded-lg gap-x-2 lg:gap-x-5'>
        <button  className='   text-xs flex flex-row my-auto gap-x-2 border-gray-300 rounded-md p-1 border-0 bg-inherit  font-bold ' ><FolderOpenIcon className='text-sm '/> Recycle Bin</button>

        
        
        </div>
        <div className='h-6 flex flex-row gap-x-2 my-auto'>
          <input type='text' disabled placeholder='search' className='px-2 bg-white rounded-md'/>
          <button className='bg-white lg:w-20  text-xs  border-gray-300 rounded-md border-solid  hover:cursor-pointer font-bold' disabled>Filters</button>
          </div>
        </div>
    </div>

    // <div className='lg:h-32'>
    //   <button onClick={()=>{
            
    //           setTrash(false);
    //           setFile(true);
            
            
    //     }} className=' mb-4 text-black bg-gray-100 mt-16 lg:mt-7 w-32 text-start rounded-md h-8 px-2 border-1 border-gray-200 bg-inherit border-solid hover:cursor-pointer' 
    //     ><ReplyIcon className='my-auto text-lg me-1' />Go Back</button>

    //   <div className='flex flex-col-reverse  lg:flex-row  gap-y-2 justify-between lg:mb-0 mb-2'>
    //     <div className=' font-bold bg-slate-50  max-w-96 text-gray-600  px-2 py-1 flex flex-row rounded-lg gap-x-5'>
        
    //     <div className=' text-xs flex flex-row my-auto gap-x-2 p-1 font-bold ' ><FolderOpenIcon className='text-sm '/> Recycle Bin</div>

    //     </div>
    //     <div className='h-6 flex flex-row gap-x-2 my-auto'>
    //       <input type='text' disabled placeholder='search' className='px-2 bg-white rounded-md'/>
    //       <button className='bg-white lg:w-20  text-xs  border-gray-300 rounded-md border-solid  hover:cursor-pointer font-bold' disabled>Filters</button>
    //       </div>
    //     </div>
    //     </div>
  )
}

export default Hierarchy
