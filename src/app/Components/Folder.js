import React, { useEffect, useRef, useState } from 'react'
import { AppContext } from './Rows';
import { useContext } from 'react';
import AddIcon from '@mui/icons-material/Add';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

function Folder() {
    const {rows,setRows, folder, setFolder,index,setIndex,starRow,setStarRow,trashRow,setTrashRow}=useContext(AppContext);
    const [del,setDel]=useState([]);

    const [name,setName]=useState("");
    const ref=useRef(null);
    
    useEffect(()=>{ 
        if(rows.length==0){
            
            setRows(prevArray => [...prevArray, []]);
            setStarRow(prevArray => [...prevArray, []]);
            setFolder(prevArray => [...prevArray,"Temporary" ]);
            
        }
    },[rows])
    return (
        <div>
            <input name="folder" type="checkbox" className='w-2 md:w-4' onChange={(e)=>{
                      let checkboxes = document.getElementsByName('folder');
                    
                      for(let i=0, n=checkboxes.length;i<n;i++) {
                        checkboxes[i].checked = e.target.checked;
                      }
                      if(e.target.checked){
                        setDel([])
                        let temp=[];
                        for(let i=0;i<folder.length;i++)temp.push(i);
                        setDel(temp)

                      }
                      else setDel([])
            }}/>
            <input ref={ref} type="text" placeholder="Folder Name" onChange={(e)=>setName(e.target.value)}/>
            <button onClick={(e)=>{
                
                setRows(prevArray => [...prevArray, []]);
                setStarRow(prevArray => [...prevArray, []]);
                setFolder(prevArray => [...prevArray,name ]);
                ref.current.value=""
            }} type="submit"><AddIcon/></button>

            {del.length>0 && <button onClick={()=>{
                for(let i=0;i<del.length;i++){
                    let row=rows[del[i]]
                    let folderName={"folder":folder[index]}
                    for(let j=0;j<row.length;j++){
                        let data={...row[j],...folderName}
                        setTrashRow(prevArr => [...prevArr, data])
                        

                    }
                }
                
                
                setIndex(0)
                setStarRow(starRow.filter((row,ind)=>!del.includes(ind)))
                setRows( rows.filter((e,ind)=>!del.includes(ind)))
                setFolder(folder.filter((e,ind)=>!del.includes(ind)))
                setDel([])
                

                var clist = document.getElementsByName("folder");
                for (var i = 0; i < clist.length; ++i) { clist[i].checked = false; }
                
            }}>
                <DeleteIcon/>
            </button>}
            

            <div onsubmit="return false" id="frm" className='grid grid-rows-2 grid-flow-col overflow-x-scroll max-w-fit h-32 lg:h-40' style={{width:"80vw"}}>

            {folder.map((i,ind)=>{
                return(
                    <button style={{backgroundColor:index==ind?"rgb(187 255 208)":"rgb(241 245 249)"}} key={ind} onClick={(e)=>{
                        setIndex(ind)
                    }}
                     className='text-xs md:text-sm border-0 hover:cursor-pointer bg-gray-100 text-gray-500 flex flex-row w-32 lg:w-64 p-3 m-3 '>
                        
                        <input name="folder" type='checkbox' onChange={(e)=>{
                            // e.
                            if(e.target.checked) {
                                setDel([...del,ind])
                            }
                            else setDel(del.filter(e=>e!==ind))
                        }} />
                        

                        <FolderIcon className='hidden w-5 md:block bg-white'/>
                        <div className='font-bold text-ellipsis overflow-hidden ms-2'>{i}</div>
                    </button>
                )
            })}

            </div>

            
        </div>
    )
}

export default Folder
