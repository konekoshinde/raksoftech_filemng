'use client'
import * as React from 'react';
import PropTypes from 'prop-types';

import Drawer from '@mui/material/Drawer';

import { useState } from 'react';

import DisplayList from './DisplayList';
import AddIcon from '@mui/icons-material/Add';
import { LinearProgress } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';


export default function SideBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [cur,setCur]=useState(0);
  const [vendors, setVendors]=useState(['Vendor1','Vendor2']);
  const [newvendor, setnewvendor]=useState('');
  

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  function addNew(e){
    e.preventDefault();
    setVendors([...vendors,newvendor])
    setCur(vendors.length)
    document.getElementById('add').reset()
  }
  const drawer = (
    <div className='text-right pe-10 w-64 overflow-y-scroll bg-gradient-to-t  from-sky-900 from-20% to-slate-950 h-full'>

      <div className='tracking-widest font-extrabold text-cyan-600 text-2xl mb-16 my-5'>File Management</div>

      <div className='my-10  ps-5 text-cyan-200 text-left'>
      <div className='py-2'>Total Records: {vendors.length} </div>
      <LinearProgress variant="determinate" value={vendors.length*10} />
      </div>


      <ul className='  mt-16 p-0 list-none'>
        {vendors.map((text, index) => (
          <li key={index} className='m-2 hover:border hover:border-solid border-cyan-200 rounded-md '>
            <button onClick={()=>setCur(index)} className='bg-white/20 px-2 border-0 font-mono text-lg text-right rounded-r-lg m-1 hover:animate-pulse hover:cursor-pointer ' style={{color:(index==cur)?"white":"rgb(8 145 178)"}}>
              <FolderIcon className='mx-2  '/>{text}</button>
          </li>
        ))}
      </ul>
      <form id='add' className='my-12'>
      <input onChange={(e)=>setnewvendor(e.target.value)} type='text' placeholder='Vendor name' className='me-3 w-32 p-2 border-0 font-bold bg-slate-100 text-black'/>
      
      <button onClick={(e)=>{
        if(newvendor){
          setnewvendor('')
          addNew(e)
        }
        else alert("enter vendor name")

      }} type='submit' className='bg-cyan-600 hover:bg-sky-200 hover:cursor-pointer rounded-lg border-0 hover:animate-spin'>
        <AddIcon className='pt-2'/>
      </button>
      </form>
      
      
    
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
   <div className='flex flex-col sm:flex-row sm:gap-x-52 '>

        <div >
        <button onClick={handleDrawerToggle} className='bg-cyan-200  md:hidden h-10 border-0 w-full'>All Tables</button>
      
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerClose}
          onTransitionEnd={handleDrawerTransitionEnd}
          ModalProps={{
            keepMounted: true,
          }}
          
          sx={{
            display: {  md: 'none', xs:'block',sm:'block'},
          }}>
          <button className='bg-cyan-200  border-0 p-2 m-2' onClick={handleDrawerClose}>close</button>
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { sm: 'block', md: 'block',xs:'none' },
            width:100,
            
          }}
          
            open>
          {drawer}
        </Drawer>
        </div>
        <div className='lg:ms-20 md:ms-10 sm:m-0'>
        <div className=' text-cyan-600 tracking-widest font-extrabold uppercase text-xl mt-2'>
          {vendors[cur]}
        </div>
        <DisplayList curDoc={cur} />
        
        
        </div>
    </div>
   
  );
}

SideBar.propTypes = {
  window: PropTypes.func,
};
