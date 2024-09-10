import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeleteIcon from '@mui/icons-material/Delete';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SettingsIcon from '@mui/icons-material/Settings';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';

import { useContext } from 'react';
import { AppContext } from './Rows';


import WidgetsIcon from '@mui/icons-material/Widgets';


function SideBarnew() {
  const {addrow,setAddrow,trash,setTrash,open, setOpen}=useContext(AppContext);
  
    
  
    
  return (
    <div>
        
       
       <div className='xl:hidden fixed top-3 right-0 text-slate-500 bg-gray-50'>
       <div className='px-10 flex flex-col  ' style={{height:"70vh"}}>

       <h2>FILE SYSTEM</h2>
        <div className='hover:cursor-pointer mt-20 p-1  flex flex-row justify-between hover:bg-black hover:text-white'>Home<HomeIcon/></div>
        <div className='hover:cursor-pointer mt-2 p-1 flex flex-row justify-between hover:bg-black hover:text-white'>Option 1<WidgetsIcon/></div>
        <div className='hover:cursor-pointer mt-2 p-1 flex flex-row justify-between hover:bg-black hover:text-white'>Option 2<WidgetsIcon/></div>
        <br/>
        <br/>
        <br/>
        <div className='bg-gray-300 w-48 h-1 mx-auto'></div>
        <button className='mt-5 rounded-lg h-10 p-1 bg-inherit border-0 text-left text-slate-600 bg-red-300 flex flex-row justify-between hover:bg-black hover:text-white hover:cursor-pointer'onClick={()=>setTrash(true)}> Trash <DeleteIcon /> </button>

        <button className='mt-2 rounded-lg h-10 pt-1 bg-green-300 text-white border-0 text-left flex flex-row justify-between hover:bg-black hover:text-white hover:cursor-pointer' onClick={()=>{
          setTrash(false);
          setAddrow(true);
          setOpen(false);
        }}> Add File <AddIcon/> </button>
       </div>
        <div className=' text-slate-800 h-20 flex flex-col justify-between p-10'>
            <div  className='flex flex-row justify-between hover:bg-black hover:text-white text-slate-500'>Support<ContactSupportIcon/></div>
            <div  className='flex flex-row justify-between hover:bg-black hover:text-white text-slate-500'>Setting<SettingsIcon /></div>
            <div className='flex flex-row justify-between hover:bg-black hover:text-white text-slate-500'>Version v.3.0 <UpgradeIcon/></div>
        
        </div>
        </div>
        
    </div>
  )
}

export default SideBarnew
