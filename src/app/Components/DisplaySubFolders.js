import React, { useContext, useState } from 'react'
import { NewContext } from './AllFolders'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function DisplaySubFolders() {
    const {curFolder,hierarchy,setHierarchy,selectFolder,setSelectFolder}=useContext(NewContext)
    const [starFolder,setStarFolder]=useState([]);
    const [star,setStar]=useState(false)
    // console.log("curfolder",hierarchy)
  return (
    <div>
        <button onClick={()=>setStar((star)?false:true)}>star</button>
        {
            curFolder.map((i,ind)=>{
                if((star && starFolder.includes(i.id)) || !star)return(
                    <div key={ind}>
                    <button onClick={()=>setHierarchy(i.path+`>${i.name}`)}>open</button>
                    <input name="selectfolder" type="checkbox" onChange={(e)=>{
                        if(e.target.checked){
                            setSelectFolder([...selectFolder,i])
                        }
                        else setSelectFolder(selectFolder.filter(it=>it.id!=i.id))
                    }}/>

                    {
                        starFolder.includes(i.id)?(
                            <button onClick={()=>setStarFolder(starFolder.filter(it=>it!=i.id))}>
                                <StarIcon/>
                            </button>
                        ):(
                            <button onClick={()=>setStarFilestarFile([...starFile,i.id])}>
                                <StarBorderIcon/>
                            </button>
                        )

                    }
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

