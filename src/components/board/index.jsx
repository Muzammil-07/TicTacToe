import React, { useEffect, useState } from "react";
import yes from '../../../public/images/yes.png'
import no from '../../../public/images/no.png'
import Image from "next/image";
import Swal from "sweetalert2";
import noteContext from "@/context/noteContext";
import { useContext } from "react";
const Index = () => {
  const [turn, setTurn] = useState("user1");
  const [user1Name,setUser1Name]=useState("");
  const [user2Name,setUser2Name]=useState("");
  const data= useContext(noteContext);
  const {updateTurn} = data;
  useEffect(()=>{
   setUser1Name(localStorage.getItem("player1"));
   setUser2Name(localStorage.getItem("player2"));
  },[])

  const handleChangeturn = () => {
    switch (turn) {
      case "user1":
        setTurn("user2");
        updateTurn("user2");
        break;
      case "user2":
        setTurn("user1");
        updateTurn("user1")
        break;
      default:
        break;
    }
  };
  const [btnObj, setBtnObj] = useState({
    btn1: {
      selectedBy: "",
      selected: false,
    },
    btn2: {
      selectedBy: "",
      selected: false,
    },
    btn3: {
      selectedBy: "",
      selected: false,
    },
    btn4: {
      selectedBy: "",
      selected: false,
    },
    btn5: {
      selectedBy: "",
      selected: false,
    },
    btn6: {
      selectedBy: "",
      selected: false,
    },
    btn7: {
      selectedBy: "",
      selected: false,
    },
    btn8: {
      selectedBy: "",
      selected: false,
    },
    btn9: {
      selectedBy: "",
      selected: false,
    },
  });
  const handleCancle=()=>{
    setBtnObj(
      {
        btn1: {
          selectedBy: "",
          selected: false,
        },
        btn2: {
          selectedBy: "",
          selected: false,
        },
        btn3: {
          selectedBy: "",
          selected: false,
        },
        btn4: {
          selectedBy: "",
          selected: false,
        },
        btn5: {
          selectedBy: "",
          selected: false,
        },
        btn6: {
          selectedBy: "",
          selected: false,
        },
        btn7: {
          selectedBy: "",
          selected: false,
        },
        btn8: {
          selectedBy: "",
          selected: false,
        },
        btn9: {
          selectedBy: "",
          selected: false,
        },
      }
    )
  }
  const condition = () => {
    const { btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9 } = btnObj;
    let con1 = [btn1, btn2, btn3];
    let con2 = [btn4, btn5, btn6];
    let con3 = [btn6, btn7, btn8];
    let con4 = [btn1, btn4, btn7];
    let con5 = [btn2, btn5, btn8];
    let con6 = [btn3, btn6, btn9];
    let con7 = [btn1, btn5, btn9];
    let con8 = [btn3, btn5, btn7];
    let resulta1 = con1.filter((doc) => {
      return doc.selectedBy == "user1";
    });
    let resulta2 = con2.filter((doc) => {
      return doc.selectedBy == "user1";
    });
    let resulta3 = con3.filter((doc) => {
      return doc.selectedBy == "user1";
    });
    let resulta4 = con4.filter((doc) => {
      return doc.selectedBy == "user1";
    });
    let resulta5 = con5.filter((doc) => {
      return doc.selectedBy == "user1";
    });
    let resulta6 = con6.filter((doc) => {
      return doc.selectedBy == "user1";
    });
    let resulta7 = con7.filter((doc) => {
      return doc.selectedBy == "user1";
    });
    let resulta8 = con8.filter((doc) => {
      return doc.selectedBy == "user1";
    });
    let resultb1 = con1.filter((doc) => {
      return doc.selectedBy == "user2";
    });
    let resultb2 = con2.filter((doc) => {
      return doc.selectedBy == "user2";
    });
    let resultb3 = con3.filter((doc) => {
      return doc.selectedBy == "user2";
    });
    let resultb4 = con4.filter((doc) => {
      return doc.selectedBy == "user2";
    });
    let resultb5 = con5.filter((doc) => {
      return doc.selectedBy == "user2";
    });
    let resultb6 = con6.filter((doc) => {
      return doc.selectedBy == "user2";
    });
    let resultb7 = con7.filter((doc) => {
      return doc.selectedBy == "user2";
    });
    let resultb8 = con8.filter((doc) => {
      return doc.selectedBy == "user2";
    });
    if (resulta1.length==3 | resulta2.length==3 | resulta3.length==3 | resulta4.length==3 | resulta5.length==3 | resulta6.length==3 | resulta7.length==3| resulta8.length==3){
      Swal.fire({
        icon: 'success',
        title: user1Name,
        text: 'Best Of Luck',
      })
     handleCancle();
    }
    if (resultb1.length==3 | resultb2.length==3 | resultb3.length==3 | resultb4.length==3 | resultb5.length==3 | resultb6.length==3 | resultb7.length==3| resultb8.length==3){
      Swal.fire({
        icon: 'success',
        title: user2Name,
        text: 'Best Of Luck',
      });
      handleCancle();
    }
    console.log(resulta1);
  };
  function handleButtonChange(doc) {
    setBtnObj((prev) => ({
      ...prev,
      [doc]: {
        selectedBy: turn,
        selected: true,
      },
    }));
    
    console.log(doc);
    console.log(btnObj);
    handleChangeturn();
    
  }
 
  condition();
  return (
    <div className="px-2 sm:px-12 h-[100vh] bg-blue-800 py-6 ">
    <div className=" grid grid-cols-3  h-full bg-purple-400 gap-4 py-4 px-4 rounded-md">
      <div
        className={`${
          btnObj.btn1.selected == true ? "bg-black" : "bg-purple-800"
        } h-[27vh] w-full flex justify-center items-center border-4 border-purple-400 transition-all delay-75 duration-200 col-span-1  hover:bg-black hover:shadow-md rounded-md `}
      >
        <button
          className="w-full h-full"
          onClick={() => {
            handleButtonChange("btn1");
          }}
        >
          {btnObj.btn1.selected == true ? (
            btnObj.btn1.selectedBy == "user1" ? (
              <span className="flex justify-center items-center"><Image src={yes} height={100} width={100}  className=" object-contain" alt="yes" /></span>
            ) : (
              <span className="flex justify-center items-center"><Image src={no} height={100} width={100}  className="  object-contain" alt="yes" /></span>
            )
          ) : (
            ""
          )}
        </button>
      </div>
      <div
        className={`${
          btnObj.btn2.selected == true ? "bg-black" : "bg-purple-800"
        } h-[27vh] w-full flex justify-center items-center border border-slate-400 transition-all delay-75 duration-200 col-span-1 hover:bg-black hover:shadow-md rounded-md `}
      >
        <button
          className="w-full h-full"
          onClick={() => {
            handleButtonChange("btn2");
          }}
        >
          {btnObj.btn2.selected == true ? (
            btnObj.btn2.selectedBy == "user1" ? (
              <span  className="flex justify-center items-center"><Image src={yes} height={100} width={100}  className=" object-contain" alt="yes" /></span>
            ) : (
              <span className="flex justify-center items-center"><Image src={no} height={100} width={100}  className="object-contain" alt="yes" /></span>
            )
          ) : (
            ""
          )}
        </button>
      </div>
      <div
        className={`${
          btnObj.btn3.selected == true ? "bg-black" : "bg-purple-800"
        } h-[27vh] w-full flex justify-center items-center border border-slate-400 transition-all delay-75 duration-200 col-span-1 hover:bg-black hover:shadow-md rounded-md `}
      >
        <button
          className="w-full h-full"
          onClick={() => {
            handleButtonChange("btn3");
          }}
        >
          {btnObj.btn3.selected == true ? (
            btnObj.btn3.selectedBy == "user1" ? (
              <span className="flex justify-center items-center"><Image src={yes} height={100} width={100}  className=" object-contain" alt="yes" /></span>
            ) : (
              <span className="flex justify-center items-center"><Image src={no} height={100} width={100}  className=" object-contain" alt="yes" /></span>
            )
          ) : (
            ""
          )}
        </button>
      </div>
      <div
        className={`${
          btnObj.btn4.selected == true ? "bg-black" : "bg-purple-800"
        } h-[27vh] w-full flex justify-center items-center border border-slate-400 transition-all delay-75 duration-200 col-span-1 hover:bg-black hover:shadow-md rounded-md `}
      >
        <button
          className="w-full h-full"
          onClick={() => {
            handleButtonChange("btn4");
          }}
        >
          {btnObj.btn4.selected == true ? (
            btnObj.btn4.selectedBy == "user1" ? (
              <span className="flex justify-center items-center"><Image src={yes} height={100} width={100}  className=" object-contain" alt="yes" /></span>
            ) : (
              <span className="flex justify-center items-center"><Image src={no} height={100} width={100}  className=" object-contain" alt="yes" /></span>
            )
          ) : (
            ""
          )}
        </button>
      </div>
      <div
        className={`${
          btnObj.btn5.selected == true ? "bg-black" : "bg-purple-800"
        } h-[27vh] w-full flex justify-center items-center border border-slate-400 transition-all delay-75 duration-200 col-span-1 hover:bg-black hover:shadow-md rounded-md `}
      >
        <button
          className="w-full h-full"
          onClick={() => {
            handleButtonChange("btn5");
          }}
        >
          {btnObj.btn5.selected == true ? (
            btnObj.btn5.selectedBy == "user1" ? (
              <span className="flex justify-center items-center" ><Image src={yes} height={100} width={100}  className=" object-contain" alt="yes" /></span>
            ) : (
              <span className="flex justify-center items-center"><Image src={no} height={100} width={100}  className=" object-contain" alt="yes" /></span>
            )
          ) : (
            ""
          )}
        </button>
      </div>
      <div
        className={`${
          btnObj.btn6.selected == true ? "bg-black" : "bg-purple-800"
        } h-[27vh] w-full flex justify-center items-center border border-slate-400 transition-all delay-75 duration-200 col-span-1 hover:bg-black hover:shadow-md rounded-md `}
      >
        <button
          className="w-full h-full"
          onClick={() => {
            handleButtonChange("btn6");
          }}
        >
          {btnObj.btn6.selected == true ? (
            btnObj.btn6.selectedBy == "user1" ? (
              <span  className="flex justify-center items-center"><Image src={yes} height={100} width={100}  className=" object-contain" alt="yes" /></span>
            ) : (
              <span className="flex justify-center items-center"><Image src={no} height={100} width={100}  className=" object-contain" alt="yes" /></span>
            )
          ) : (
            ""
          )}
        </button>
      </div>
      <div
        className={`${
          btnObj.btn7.selected == true ? "bg-black" : "bg-purple-800"
        } h-[27vh] w-full flex justify-center items-center border border-slate-400 transition-all delay-75 duration-200 col-span-1 hover:bg-black hover:shadow-md rounded-md `}
      >
        <button
          className="w-full h-full"
          onClick={() => {
            handleButtonChange("btn7");
          }}
        >
          {btnObj.btn7.selected == true ? (
            btnObj.btn7.selectedBy == "user1" ? (
              <span  className="flex justify-center items-center"><Image src={yes} height={100} width={100}  className=" object-contain" alt="yes" /></span>
            ) : (
              <span className="flex justify-center items-center"> <Image src={no} height={100} width={100}  className="object-contain" alt="yes" /></span>
            )
          ) : (
            ""
          )}
        </button>
      </div>
      <div
        className={`${
          btnObj.btn8.selected == true ? "bg-black" : "bg-purple-800"
        } h-[27vh] w-full flex justify-center items-center border border-slate-400  transition-all delay-75 duration-200 col-span-1 hover:bg-black hover:shadow-md rounded-md `}
      >
        <button
          className="w-full h-full"
          onClick={() => {
            handleButtonChange("btn8");
          }}
        >
          {btnObj.btn8.selected == true ? (
            btnObj.btn8.selectedBy == "user1" ? (
              <span className="flex justify-center items-center"><Image src={yes} height={100} width={100}  className=" object-contain" alt="yes" /></span>
            ) : (
              <span className="flex justify-center items-center"><Image src={no} height={100} width={100}  className=" object-contain" alt="yes" /></span>
            )
          ) : (
            ""
          )}
        </button>
      </div>
      <div
        className={`${
          btnObj.btn9.selected == true ? "bg-black" : "bg-purple-800"
        } h-[27vh] w-full flex justify-center items-center border border-slate-400 transition-all delay-75 duration-200 col-span-1 hover:bg-black hover:shadow-md rounded-md `}
      >
        <button
          className="w-full h-full"
          onClick={() => {
            handleButtonChange("btn9");
          }}
        >
          {btnObj.btn9.selected == true ? (
            btnObj.btn9.selectedBy == "user1" ? (
              <span  className="flex justify-center items-center"><Image src={yes} height={100} width={100}  className="object-contain" alt="yes" /></span>
            ) : (
              <span className="flex justify-center items-center"><Image src={no} height={100} width={100}  className="object-contain" alt="yes" /></span>
            )
          ) : (
            ""
          )}
        </button>
      </div>
    </div>
    </div>
  );
};

export default Index;
