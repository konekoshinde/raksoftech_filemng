'use client'


import AllFolders from './Components/AllFolders';

import SideBarnew from './Components/SideBarnew';

function Start(){

}
export default function Home() {
  // const [link,setLink]=useState("Home");
  return (
    <div className='flex flex-row'>
     {/* <SideBarnew/> */}
      <AllFolders/>
      
    {/* <Rows/> */}
    {/* <Temp/> */}
    {/* <Projects curDoc={0}/> */}
    {/* {link =="Projects" && } */}
    </div>
  );
}
