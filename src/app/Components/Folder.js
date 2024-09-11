import React, { useEffect, useRef, useState } from 'react'
import { AppContext } from './Rows';
import { useContext } from 'react';
import AddIcon from '@mui/icons-material/Add';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';

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
    const [search,setSearch]=useState("");
    console.log(search)
    return (
        <div className='m-2 mb-10' style={{maxWidth:"90vw"}}>
            <div className=' flex flex-col lg:flex-row mb-10'>
            
            <div className='flex flex-row gap-x-1 mx-5  '>
            <SearchIcon className=' h-10 my-auto'/>
            <Autocomplete 
            disablePortal
            options={folder}
            onInputChange={(event, newInputValue) => {
                let t= folder.indexOf(newInputValue)
                if(t!=-1)setIndex(t)
            }}
            sx={{width:500, maxWidth:"40vw"}}
            renderInput={(params) => <TextField {...params} 
            className='hover:shadow-lg'
              />}
            />
            </div>
            <div className='flex flex-row  my-2 mx-3'>
            <input name="folder" type="checkbox" className='w-3 me-5 ms-3 xl:ms-5 hover:shadow-xl ' onChange={(e)=>{
                      let checkboxes = document.getElementsByName('chkbox');
                    
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
            <input ref={ref} type="text" placeholder="Folder Name" onChange={(e)=>setName(e.target.value)} className='hover:shadow-lg bg-slate-100 text-slate-500 border-0 w-48 xl:w-80 text-xs h-4 xl:h-8 my-auto me-2 p-1 rounded-lg'/>
            <button onClick={(e)=>{
                console.log(name)
                if(name!==""){
                setRows(prevArray => [...prevArray, []]);
                setStarRow(prevArray => [...prevArray, []]);
                setFolder(prevArray => [...prevArray,name ]);
                ref.current.value=""
                alert("successfully created a folder")
                }
                else alert("enter data")
            }} type="submit" className='bg-green-700 border-0 px-2 py-1 rounded-xl my-auto text-white hover:cursor-pointer hover:shadow-lg'><AddIcon className='text-xs xl:text-sm  m-auto'/><br/>add</button>
            
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
                
            }} className='mx-2 bg-red-100 border-0 py-1 px-2 hover:cursor-pointer text-red-800 my-auto rounded-lg'>
                <DeleteIcon className='text-sm xl:text-xl' />
                <br/>
                del
            </button>}
            </div>
            </div>
            

            <div id="frm" className='grid grid-rows-2 grid-flow-col max-w-fit h-20 xl:h-32  overflow-x-auto' style={{width:"70vw"}}>

            {folder.map((i,ind)=>{
                return(
                    <button key={ind} style={{backgroundColor:index==ind?"rgb(243 244 246)":"rgb(249 250 251)"}} onClick={(e)=>{
                        setIndex(ind)
                    }}
                     className='h-6 xl:h-10 hover:shadow-xl border-0 text-xs p-1 text-slate-700 hover:cursor-pointer bg-gray-50 flex flex-row w-32 xl:w-40 my-auto mx-2 xl:mx-4 px-3 xl:py-2 rounded-lg mb-10'>
                        
                        <input name="folder" type='checkbox' onChange={(e)=>{
                            // e.
                            if(e.target.checked) {
                                setDel([...del,ind])
                            }
                            else setDel(del.filter(e=>e!==ind))
                        }} className='me-5' />
                        

                        <FolderOpenIcon className='hidden p-1 rounded-full xl:block bg-slate-700 text-white text-base'/>
                        <div className='font-bold text-ellipsis overflow-hidden ms-2 xl:my-1'>{i}</div>
                    </button>
                )
            })}

            </div>

            
        </div>
    )
}

export default Folder
