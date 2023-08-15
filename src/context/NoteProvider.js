import NoteContext from "./noteContext";
import { useState } from "react";
const NoteProvider = (props)=>{
    const [userTurn,setUserTurn]=useState("user1");
    const updateTurn=(doc)=>{
        setUserTurn(doc)
    }
return(
    <NoteContext.Provider value={{userTurn,updateTurn}}>
        {props.children}
    </NoteContext.Provider>
)
}
export default NoteProvider