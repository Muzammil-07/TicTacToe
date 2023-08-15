import React, { useEffect, useState ,useContext} from 'react'
import noteContext from '@/context/noteContext';
const Sidebar = () => {
  const data= useContext(noteContext)
  const [player1,setPlayer1]=useState("Player1");
const [player2,setPlayer2]=useState("Player1");
useEffect(()=>{
  setPlayer1(localStorage.getItem("player1"));
  setPlayer2(localStorage.getItem("player2")); 
},[])
const {userTurn}=data;
console.log(data,"turn")
  return (
    <div className=' w-full px-4 py-4 bg-blue-900'>
        <h2 className='text-2xl text-slate-200'>Tic Tac Toe</h2>
        <div className={`${userTurn=="user1"?"underline underline-offset-2 text text-red-700":"text-white"} text-xl mt-2 `}>{player1} </div>
        <div className={`${userTurn!=="user1"?"underline underline-offset-2 text text-red-700":"text-white"} text-xl mt-2 `}>{player2} </div>
    </div>
  )
}

export default Sidebar