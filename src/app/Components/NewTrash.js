import React, { useContext } from 'react'
import { NewContext } from './AllFolders'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import RestoreIcon from '@mui/icons-material/Restore';


function NewTrash() {
    const {alldocs,setAlldocs,trashDocs,setTrashDocs,trash,setTrash,file,setFile}=useContext(NewContext);
    // console.log(trashDocs)
  return (
    <div className=''>
        {
            trashDocs.map((i,ind)=>{
                return(
                    
                    <div className=' h-10 mb-1 text-sm lg:text-base  border-1 border-gray-100 border-solid flex flex-row justify-between hover:shadow-lg hover:bg-yellow-50'>
                    <div style={{maxWidth:"24vw"}} className=' flex-1 flex flex-row max-w-96 h-10 overflow-hidden text-ellipsis'>

                    <button onClick={()=>{
                        if(i.type==="folder")setAlldocs([...alldocs,i]);
                        setTrashDocs(trashDocs.filter(it=>it.id!=i.id));
                        alert("restored successfully")
                    }} className='border-0 hover:cursor-pointer hover:bg-yellow-200 p-1 bg-inherit'><RestoreIcon className='text-base me-1'/></button>

                    
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
                    <button disabled className='text-center bg-inherit border-0 hover:cursor-pointer'>
                        <MoreVertIcon/>
                    </button>
                    
                    
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default NewTrash
