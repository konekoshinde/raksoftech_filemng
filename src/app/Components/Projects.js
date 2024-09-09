'use client'
import { ArrowCircleDown, FileOpen } from '@mui/icons-material';
import DownloadIcon from '@mui/icons-material/Download';
import DescriptionIcon from '@mui/icons-material/Description';

import { useState,useEffect } from 'react'
function createData(name,size,id, date,download){
  return({name,size,id,date,download})
}

function Projects(props) {
  const [rows,setRows] = useState([
    [
        createData('img1vgjhkjlk;lkjhgfdfghkjlk','256MB', 1,'2004-04-12','https://zfmmdk49fjq8z4ix.public.blob.vercel-storage.com/img1-oE3hPOQOuq7Skd3SuuolModTBe5sBd.jpg'),
        createData('img1','256MB', 2,'2004-04-12','https://zfmmdk49fjq8z4ix.public.blob.vercel-storage.com/img1-oE3hPOQOuq7Skd3SuuolModTBe5sBd.jpg'),
        createData('img1','256MB', 22,'2004-04-12','https://zfmmdk49fjq8z4ix.public.blob.vercel-storage.com/img1-oE3hPOQOuq7Skd3SuuolModTBe5sBd.jpg'),
        createData('img1','256MB', 14,'2004-04-12','https://zfmmdk49fjq8z4ix.public.blob.vercel-storage.com/img1-oE3hPOQOuq7Skd3SuuolModTBe5sBd.jpg'),
        createData('img1','256MB', 41,'2004-04-12','https://zfmmdk49fjq8z4ix.public.blob.vercel-storage.com/img1-oE3hPOQOuq7Skd3SuuolModTBe5sBd.jpg'),
        createData('img1','256MB', 8,'2004-04-12','https://zfmmdk49fjq8z4ix.public.blob.vercel-storage.com/img1-oE3hPOQOuq7Skd3SuuolModTBe5sBd.jpg'),
    
    ],
    [
        createData('img1','355MB' ,1,'2002-12-23','https://zfmmdk49fjq8z4ix.public.blob.vercel-storage.com/img1-oE3hPOQOuq7Skd3SuuolModTBe5sBd.jpg'),
    ]
    
    ])

    const [newrecord, setNewrecord]=useState({
      "name":"",
      "id":"",
      "date":"",
      "download":"",
      "size":""
      
    })
    const [file, setFile] = useState(null);

    useEffect(()=>{
      if(newrecord.id && newrecord.date && newrecord.name && newrecord.download){
          console.log(newrecord)
        setRows(
            row=>{
                const cur= [...row]
                const data=createData(newrecord.name,newrecord.id,newrecord.date,newrecord.download)
                
                cur[props.curDoc]=[...cur[props.curDoc],data]
                return cur
            }
        )
      document.getElementById("frm").reset();
      }
    },[newrecord])

    if(props.curDoc===rows.length){
      setRows(prevArray => [...prevArray, []]);
    }
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
          alert('File uploaded successfully');
          const data=await response.json()
          console.log(data)
          setNewrecord( {...newrecord,download:data.url,size:data.size} )
          setAdd(false)
          
  
        } else {
          alert('Failed to upload file');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    };

  return (
    <div className='flex flex-col px-5 text-gray-700'>
      
    {props.curDoc>=0 && rows[props.curDoc] && rows[props.curDoc].length>0 &&
      rows[props.curDoc].map((i,ind)=>{
        return (
        <div className='flex flex-row md:gap-x-20 gap-x-2 px-5 sm:px-10 hover:bg-gray-100 py-5' style={{width:"75vw"}}>
          <div className='text-xs md:text-base flex-1 flex flex-row md:gap-x-5 text-ellipsis overflow-hidden font-bold'>
            <input type="radio" className='w-2 md:w-4'/>
            <div className='flex flex-row gap-x-2'>
            <DescriptionIcon className='w-3 md:w-5 bg-gray-100 md:p-2'/> 
            <div>
              <div>{i.name}</div>
              <div className='text-xs text-gray-500 font-normal'>{i.size}</div>
            </div>
            </div>
            </div>
          <div className='min-w-10 text-xs md:text-base'>{i.id}</div>
          <div className='min-w-20 text-xs md:text-base'>{i.date}</div>
          <a href={`${i.download}?download=1`} download className='text-cyan-600'>
            <ArrowCircleDown />
          </a>

          <a href={i.download} target='_blank'>
            <FileOpen />
          </a>
          
        </div>

        )
      })
                
      
    }
    </div>
  )
}

export default Projects
