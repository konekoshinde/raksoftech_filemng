import React, { useContext, useEffect, useState } from 'react'
import { NewContext } from './AllFolders'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DisplaySubFiles() {
    const {alldocs,setAlldocs,trashDocs,setTrashDocs, hierarchy,setHierarchy,select,setSelect,add,setAdd,file,setFile,folder,setFolder}=useContext(NewContext);

    const [starDoc,setstarDoc]=useState([]);
    const [threedots,setThreedots]=useState(-1);
    const [star,setStar]=useState(false);

    
    let curDocs= (alldocs.filter((i,ind)=>
        i.path==hierarchy && (folder)?i.type==="folder":i.download!="nil"
    ))
    
  return (
    <div>
        
        
        <div style={{height:"43vh"}} className=''>

        { ((starDoc.length==0 && star) || curDocs.length==0) &&
        <div className='font-extrabold text-xl lg:text-5xl text-center text-slate-300 pt-5 lg:pt-10 '>
            <div>Empty Folder</div>
            <span className='text-lg'>click on above options to add docs</span>
        </div>
        }
        
        {
            curDocs.map((i,ind)=>{
                if((star && starDoc.includes(i.id)) || !star )
                return(
                    <div className=' h-10 mb-1 text-sm lg:text-base  border-1 border-gray-100 border-solid flex flex-row justify-between hover:shadow-lg hover:bg-yellow-50' style={{position:(i.id==threedots)?"relative":"static"}}>
                    <div style={{maxWidth:"24vw"}} className=' flex-1 flex flex-row max-w-96 h-10 overflow-hidden text-ellipsis'>

                    <input name={(folder)?"selectfolder":"selectfile"} type="checkbox" onChange={(e)=>{
                        if(e.target.checked){
                            setSelect([...select,i])
                        }
                        else setSelect(select.filter(it=>it.id!=i.id))
                    }} className='me-2'/>
                    {
                        starDoc.includes(i.id)?(
                            <button onClick={()=>setstarDoc(starDoc.filter(it=>it!=i.id))} className='border-0 bg-inherit '>
                                <StarIcon className='text-lg my-auto'/>
                            </button>
                    ):(
                        <button onClick={()=>setstarDoc([...starDoc,i.id])} className='border-0 bg-inherit'>
                            <StarBorderIcon className='text-lg my-auto'/>
                        </button>
                    )
                    }
                    <DescriptionIcon className='my-auto bg-gray-100 p-2'/>
                    <div className=' ms-2 flex flex-col'>
                    <div className='my-auto '>{i.name}</div>
                    <div className='my-auto text-xs text-gray-500 '>{i.type}</div>
                    </div>
                    </div>
                    <div className='min-w-10 my-auto text-center'>{i.id}</div>
                    <div className=' text-center my-auto w-32 text-ellipsis h-10 text-sm lg:w-fit overflow-hidden flex flex-row justify-around font-bold'>
                        <AccountCircleIcon className='me-1'/>
                        <div>
                            information
                            <br/>
                            <span className='font-normal text-sm'>text</span>
                        </div>
                        <br/>
                        
                    </div>
                    <div className='min-w-5 text-center my-auto'>{i.date}</div>
                    <button onClick={()=>setThreedots((threedots== i.id)?-1:i.id)} className='bg-inherit border-0 hover:cursor-pointer'>
                        <MoreVertIcon />
                    </button>
                    {
                        threedots==i.id && 
                        <div className='flex flex-col absolute right-6 p-4 rounded-lg shadow-2xl border-1 border-gray-500 bg-white  w-20'>

                            {
                            (file)?<div>
                                <a href={`${i.download}?download=1`} download className='bg-gray-200 text-gray-600 hover:bg-gray-500 text-center rounded-md hover:text-white p-1'>
                                download</a>
                            <br/>
                            <a href={i.download} target="_blank" className='bg-gray-200 text-gray-600 hover:bg-gray-500 text-center rounded-md hover:text-white p-1 '>open</a>
                            </div>:
                            <button onClick={()=>{
                                setHierarchy(i.path+`>${i.name}`);
                                setThreedots(false);
                            }} className='border-0 bg-white text-gray-600 hover:bg-gray-500 text-center rounded-md hover:text-white p-1 hover:cursor-pointer'>open</button>
                            }
                            <button onClick={()=>{
                                setTrashDocs([...trashDocs,i])
                            
                                setAlldocs(alldocs.filter(it=>it.id!=i.id));
                                setThreedots(false);
                                alert("deleted successfully")
                            
                            }}className='border-0 bg-white text-gray-600 hover:bg-gray-500 text-center rounded-md hover:text-white p-1 hover:cursor-pointer'>delete</button>
                        </div>
                    }
                    </div>
                )
            })
        }
        </div>
        <div className='flex flex-row justify-between'>

        <button onClick={()=>{
            if(star)setStar(false);
            else setSelect([]),setStar(true);
            }} className=' h-8 text-yellow-700 font-bold border-0 hover:cursor-pointer rounded-lg' style={{backgroundColor:(star)?"rgb(254 240 138":"inherit"}}>view starred</button>
        {select.length>0   && <button onClick={()=>{
            setTrashDocs([...trashDocs,...select])
            setAlldocs(alldocs.filter(it=>!select.includes(it)));
            console.log(alldocs,"alldocs")
            setSelect([]);
            alert("deleted successfully")  
        }} className=' flex flex-row gap-x-20 rounded-lg px-20 bg-red-200 text-red-600 h-8 tracking-widest border-0 hover:cursor-pointer font-bold'> <span className='my-auto'>{select.length} selected</span> <DeleteIcon className='my-auto'/></button>}
        
        </div>
    </div>
  )
}


