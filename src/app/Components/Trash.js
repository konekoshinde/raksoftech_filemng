'use client'
import React, { useEffect } from 'react'
import { useState } from 'react';

import { AppContext } from './Rows';
import Description from '@mui/icons-material/Description';
import ArrowCircleDown from '@mui/icons-material/ArrowCircleDown';
import FileOpen from '@mui/icons-material/FileOpen';
import { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function createData(name,type,id, date,download){
    return({name,type,id,date,download})
  }

function Trash() {
    const {rows,setRows, folder, setFolder,index,setIndex, addrow,setAddrow,starRow,setStarRow,trashRow,setTrashRow,trash,setTrash}=useContext(AppContext);
  
    
  
    
  return (
    <div className=' bg-white'>
      <div className='font-bold text-2xl text-center bg-gray-100 text-gray-600 mb-2'>
        {trashRow.length} in trash
      </div>
      
        <div className='overflow-y-scroll' style={{height:"81vh"}}>
      
      <div className='flex flex-row md:gap-x-20 gap-x-2 px-5 sm:px-10 hover:bg-gray-100 py-3 font-bold' style={{width:"75vw"}}>
        <div className='text-xs md:text-base flex-1 flex flex-row md:gap-x-5 text-ellipsis overflow-hidden font-bold' style={{maxWidth:"40vw"}}>
        
          <div className='flex flex-row gap-x-2'>
          {/* <Description className='w-3 md:w-5 bg-gray-100 md:p-2'/>  */}
          <div>
            <div>Name</div>
            <div className='text-xs text-gray-500 font-normal'>type</div>
          </div>
          </div>
          </div>
        <div className='min-w-10 text-xs md:text-base text-center'>ID</div>
        <div className='min-w-10 text-xs md:text-base  text-center '>yyyy-mm-dd</div>
        
        
      </div>
        { trashRow.map((i,ind)=>{
          
                return (
                <div key={ind} className='flex flex-row md:gap-x-20 gap-x-2 px-5 sm:px-10 hover:bg-gray-100 py-3' style={{width:"75vw"}}>
                  <div className='text-xs md:text-base flex-1 flex flex-row md:gap-x-5 text-ellipsis overflow-hidden font-bold' style={{maxWidth:"40vw"}}>
                    
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
                    
                    >Restore</button>
                    
                    <div className='flex flex-row gap-x-2'>
                    
                    
                    <Description className='w-3 md:w-5 bg-gray-100 md:p-2'/> 
                    <div>
                      <div>{i.name}</div>
                      <div className='text-xs text-gray-500 font-normal'>{i.type}</div>
                    </div>
                    </div>
                    
                    </div>
                  <div className='min-w-10 text-xs md:text-base text-center'>{i.id}</div>
                  <div className='min-w-10 text-xs md:text-base text-center '>{i.date}</div>
                  <a href={`${i.download}?download=1`} download className='text-cyan-600 w-5'>
                    <ArrowCircleDown />
                  </a>
        
                  <a href={i.download} target='_blank' className='w-5'>
                    <FileOpen />
                  </a>
                  
                </div>
        
                )}
              )
            
        }
        </div>
        

      

      <button onClick={()=>setTrash(false)}>Close</button>
    </div>
  )
}

export default Trash
