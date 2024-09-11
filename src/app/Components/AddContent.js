import React, { useContext, useState , useEffect} from 'react'
import { NewContext } from './AllFolders'


function AddContent() {
    

    const{add,setAdd,curFolder,setCurFolder,curFiles,setCurFiles,allfolder,setAllFolder,allfiles,setAllFiles,hierarchy,file,setFile,folder,setFolder}= useContext(NewContext);
    const [uploadfile, setuploadFile] = useState(null);

    
    const [newrecord,setNewrecord]=useState({
        "name":"",
        "type":"",
        "id":"",
        "path":hierarchy,
        "date":"",
        "download":"",
    })
   

    const handleFileUpload = async () => {
        if(add==2)setNewrecord({...newrecord,download:"nil"})

        if (!uploadfile) return;
        const formData = new FormData();
        formData.append('file', uploadfile);
        try {
          const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
          });
          if (response.ok) {
            const data=await response.json()
            setNewrecord( {...newrecord,type:data.contentType,download:data.url} )
            alert('File uploaded successfully',newrecord);
          } else {
            alert('Failed to upload file');
        }
        } catch (error) {
          console.error('Error uploading file:', error);
        }
    };
    useEffect(()=>{
        //console.log(newrecord)
          if(((add==1 && newrecord.type ) || add==2)  && newrecord.download &&  newrecord.id && newrecord.date && newrecord.name ){
            if(add==1){
              setAllFiles([...allfiles,newrecord]);
              setCurFiles([...curFiles,newrecord]);
              setAdd(0)
              setFile(true)
            }
            else{
                let data={
                    "name":newrecord.name,
                    "id":newrecord.id,
                    "path":hierarchy,
                    "date":newrecord.date,
                }
                setAllFolder([...allfolder,data]);
                setCurFolder([...curFolder,data])
                
                alert("folder uploaded successfully")
                setAdd(0)
                setFolder(true)
              }
        }
    },[newrecord])
   
    

  return (
    <div className=' fixed top-0 left-0 h-full  w-full flex flex-col justify-center align-middle  bg-slate-100'>
        
        <form id='frm' className='bg-white shadow-2xl p-20 rounded-lg w-1/2 h-1/2 xl:w-1/4 xl:h-1/2 mx-auto flex flex-col ' >
      <h2 className='text-slate-500 text-base xl:text-lg '>Add Data in {hierarchy} </h2>
        <input className='p-2 my-2 border-slate-200 text-xs xl:text-lg text-slate-500 border-1 border-solid' placeholder='id-number' type='number' onChange={(e)=>setNewrecord( {...newrecord,id:e.target.value} )}/>
        <input className='p-2 my-2 border-slate-200 text-xs xl:text-lg text-slate-500 border-1 border-solid'  placeholder='Name' type='text' onChange={(e)=>setNewrecord( {...newrecord,name:e.target.value} )}/>
        {add==1 && <input className='p-2 my-2 border-slate-200 text-xs xl:text-lg text-slate-500 border-1 border-solid'  type="file" onChange={(e)=>setuploadFile(e.target.files[0])}/>}
        <input className='p-2 my-2 border-slate-200 text-xs xl:text-lg text-slate-500 border-1 border-solid' placeholder='date' type="date" onChange={(e)=>setNewrecord( {...newrecord,date:e.target.value} )}/>
        <div className='flex flex-row justify-between my-5'>
        <button onClick={()=>{
          
          if(add==1)setFile(true);
          else setFolder(true);
          setAdd(0)
          }} className='hover:bg-black hover:text-white border-slate-100  border-solid hover:cursor-pointer rounded-xl p-2 w-20'>Close</button>
        
        <button onClick={(e)=>{
          e.preventDefault();
          if(((add==1 && uploadfile) || add==2) && newrecord.name && newrecord.date && newrecord.id ){
            handleFileUpload();
            
          }
          else alert("Enter data")
        }} className='bg-green-700 border-0 text-white w-20 rounded-lg hover:cursor-pointer hover:bg-black '>add</button>
        
        </div>
        
                
        </form>
        
      
    </div>
  )
}

export default AddContent
