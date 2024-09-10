'use client'
import React, { useEffect } from 'react'
import { useState } from 'react';

import { AppContext } from './Rows';
import Description from '@mui/icons-material/Description';
import ArrowCircleDown from '@mui/icons-material/ArrowCircleDown';
import FileOpen from '@mui/icons-material/FileOpen';
import { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';

function createData(name,type,id, date,download){
    return({name,type,id,date,download})
  }

function Trash() {
    const {rows,setRows, folder, setFolder,index,setIndex, addrow,setAddrow,starRow,setStarRow,trashRow,setTrashRow,trash,setTrash}=useContext(AppContext);
  
    
  
    
  return (
    <div className=' bg-white mt-10 mx-5 my-auto' style={{width:"70vw"}}>
      <div className='font-bold text-xl text-center flex flex-row justify-between text-gray-600 mb-2'>
        <button onClick={()=>setTrash(false)} className='bg-green-700 text-white rounded-lg border-0 px-2 '><ArrowBackIosIcon className='text-xs'/></button>
        <div className='rounded-lg w-fit xl:w-96 text-red-800 bg-red-100  drop-shadow-sm py-1  px-5 text-sm'>{trashRow.length} in trash</div>
      </div>
      
        <div className='overflow-y-scroll overflow-x-hidden' style={{height:"70vh",width:"70vw"}}>
      
      <div className='bg-slate-200 h-3 flex flex-row xl:gap-x-20 lg:gap-x-10 gap-x-2 px-5 sm:px-10 hover:bg-gray-100 py-3'>
        <div className='text-xs font-bold  flex-1 flex flex-row xl:gap-x-5 text-ellipsis overflow-hidden ' style={{maxWidth:"30vw"}}>
        
          <div className='flex flex-row gap-x-2'>
          {/* <Description className='w-3 xl:w-5 bg-gray-100 xl:p-2'/>  */}
          <div style={{maxWidth:"30vw"}}>
            <div>Name</div>
            
          </div>
          </div>
          </div>
        <div className='min-w-10 text-xs  text-center'>ID</div>
        <div className='min-w-10 text-xs   text-center '>yyyy-mm-dd</div>
        
        
      </div>
      {trashRow.length==0 && 
        <div style={{width:"75vw"}} className=' text-center font-extrabold text-5xl text-slate-300 py-10'>
          Empty Folder
          <br/>
          <br/>
        </div>
        }
        { trashRow.map((i,ind)=>{
          
                return (
                <div key={ind} className=' hover:shadow-lg flex flex-row xl:gap-x-20 lg:gap-x-10 gap-x-2 px-5 sm:px-10 hover:bg-gray-100 py-3' style={{width:"75vw"}}>
                  <div className='text-xs xl:text-base flex-1 flex flex-row xl:gap-x-5 text-ellipsis overflow-hidden font-bold' style={{maxWidth:"30vw"}}>
                    
                    <button onClick={()=>{
                      let data={"name":i.name,
                      "type":i.type,
                      "id":i.id,
                      "date":i.date,
                      "download":i.download,

                      }
                      let t=folder.indexOf(i.folder)
                      
                      if(t==-1){
                        t=folder.length;
                        setFolder(prevArray => [...prevArray, i.folder]);
                        setStarRow(prevArray => [...prevArray, []]);
                        setRows(prevArray => [...prevArray, []]);
                        
                      }
                          setRows(
                            row=>{
                                const cur= [...row]
                                cur[t]=[...cur[t],data]
                                return cur
                            }
                          )
                      setTrashRow(trashRow.filter(j=>j!=i));
                      
                      alert("restored successfully")
                    }}
                    className='bg-green-100 border-0 rounded-full hover:cursor-pointer p-1 h-6'
                    ><SettingsBackupRestoreIcon className='text-xs xl:text-base'/></button>
                    
                    <div className='flex flex-row gap-x-2'>
                    
                    
                    <Description className='hidden md:block w-3 xl:w-5 bg-gray-100 xl:p-2'/> 
                    <div>
                      <div>{i.name}</div>
                      <div className='text-xs text-gray-500 font-normal'>{i.type}</div>
                    </div>
                    </div>
                    
                    </div>
                  <div className='min-w-10 text-xs xl:text-base text-center'>{i.id}</div>
                  <div className='min-w-10 text-xs xl:text-base text-center '>{i.date}</div>
                  <a href={`${i.download}?download=1`} download className='text-cyan-600 '>
                    <ArrowCircleDown className='text-xs xl:text-2xl shadow-lg' />
                  </a>
        
                  <a href={i.download} target='_blank' className='w-5'>
                    <FileOpen className='text-xs xl:text-2xl shadow-lg' />
                  </a>
                  
                  
                </div>
        
                )}
              )
            
        }
        </div>
        

      

      
    </div>
  )
}

export default Trash
