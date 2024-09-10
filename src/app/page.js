'use client'


import Rows from './Components/Rows';

function Start(){

}
export default function Home() {
  // const [link,setLink]=useState("Home");
  return (
    <div className='border-2 border-gray-300 rounded-xl border-solid'>
    {/* <SideBarnew/> */}
    <Rows/>
    {/* <Temp/> */}
    {/* <Projects curDoc={0}/> */}
    {/* {link =="Projects" && } */}
    </div>
  );
}
