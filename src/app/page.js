'use client'

import SideBarnew from './Components/SideBarnew';

import { useState } from 'react';
import Projects from './Components/Projects';
import Temp from './Components/Temp';
import Rows from './Components/Rows';

function Start(){

}
export default function Home() {
  const [link,setLink]=useState("Home");
  return (
    <div>
    {/* <SideBarnew/> */}
    <Rows/>
    {/* <Temp/> */}
    {/* <Projects curDoc={0}/> */}
    {/* {link =="Projects" && } */}
    </div>
  );
}
