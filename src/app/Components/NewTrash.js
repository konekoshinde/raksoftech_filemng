import React, { useContext } from 'react'
import { NewContext } from './AllFolders'

function NewTrash() {
    const {trashFiles,setTrashFiles,allfolder,setAllFolder,allfiles,setAllFiles,trash,setTrash,curFolder,setCurFolder,curFiles,setCurFiles,}=useContext(NewContext);

  return (
    <div>
        {
            trashFiles.map((i,ind)=>{
                return(
                    <div>
                    <button onClick={()=>{
                        if(i.download) setAllFiles([...allfiles,i]),setCurFiles(allfiles=>[...allfiles,i]);
                        else setAllFolder([...allfolder,i]),setCurFolder(allfiles=>[...allfiles,i]);
                        setTrashFiles(trashFiles.filter(it=>it.id!=i.id));
                    
                    }}>Restore</button>

                    <div>{i.name}</div>
                    <div>{i.id}</div>
                    <div>{i.date}</div>
                    </div>
                    
                )
                
            })
        }
      
    </div>
  )
}

export default NewTrash
