import React from 'react'
import { useState ,createContext} from 'react'
import Folder from './Folder';
import AddRow from './AddRow';
import DeleteRow from './DeleteRow';
import DisplayTable from './DisplayTable';
import SideBarnew from './SideBarnew';
import Trash from './Trash';


function createData(name,type,id, date,download){
    return({name,type,id,date,download})
  }

export const AppContext=createContext(null);

function Rows() {
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
    const [folder,setFolder]=useState(['Vendor1','Vendor2']);
    const [index,setIndex]=useState(0);
    const [addrow,setAddrow]=useState(false);
    const [starRow,setStarRow]=useState([[],[]]);
    const [trashRow,setTrashRow]=useState([]);
    const[trash,setTrash]=useState(false);

  return (
    <div className='p-0 m-0 flex flex-row w-full' style={{height:"95vh"}}>
      <SideBarnew/>

    <div>
    <AppContext.Provider value={{rows,setRows,folder,setFolder,index,setIndex,addrow,setAddrow,starRow,setStarRow,trashRow,setTrashRow,trash,setTrash}}>
    <div className='flex flex-col'>
    
    
    {/* <AddRow/> */}
    {/* <DeleteRow/> */}
    {/* <DisplayTable/> */}
    {trash ? <Trash/>:<div>
      <Folder/>
      <DisplayTable/>
      </div>
    }
    {/* <EnhancedTable/> */}
    </div>
    </AppContext.Provider>
    </div>
    </div>
  )
}

export default Rows
