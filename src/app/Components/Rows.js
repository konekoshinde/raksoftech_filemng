import React from 'react'
import { useState ,createContext} from 'react'
import Folder from './Folder';

import DisplayTable from './DisplayTable';
import SideBarnew from './SideBarnew';
import Trash from './Trash';
import AddRow from './AddRow';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HomeIcon from '@mui/icons-material/Home';
import DeleteIcon from '@mui/icons-material/Delete';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SettingsIcon from '@mui/icons-material/Settings';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import WidgetsIcon from '@mui/icons-material/Widgets';
import CloseIcon from '@mui/icons-material/Close';

function createData(name,type,id, date,download){
    return({name,type,id,date,download})
  }

export const AppContext=createContext(null);

function Rows() {
    const [rows,setRows] = useState([
        [
            createData('img1vgjhkjlk;lkjhgfdfghkjlk','256MB', 1,'2004-04-12','https://zfmmdk49fjq8z4ix.public.blob.vercel-storage.com/cat-551554_1280-O13dEL9BJKOvTLIdCAwoKOHn3EQQRy.jpg'),
            createData('img1','256MB', 2,'2004-04-12','https://zfmmdk49fjq8z4ix.public.blob.vercel-storage.com/cat-551554_1280-O13dEL9BJKOvTLIdCAwoKOHn3EQQRy.jpg'),
            createData('img1','256MB', 22,'2004-04-12','https://zfmmdk49fjq8z4ix.public.blob.vercel-storage.com/cat-551554_1280-O13dEL9BJKOvTLIdCAwoKOHn3EQQRy.jpg'),
            createData('img1','256MB', 14,'2004-04-12','https://zfmmdk49fjq8z4ix.public.blob.vercel-storage.com/cat-551554_1280-O13dEL9BJKOvTLIdCAwoKOHn3EQQRy.jpg'),
            createData('img1','256MB', 41,'2004-04-12','https://zfmmdk49fjq8z4ix.public.blob.vercel-storage.com/cat-551554_1280-O13dEL9BJKOvTLIdCAwoKOHn3EQQRy.jpg'),
            createData('img1','256MB', 8,'2004-04-12','https://zfmmdk49fjq8z4ix.public.blob.vercel-storage.com/cat-551554_1280-O13dEL9BJKOvTLIdCAwoKOHn3EQQRy.jpg'),
        
        ],
        [
            createData('img1','355MB' ,1,'2002-12-23','https://zfmmdk49fjq8z4ix.public.blob.vercel-storage.com/cat-551554_1280%20(1)-LbSq3nMR7QZHRWo0nF5YV888Nv871H.jpg'),
        ]
        
    ])
    const [folder,setFolder]=useState(['Vendor1','Vendor2']);
    const [index,setIndex]=useState(0);
    const [addrow,setAddrow]=useState(false);
    const [starRow,setStarRow]=useState([[],[]]);
    const [trashRow,setTrashRow]=useState([]);
    const[trash,setTrash]=useState(false);
    const [open, setOpen]=useState(true);

  return (
    <div className='p-0 m-0 flex flex-row w-full' style={{height:"95vh"}}>
      <div className='hidden xl:block text-slate-500 bg-gray-50'>
       <div className='px-10 flex flex-col  ' style={{height:"70vh"}}>

        <h2>FILE SYSTEM</h2>
        <div className='hover:cursor-pointer mt-20 p-1  flex flex-row justify-between hover:bg-black hover:text-white' onClick={()=>{
          setTrash(false);
          setAddrow(false);
        }}>Home<HomeIcon/></div>
        <div className='hover:cursor-pointer mt-2 p-1 flex flex-row justify-between hover:bg-black hover:text-white'>Option 1<WidgetsIcon/></div>
        <div className='hover:cursor-pointer mt-2 p-1 flex flex-row justify-between hover:bg-black hover:text-white'>Option 2<WidgetsIcon/></div>
        <br/>
        <br/>
        <br/>
        <div className='bg-gray-300 w-48 h-1 mx-auto'></div>
        <button className='mt-5 rounded-lg h-10 p-1 border-0 text-left text-slate-600  flex flex-row justify-between shadow-md hover:bg-black hover:text-white hover:cursor-pointer' onClick={()=>setTrash(true)}> Trash <DeleteIcon /> </button>

        <button className='mt-2 rounded-lg h-10 pt-1 text-slate-600 border-0 text-left flex flex-row justify-between shadow-md hover:bg-black hover:text-white hover:cursor-pointer' onClick={()=>{
          setTrash(false),setAddrow(true)}}> Add File <AddIcon/> </button>
       </div>
        <div className=' text-slate-800 h-20 flex flex-col justify-between p-10'>
            <div  className='flex flex-row justify-between hover:bg-black hover:text-white text-slate-500'>Support<ContactSupportIcon/></div>
            <div  className='flex flex-row justify-between hover:bg-black hover:text-white text-slate-500'>Setting<SettingsIcon /></div>
            <div className='flex flex-row justify-between hover:bg-black hover:text-white text-slate-500'>Version v.3.0 <UpgradeIcon/></div>
        
        </div>
        </div>
        
    <div>
    <AppContext.Provider value={{rows,setRows,folder,setFolder,index,setIndex,addrow,setAddrow,starRow,setStarRow,trashRow,setTrashRow,trash,setTrash,open, setOpen}}>
    <div className='flex flex-col'>
    <div className='flex mx-5 my-2 xl:hidden'>
    
    {!open && <button onClick={()=>setOpen(true)} className='w-10 border-0 p-1 shadow-md'><MenuIcon className='text-sm lg:text-base '/></button>}
    {open && <button onClick={()=>setOpen(false)} className='w-10 border-0 p-1 shadow-md'><CloseIcon className='text-sm lg:text-base '/></button>}
    </div>
    {/* {addrow && <AddRow/>} */}
    {/* <DeleteRow/> */}
    {/* <DisplayTable/> */}
    {trash ? <Trash/>:<div>
      <Folder/>
      <DisplayTable/>
      </div>
    }
    {/* <EnhancedTable/> */}
    </div>
    {open && <SideBarnew />}
    </AppContext.Provider>
    
    </div>
    </div>
  )
}

export default Rows
