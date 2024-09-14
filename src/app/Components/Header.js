import React, { useContext } from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NewContext } from './AllFolders';
function Header() {
  const {alldocs,setAlldocs,trashDocs,setTrashDocs, hierarchy,setHierarchy,select,setSelect,add,setAdd,file,setFile,folder,setFolder}=useContext(NewContext)
  return (
    <div className='border-1 border-solid border-gray-200 h-10 mb-1 text-sm lg:text-base bg-gray-200  flex flex-row justify-between ' >
                    <div style={{maxWidth:"25vw"}} className='text-center flex-1 flex flex-row max-w-96 h-10 overflow-hidden text-ellipsis'>
                    <input type='checkbox'onChange={(e)=>{
                      setSelect([]);
                      let checkboxes=document.getElementsByName('selectfile') ;
                      if(folder) checkboxes= document.getElementsByName('selectfolder');
                      
                      for(let i=0, n=checkboxes.length;i<n;i++) {
                        checkboxes[i].checked = e.target.checked;
                      }
                      if(e.target.checked){
                        let t=[];
                          for(let i=0;i<alldocs.length;i++){
                            if(alldocs[i].path==hierarchy){
                              if(folder && alldocs[i].type==="folder")
                                t.push(alldocs[i]);
                              else if(file && alldocs[i].download!="nil")
                                t.push(alldocs[i]);

                            }
                          }
                          setSelect(t);
                          // console.log("chkbox",select);
                         
                      }
                  }}/>
                            
                    
                    {/* <DescriptionIcon className='my-auto bg-gray-100 p-2'/> */}
                    
                    <div className='my-auto ms-2 '>Name</div>
                    </div>
                    <div className='text-center  min-w-10 my-auto'>ID</div>
                    <div className='text-center  my-auto w-32'>
                    
                    author
                    </div>
                    <div className='text-center min-w-5 my-auto'>yyyy-mm-dd</div>
                    <button disabled className='text-center bg-inherit border-0 hover:cursor-pointer'>
                        <MoreVertIcon/>
                    </button>
                    
                    </div>
  )
}

export default Header
