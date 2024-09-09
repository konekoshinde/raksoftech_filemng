import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function SideBarnew() {

    const [show,setShow]=useState(1);
    
  return (
    <div className='hidden lg:block w-1/6 text-slate-500 bg-gray-100 '>
        <div>
        <h1>FILE SYSTEM</h1>
        <ul className='list-none'>
            <li className='hover:cursor-pointer'>Home</li>
            <li className='hover:cursor-pointer'>All Projects</li>
            <li className='hover:cursor-pointer'>
                <button onClick={()=>setShow(~show)}>
                    Project Files
                    <ArrowDropDownIcon />
                </button>
            </li>
            {
                show>0 && 
                <div className='ml-5 '>
                <li className='hover:cursor-pointer'>Starred</li>
                <li className='hover:cursor-pointer'>Recent</li>
                <li className='hover:cursor-pointer'>Trash</li>
                </div>
            }

        </ul>
        
        <ul className='list-none '>
            
        </ul>
        </div>

        <div className=' bg-green-200 '>
        <ul className='list-none p-0 m-10'>
            <li>Support</li>
            <li>Settings</li>
            <li>Version</li>
        </ul>
      
        </div>
    </div>
  )
}

export default SideBarnew
