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
    <div className='p-10  overflow-y-scroll'>
      <div className='font-extrabold text-cyan-500 text-3xl mb-16'>File Management</div>
      <ul className='m-0 p-0 list-none'>
        {vendors.map((text, index) => (
          <li key={index} className='p-0'>
            <button onClick={()=>setCur(index)} className='border-0 p-2 text-left font-mono text-base w-full rounded-r-lg m-1 hover:cursor-pointer ' style={{backgroundColor:(index==cur)?"rgb(207 250 254)":"white"}}>
              <FolderIcon className='mx-2 text-cyan-500'/>{text}</button>
          </li>
        ))}
      </ul>
      <form id='add'>
      <input onChange={(e)=>setnewvendor(e.target.value)} type='text' placeholder='Vendor name' className='me-3 p-2 border-0 font-bold bg-slate-100 text-black'/>
      <button onClick={(e)=>addNew(e)} type='submit' className='bg-cyan-100 hover:cursor-pointer pb-2 rounded-lg border-0'>
        <AddIcon className='pt-2'/>
      </button>
      </form>
      <div className='my-3 p-2'>
      <div>Total Records: {vendors.length} </div>
      <LinearProgress variant="determinate" value={vendors.length*10} />
      </div>
      
    
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
        <div className='ms-80 text-cyan-500 font-extrabold tracking-widest text-3xl mt-5'>
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
