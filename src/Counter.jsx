import React, { useState } from "react";


export default function Counter(){
    const [num,setNum]=useState(0);
        console.log("\nComponent has been executed again!");
        console.log("Num:"+num);
        const changeNum=()=>{
            console.log("Change function is running!");
            console.log("Number before updation:"+num);
            setNum(num+1);
            console.log("Num value after updation:"+num);
        }

    return(
        <div>
        <p>The num is : {num}</p>
            <button id="button" onClick={changeNum}>Press here to increment.</button>
        </div>
        

    );
}