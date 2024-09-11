import React, { useContext, useState } from 'react'
import { NewContext } from './AllFolders'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function DisplaySubFiles() {
    const {curFiles,select,setSelect}=useContext(NewContext);
    const [starFile,setStarFile]=useState([]);
    const [threedots,setThreedots]=useState(-1);
    const [star,setStar]=useState(false)
    
  return (
    <div>
        
        <button onClick={()=>setStar((star)?false:true)}>star</button>

        {
            curFiles.map((i,ind)=>{
                if((star && starFile.includes(i.id)) || !star )
                return(
                    <div>
                    <input name="selectfile" type="checkbox" onChange={(e)=>{
                        if(e.target.checked){
                            setSelect([...select,i])
                        }
                        else setSelect(select.filter(it=>it.id!=i.id))
                    }}/>
                    {
                        starFile.includes(i.id)?(
                            <button onClick={()=>setStarFile(starFile.filter(it=>it!=i.id))}>
                                <StarIcon/>
                            </button>
                    ):(
                        <button onClick={()=>setStarFile([...starFile,i.id])}>
                            <StarBorderIcon/>
                        </button>
                    )
                    }
                    <div>{i.name}</div>
                    <div>{i.type}</div>
                    <div>{i.id}</div>
                    <div>{i.date}</div>
                    <button onClick={()=>setThreedots(i.id)}>(three dots)Options</button>
                    {
                        threedots==i.id && 
                        <div>
                            <a href={`${i.download}?download=1`} download className=' text-cyan-600 w-5'>
                                download</a>
                                <br/>
                            <a href={i.download} target="_blank" className=' text-cyan-600 w-5'>open</a>
                            
                        </div>
                    }
                    </div>
                )
            })
        }
      
    </div>
  )
}


