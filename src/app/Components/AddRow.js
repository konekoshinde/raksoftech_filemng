import React, { useContext } from 'react'
import { AppContext } from './Rows';
import { useState,useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';


function createData(name,type,id, date,download){
    return({name,type,id,date,download})
  }

function AddRow() {
    const {rows,setRows, folder, setFolder,index,setIndex,addrow,setAddrow}=useContext(AppContext);
    const [file, setFile] = useState(null);
    const [newrecord, setNewrecord]=useState({
        "name":"",
        "type":"",
        "id":"",
        "date":"",
        "download":"",
        
    })

    const handleFileUpload = async () => {
       
        if (!file) return;
        
        const formData = new FormData();
        formData.append('file', file);
        
        try {
          const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
          });
          
          
          if (response.ok) {
            const data=await response.json()
            setNewrecord( {...newrecord,type:data.contentType,download:data.url} )
            // setNewrecord( {...newrecord,download:data.url} )
            
            alert('File uploaded successfully',newrecord);

          } else {
            alert('Failed to upload file');
          }
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      };
     
    useEffect(()=>{
      console.log(newrecord)
        if(newrecord.id && newrecord.type && newrecord.date && newrecord.name && newrecord.download ){
        setRows(
            row=>{
                const cur= [...row]
                const data=createData(newrecord.name,newrecord.type,newrecord.id,newrecord.date,newrecord.download)
                
                cur[index]=[...cur[index],data]
                return cur
            }
        )
        setAddrow(false)
        //document.getElementById("frm").reset();
    }
    },[newrecord])

  return (
    <div  className=' fixed top-0 left-0 h-full  w-full flex flex-col justify-center align-middle  bg-slate-100'>
    <form id='frm' className='bg-white shadow-2xl p-20 rounded-lg w-1/2 h-1/2 xl:w-1/4 xl:h-1/2 mx-auto flex flex-col ' >
      <h2 className='text-slate-500 text-base xl:text-lg '>Add Data in {folder[index]} </h2>
        <input className='p-2 my-2 border-slate-200 text-xs xl:text-lg text-slate-500 border-1 border-solid' placeholder='id-number' type='number' onChange={(e)=>setNewrecord( {...newrecord,id:e.target.value} )}/>
        <input className='p-2 my-2 border-slate-200 text-xs xl:text-lg text-slate-500 border-1 border-solid'  placeholder='Name' type='text' onChange={(e)=>setNewrecord( {...newrecord,name:e.target.value} )}/>
        <input className='p-2 my-2 border-slate-200 text-xs xl:text-lg text-slate-500 border-1 border-solid'  type="file" onChange={(e)=>setFile(e.target.files[0])}/>
        <input className='p-2 my-2 border-slate-200 text-xs xl:text-lg text-slate-500 border-1 border-solid' placeholder='date' type="date" onChange={(e)=>setNewrecord( {...newrecord,date:e.target.value} )}/>
        <div className='flex flex-row justify-between my-5'>
        <button onClick={()=>setAddrow(false)} className='hover:bg-black hover:text-white border-slate-100  border-solid hover:cursor-pointer rounded-xl p-2 w-20'>Close</button>
        
        <button onClick={(e)=>{
          e.preventDefault();
          if(newrecord.name && newrecord.date && file && newrecord.id){
            handleFileUpload();
          }
          else alert("Enter data")
        }} className='bg-green-700 border-0 text-white w-20 rounded-lg hover:cursor-pointer hover:bg-black '><AddIcon className='pt-2 '/></button>
        
        </div>
        
                
    </form>
    
    
      
    </div>
  )
}

export default AddRow
