import Image from "next/image";
import { Inter } from "next/font/google";
import Board from '../pages/board'
import { useState } from "react";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
const router= useRouter()
  const [formData,setFormData]=useState({
    player1:"",
    player2:""
  })
 const  handleFormChange =(event)=>{
  
const {name ,value} = event.target;
console.log(name,value)
setFormData((prev)=>({...prev,[name]:value}))
  }

  const handleSubmit=()=>{
    const {player1,player2}=formData
    if(player1 ==="" || player2===""){
      return alert("please fill all field")
    }
    localStorage.setItem("player1",formData.player1);
    localStorage.setItem("player2",formData.player2);
    router.push('/board')
  }
  return (
    <div className="h-[100vh] pt-24   ">
      <div className="flex justify-center items-center ">
        <div className="space-y-4">
          <h2 className="text-2xl text-center">
        Enter Players Name
        </h2>
        <div className="space-x-4 flex justify-between">
<label>Enter First Player</label>
<input type="text" placeholder="Enter 1stPlayer Name" className=" px-4 py-1" name="player1" onChange={handleFormChange} value={formData.player1} />
</div>
<div className="space-x-4">
<label>Enter Second Player</label>
<input type="text" placeholder="Enter 2ndPlayer Name" className=" px-4 py-1" name="player2" onChange={handleFormChange} value={formData.player2}/>
</div>
        </div>
        
      </div>
      <div className="flex justify-center mt-4">
      <button className=" bg-slate-400 border px-2 py-1 rounded-md hover:bg-slate-600 text-white" onClick={handleSubmit}>Submit</button>
      </div>
    
    </div>
  );
}
