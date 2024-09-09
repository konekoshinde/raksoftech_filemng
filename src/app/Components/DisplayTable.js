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
    <div className='mt-1' >
      <div className='overflow-y-scroll' style={{height:"58vh"}}>
      
                <div className='flex flex-row md:gap-x-20 gap-x-2 px-5 sm:px-10 hover:bg-gray-100 py-3 font-bold' style={{width:"75vw"}}>
                  <div className='text-xs md:text-base flex-1 flex flex-row md:gap-x-5 text-ellipsis overflow-hidden font-bold' style={{maxWidth:"40vw"}}>
                  <input name="chkbox" type="checkbox" className='w-2 md:w-4' onChange={(e)=>{
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
                    <div className='flex flex-row gap-x-2'>
                    
                    <div>
                      <div>Name</div>
                      <div className='text-xs text-gray-500 font-normal'>type</div>
                    </div>
                    </div>
                    </div>
                  <div className='min-w-10 text-xs md:text-base text-center'>ID</div>
                  <div className='min-w-10 text-xs md:text-base  text-center '>yyyy-mm-dd</div>
                  
                  
                </div>
        { rows[index] && rows[index].map((i,ind)=>{
          if((star && chkPresent(i)) || !star )
                {return (
                <div key={ind} className='flex flex-row md:gap-x-20 gap-x-2 px-5 sm:px-10 hover:bg-gray-100 py-3' style={{width:"75vw"}}>
                  <div className='text-xs md:text-base flex-1 flex flex-row md:gap-x-5 text-ellipsis overflow-hidden font-bold' style={{maxWidth:"40vw"}}>
                    <input name='chkbox' type="checkbox" className='w-2 md:w-4' onChange={(e)=>{
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
                    <StarBorderIcon />
                    </button>):(
                      <button className='border-0 bg-inherit' onClick={()=>{
                        setStarRow(
                          row=>{
                          const cur= [...row]
                          cur[index]=cur[index].filter(c=>c.id!=i.id);
                          return cur
                      })

                      }}>
                        <StarIcon/>
                      </button>
                    )}
                    
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
              })
            
        }
        </div>
      {del.length>0 && ( 
      <div className='p-3 sticky top-0 bg-gray-200 flex flex-row justify-between'>
        <div className='tracking-tighter font-extrabold'>{del.length} SELECTED</div>
        <button className='' onClick={()=>{
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
        
      }}>
        <DeleteIcon className='text-sm'/>

      </button>
      
      </div>)}
      <button onClick={()=>setTrash(true)}>trash</button>
      <button onClick={()=>setAddrow(true)}>add</button>
      <button onClick={()=>setStar(true)}>star</button>
      <button onClick={()=>{setStar(false);setTrash(false)}}>all</button>
      {addrow && <AddRow/>}
      
      
    </div>
  )
}

export default DisplayTable
