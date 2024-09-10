import React, { use, useState } from 'react'

import { AppContext } from './Rows';
import Description from '@mui/icons-material/Description';
import ArrowCircleDown from '@mui/icons-material/ArrowCircleDown';
import FileOpen from '@mui/icons-material/FileOpen';
import { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import AddRow from './AddRow';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddIcon from '@mui/icons-material/Add';
import { Tooltip } from '@mui/material';


function DisplayTable() {
    const {rows,setRows, folder,index,addrow,setAddrow,starRow,setStarRow,trashRow,setTrashRow,trash,setTrash}=useContext(AppContext);
    const [del,setDel]=useState([]);
    const[ star,setStar]=useState(false);
    

    function chkTrash(obj){
      for(let i=0;i<trashRow.length;i++){
        let temp =trashRow[i]
        if(temp.id==obj.id)return true;
      }
      return false;
    }
    // console.log(trashRow,"trash")

    function chkPresent(obj){
      for(let i=0;i<starRow[index].length;i++){

          let temp =starRow[index][i]
          
          if(temp.id==obj.id)return true;
          

      }
      return false;
    }
  return (
    <div className='mt-5' >
      <div className='flex flex-row justify-between ' >
      <div className='flex flex-row xl:w-96 justify-around hover:shadow-xl bg-slate-100 drop-shadow-sm h-10 rounded-xl ms-5 my-3  w-72'>
      <div className='w-16 text-xs xl:text-sm overflow-hidden text-ellipsis border-0 text-slate-800 px-1 xl:px-3 font-bold my-auto' onClick={()=>setTrash(true)}>All Files</div>
      <button className='hover:bg-white text-xs xl:text-sm border-0 hover:cursor-pointer  text-gray-600 px-1 xl:px-3 border-solid border-1 rounded-md my-auto' onClick={()=>{setStar(false);setTrash(false)}}>all</button>
      
      <button className='hover:bg-black text-xs xl:text-sm text-white p-1 bg-yellow-500 border-0 hover:cursor-pointer  px-1 xl:px-3 border-solid border-1 rounded-md my-auto' onClick={()=>setStar(true)}>star</button>
      <button className='hover:bg-black text-xs xl:text-sm border-0 hover:cursor-pointer bg-red-700 p-1 text-white px-1 xl:px-3 border-solid border-1 rounded-md my-auto' onClick={()=>setTrash(true)}>trash</button>
      
      <button className='hover:bg-black text-xs xl:text-sm border-0 hover:cursor-pointer  px-1 xl:px-3 border-solid border-1 rounded-md my-auto bg-green-700 p-1 text-white' onClick={()=>setAddrow(true)}>add</button>
      </div>
      <div>{del.length>0 && ( 
      <div className='rounded-lg flex flex-row w-fit xl:w-96 me-5 px-0 xl:px-5 justify-around text-red-800 bg-red-100  drop-shadow-sm h-10 my-3 text-sm'>
        <div className='tracking-tighter font-bold my-auto me-5 hidden xl:block'>{del.length} SELECTED</div>
        
        <button  onClick={()=>{
          let temp_star=[]
  
          for(let cur_del=0;cur_del<del.length;cur_del++){
            temp_star.push( rows[index][ del[cur_del]].id)
          }
          setStarRow(
            row=>{
            const cur= [...row]
            cur[index]=cur[index].filter(c=>!temp_star.includes(c.id));
            return cur
        })
        
        for(let i=0;i<del.length;i++){
          let row=rows[index][del[i]]
          let folderName={"folder":folder[index]}
          let data={...row,...folderName}
          // console.log(data,"data",trashRow)
          setTrashRow(prevArr => [...prevArr, data])
          
        }
        

        let temp= rows[index].filter((e,ind)=>!del.includes(ind))
        
        setRows(values=>values.map((i,ind)=>ind===index?temp:i))

        setDel([]);
        
        var clist = document.getElementsByName("chkbox");
        for (var i = 0; i < clist.length; ++i) { clist[i].checked = false; }
        alert("deleted successfully")
        
      }} className="bg-red-300 border-0 px-1 text-red-800 my-auto  rounded-lg hover:cursor-pointer">
        <DeleteIcon className='text-sm xl:text-xl'/>

      </button>
      
      </div>)}
      </div>
      </div>


      <div className=' overflow-x-hidden mx-5 min-w-fit' style={{height:"45vh",minWidth:"70vw",maxWidth:"90vw"}}>
      
                <div className='sticky top-0 text-slate-500 bg-slate-100 flex flex-row xl:gap-x-20 lg:gap-x-16 gap-x-2 ps-10 overflow-x-hidden hover:bg-gray-100 py-3 ' >
                  <div className='text-xs xl:text-sm flex-1 flex flex-row xl:gap-x-5 text-ellipsis overflow-hidden'style={{maxWidth:"30vw"}} >
                  <input name="chkbox" type="checkbox" className='w-2 xl:w-4' onChange={(e)=>{
                      let checkboxes = document.getElementsByName('chkbox');
                     
                      for(let i=0, n=checkboxes.length;i<n;i++) {
                        checkboxes[i].checked = e.target.checked;
                      }
                      if(e.target.checked){
                        setDel([])
                        
                        let temp=[];
                        for(let i=0;i<rows[index].length;i++)temp.push(i);
                        setDel(temp)

                      }
                      else setDel([])
                    }}/>
                    
                      <div className='w-full'>Name</div>
                     
                    </div>
                  <div className='min-w-10 text-xs xl:text-sm text-center'>ID</div>
                  <div className='min-w-10 text-xs xl:text-sm  text-center '>yyyy-mm-dd</div>
                  <div className='min-w-5 text-xs xl:text-sm text-center' ></div>
                  <div className='min-w-3 text-xs xl:text-sm text-center'></div>
                  
                </div>
        { rows[index].length>0 && rows[index].map((i,ind)=>{
          if((star && chkPresent(i)) || !star )
                {return (
                <div key={ind} className=' hover:shadow-lg overflow-y-auto flex flex-row xl:gap-x-20 lg:gap-x-16 gap-x-2 ps-10 overflow-x-hidden hover:bg-gray-100 py-3' >
                  <div className='text-xs xl:text-sm flex-1 flex flex-row xl:gap-x-5 text-ellipsis overflow-hidden font-bold' style={{maxWidth:"30vw"}}>
                    <input name='chkbox' type="checkbox" className='w-2 xl:w-4' onChange={(e)=>{
                        if(e.target.checked) {
                          setDel([...del,ind])
                        }
                      else{
                        
                        setDel(del.filter(e=>e!=ind))
                      }
                    }}/>
                    
                    <div className='flex flex-row gap-x-2'>
                    { !chkPresent(i)? ( <button className='border-0 bg-inherit' onClick={()=>{
                      setStarRow(
                        row=>{
                        const cur= [...row]
                        
                        const data={
                          "id":i.id,
                        }
                        
                        cur[index]=[...cur[index],data]
                        return cur
                    })
                    //chkPresent(i)
                    }}>
                    <StarBorderIcon className='text-xs xl:text-lg'/>
                    </button>):(
                      <button className='border-0 bg-inherit' onClick={()=>{
                        setStarRow(
                          row=>{
                          const cur= [...row]
                          cur[index]=cur[index].filter(c=>c.id!=i.id);
                          return cur
                      })

                      }}>
                        <StarIcon className='text-xs xl:text-lg'/>
                      </button>
                    )}
                    
                    <Description className='hidden xl:block bg-gray-100 xl:p-2'/> 
                    <div>
                      <div>{i.name}</div>
                      <div className='text-xs text-gray-500 font-normal'>{i.type}</div>
                    </div>
                    </div>
                    
                    </div>
                  <div className='min-w-10 text-xs xl:text-sm text-center'>{i.id}</div>
                  <div className='min-w-10 text-xs xl:text-sm text-center '>{i.date}</div>
                  <a href={`${i.download}?download=1`} download className=' text-cyan-600 w-5'>
                    <ArrowCircleDown className='text-xs xl:text-2xl shadow-2xl' />
                  </a>
        
                  <a href={i.download} target='_blank' className='w-5 '>
                    <FileOpen className='text-xs xl:text-2xl shadow-2xl' />
                  </a>
                  
                </div>
        
                )}
              })
            
        }
        {rows[index].length==0 && 
        <div style={{width:"75vw"}} className=' text-center font-extrabold text-5xl text-slate-300 py-10'>
          Empty Folder
          <br/>
          <Tooltip title="add data" placement="top-start">
          <button onClick={()=>setAddrow(true)} className='hover:bg-slate-300 bg-slate-400 border-0 text-slate-50 rounded-xl m-1 p-1 hover:cursor-pointer'><AddIcon/>
          </button>
          </Tooltip>
          <br/>
        </div>
        }
        {star && starRow[index].length==0 && 
        <div style={{width:"75vw"}} className=' text-center font-extrabold text-5xl text-slate-300 py-10'>
          Empty Folder
          <br/>
          <br/>
        </div>
        }
        </div>
      
      
      {addrow && <AddRow/>}
      
      
    </div>
  )
}

export default DisplayTable
