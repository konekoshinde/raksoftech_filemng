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
            
            setNewrecord( {...newrecord,download:data.url} )
            setNewrecord( {...newrecord,type:data.contentType} )
            alert('File uploaded successfully',newrecord);
           
           

          } else {
            alert('Failed to upload file');
          }
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      };
     
    useEffect(()=>{
      


        if(newrecord.id && newrecord.type && newrecord.date && newrecord.name && newrecord.download &&  addrow){
        
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
    <div  className='fixed top-0 left-0 h-full w-full flex flex-col justify-center align-middle text-center bg-white'>
    <form id='frm' className='w-1/4 h-1/2 mx-auto flex flex-col' >
      <button onClick={()=>setAddrow(false)}>Close</button>
        <h2>Add Data in {folder[index]} </h2>
        <input placeholder='id-number' type='number' onChange={(e)=>setNewrecord( {...newrecord,id:e.target.value} )}/>
        <input  placeholder='Name' type='text' onChange={(e)=>setNewrecord( {...newrecord,name:e.target.value} )}/>
        <input  type="file" onChange={(e)=>setFile(e.target.files[0])}/>
        <input placeholder='date' type="date" onChange={(e)=>setNewrecord( {...newrecord,date:e.target.value} )}/>
        <button onClick={(e)=>{
        e.preventDefault();
        if(newrecord.name && newrecord.date && file && newrecord.id){
            handleFileUpload();
        }
        else alert("Enter data")
        }}><AddIcon className='pt-2'/></button>
                
    </form>
    
    
      
    </div>
  )
}

export default AddRow
