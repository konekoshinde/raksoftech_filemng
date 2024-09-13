import React, { useContext, useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeleteIcon from '@mui/icons-material/Delete';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SettingsIcon from '@mui/icons-material/Settings';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import PostAddIcon from '@mui/icons-material/PostAdd';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddchartIcon from '@mui/icons-material/Addchart';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

import WidgetsIcon from '@mui/icons-material/Widgets';
import { NewContext } from './AllFolders';


function SideBarnew() {
 
  const {open,setOpen,alldocs,setAlldocs,curFolderName, setcurFolderName,trash,setTrash,trashDocs,setTrashDocs, hierarchy,setHierarchy,select,setSelect,add,setAdd,file,setFile,folder,setFolder}=useContext(NewContext)
    
  return (
    <div className='hidden md:block text-sm ms-1 mx-auto font-semibold border-1 lg:border-solid border-slate-300 rounded-lg' style={{minWidth:"16vw"}}>
        
       
       <div className=' text-slate-500 bg-gray-50' >
       <div className='px-2 flex flex-col ' style={{height:"85vh"}}>

       <h2>FILE SYSTEM</h2>
       <div className='flex flex-col'>
        <div className=' hover:cursor-pointer mt-1 p-1 flex flex-row-reverse justify-end gap-x-2 hover:bg-black hover:text-white'>Home<HomeIcon className="text-base"/></div>
        
        <div className=' hover:cursor-pointer p-1 flex flex-row-reverse justify-end gap-x-2 hover:bg-black hover:text-white bg-slate-200'>Option 2<WidgetsIcon className="text-base"/></div>
        <ul className='m-0 list-none flex flex-col gap-y-3 text-sm'>
          <li>Sub Option 1</li>
          <li>Sub Option 2</li>
          <li>Sub Option 3</li>
          <li>Sub Option 4</li>
        </ul>
        
        
        <button className=' border-0 bg-inherit font-semibold text-slate-500 hover:cursor-pointer mt-5 p-1 flex flex-row-reverse justify-end gap-x-2 hover:bg-black hover:text-white' onClick={()=>{setAdd(0), setFolder(false),setFile(false),setTrash(true)}}> Recycle Bin <DeleteIcon className="text-base" /> </button>

        <button className='border-0 bg-inherit font-semibold text-slate-500 hover:cursor-pointer p-1 flex flex-row-reverse justify-end gap-x-2 hover:bg-black hover:text-white' onClick={()=>{ setFolder(false),setFile(false),setTrash(false),setAdd(1)}}> New Project <PostAddIcon className="text-base"/> </button>
        <button className='border-0 bg-inherit font-semibold text-slate-500 hover:cursor-pointer p-1 flex flex-row-reverse justify-end gap-x-2 hover:bg-black hover:text-white'> Dashboard <DashboardIcon className="text-base"/> </button>
        <button className='border-0 bg-inherit font-semibold text-slate-500 hover:cursor-pointer p-1 flex flex-row-reverse justify-end gap-x-2 hover:bg-black hover:text-white'> Analytics<AddchartIcon className="text-base"/> </button>
        <button className='border-0 bg-inherit font-semibold text-slate-500 hover:cursor-pointer p-1 flex flex-row-reverse justify-end gap-x-2 hover:bg-black hover:text-white'> Manage access<AccessibilityIcon className="text-base"/> </button>
       </div>
       </div>
        <div className=' text-slate-800 h-20 flex flex-col justify-end gap-y-1 px-2'>
            <div  className='flex flex-row-reverse justify-end gap-x-2 hover:bg-black hover:text-white text-slate-500'>Support<ContactSupportIcon/></div>
            <div  className='flex flex-row-reverse justify-end gap-x-2 hover:bg-black hover:text-white text-slate-500'>Setting<SettingsIcon /></div>
            <div className='flex flex-row-reverse justify-end gap-x-2 hover:bg-black hover:text-white text-slate-500'>Version v.3.0 <UpgradeIcon/></div>
            <br/>
            <div className=' text-black tracking-tighter flex flex-row-reverse justify-end gap-x-2 hover:bg-black hover:text-white '>Untitled UI <DragIndicatorIcon/></div>
        
        </div>
        </div>
        
    </div>
  )
}

export default SideBarnew
